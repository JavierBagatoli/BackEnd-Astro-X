import Empleado from "../models/Empleado";
import { getPagination } from "../libs/getPagination";
const bcrypt = require("bcrypt");

const mensajeError = (res, text) => {
  res.status(500).json({
    message: text,
  });
};

export const getTodosEmpleados = () => async (req, res) => {
  try {
    const { size, page } = req.query;
    const { limit, offset } = getPagination(page, size);
    const empleados = await Empleado.paginate({}, { offset, limit });
    res.status(200).json(empleados).end();
  } catch (error) {
    mensajeError(res, "Algo salio mal al traer los empleados");
  }
};

export const crearEmpleado = () => async (req, res) => {
  try {
    const newEmpleado = new Empleado({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      mail: req.body.mail,
      pais: req.body.pais,
      nacimiento: req.body.nacimiento,
      contraseña: req.body.contraseña,
      puesto: req.body.puesto,
      entorno: req.body.entorno,
      tareas: req.body.tareas,
      tareasConcluidas: req.body.tareasConcluidas,
    });
    const empleadoGuardado = await newEmpleado.save();
    res.status(200).json("Empleado Creado");
  } catch (e) {
    res.json(e);
  }
};

export const traerEmpleado = () => async (req, res) => {
  try {
    const empleado = await Empleado.findById(req.params.id);
    empleado.contraseña = "";
    res.status(200).json(empleado);
  } catch (e) {
    res.status(500).json({ message: `El empleado no ha sido encontrado ${e}` });
  }
};

export const borrarEmpleado = () => async (req, res) => {
  try{
    const empleado = await Empleado.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: `${req.params.id} Empleado eliminado` });
  }catch(e){
    res.status(500).json({ message: `El empleado no ha sido encontrado ${e}` });
  }
  
};

export const actualizarEmpleado = () => async (req, res) => {
  const idEmpleado = req.params.id;
  
  try {
    await Empleado.findByIdAndUpdate(idEmpleado, req.body);
    res.status(200).json({ message: "Empleado actualizado" });
  } catch (e) {
    res.status(500).json({ message: `Error al actualizar empleado: ${e}`});
  }
};

export const validarUsuario = () => async (req, res) => {
  const mailUsuario = req.body.mail;
  const contraseñaUsuario = req.body.contraseña;

  try {
    const empleado = await Empleado.findOne({
      mail: `${mailUsuario}`,
    });
    let esValido = await bcrypt
      .compare(contraseñaUsuario, empleado.contraseña)
      .then((res) => res);
    if (esValido) {
      res.status(200).json(empleado);
    } else {
      res.status(203).json({ respuesta: "Error al iniciar sesión" });
    }
  } catch (e) {
    res.status(500).json({ respuesta: "Error al iniciar sesión" });
  }
};

export const existeMail = () => async (req, res) => {
  const mailUsuario = req.body.mail;
  let respuesta;

  try{
    const empleado = await Empleado.findOne({ mail: `${mailUsuario}` });
    if (empleado !== null) {
      respuesta = "Ya existe";
    } else {
      respuesta = "No existe";
    }
    res.status(200).json({ respuesta: `${respuesta}` });

  }catch(e){
    res.status(500).json({ respuesta: "Eror de servidor: " , e })
  }
  
};

export const agregarTarea = () => async (req, res) => {
  try{
    const mailUsuario = req.body.mail;
    const nuevaTarea = req.body.tarea;
    const tareasEmpleado = await Empleado.findOne({ mail: `${mailUsuario}` });
    let nuevaListaTareas = [...tareasEmpleado.tareas, nuevaTarea];
    await Empleado.findOneAndUpdate(
      { mail: `${mailUsuario}` },
      { tareas: nuevaListaTareas }
    );
    res.status(200).json({ message: "Tarea agregada" });
  }catch(e){
    res.status(500).json({ message: "Fallo al agregar tarea" });
  }
  
};

export const quitarTarea = () => async (req, res) => {
  const mailUsuario = req.body.mail;
  const eliminarTarea = req.body.tarea;
  const tareasEmpleado = await Empleado.findOne({ mail: `${mailUsuario}` });
  let listaTareas = [...tareasEmpleado.tareas];
  let nuevaListaTareas = listaTareas.filter(
    (tarea) => tarea.fechaCreacion !== eliminarTarea.fechaCreacion
  );
  await Empleado.findOneAndUpdate(
    { mail: `${mailUsuario}` },
    { tareas: nuevaListaTareas }
  );
  res.json({ message: "Tarea eliminada" });
};

export const completarTarea = () => async (req, res) => {
  const mailUsuario = req.body.mail;
  const modificarTarea = req.body.tarea;
  modificarTarea.fechaCompletado = Date.now();
  const tareasEmpleado = await Empleado.findOne({ mail: `${mailUsuario}` });
  let listaTareas = [...tareasEmpleado.tareas];
  let nuevaListaTareas = listaTareas.filter(
    (tarea) => tarea.fechaCreacion !== modificarTarea.fechaCreacion
  );
  nuevaListaTareas = [modificarTarea, ...nuevaListaTareas];
  const nuevoEmpleado = await Empleado.findOneAndUpdate(
    { mail: `${mailUsuario}` },
    { tareas: nuevaListaTareas }
  );
  res.json({ message: "actualización completada" });
};

export const descompletarTarea = () => async (req, res) => {
  const mailUsuario = req.body.mail;
  let modificarTarea = req.body.tarea;
  modificarTarea.fechaCompletado = null;
  const tareasEmpleado = await Empleado.findOne({ mail: `${mailUsuario}` });
  let listaTareas = [...tareasEmpleado.tareas];
  let nuevaListaTareas = listaTareas.filter(
    (tarea) => tarea.fechaCreacion !== modificarTarea.fechaCreacion
  );
  nuevaListaTareas = [modificarTarea, ...nuevaListaTareas];
  const nuevoEmpleado = await Empleado.findOneAndUpdate(
    { mail: `${mailUsuario}` },
    { tareas: nuevaListaTareas }
  );
  res.json({ message: "actualización completada" });
};

export const modificarTarea = () => async (req, res) => {
  try {
    let modificarTarea = req.body.tarea;
    if (modificarTarea.fechaCreacion === null) {
      res.json({
        message: `La modificación de la tarea ha fallado, id no valido`,
      });
    } else {
      let listaTareas = await asignarTareasDeEmpleado(req.body.mail);
      let nuevaListaTareas = listaTareas.filter(
        (tarea) => tarea.fechaCreacion !== modificarTarea.fechaCreacion
      );
      nuevaListaTareas = [modificarTarea, ...nuevaListaTareas];
      await Empleado.findOneAndUpdate(
        { mail: `${req.body.mail}` },
        { tareas: nuevaListaTareas }
      );
      res.json({ message: "actualización completada" });
    }
  } catch (e) {
    res.json({ message: `La modificación de la tarea ha fallado: ${e}` });
  }
};

const asignarTareasDeEmpleado = async (mailEmpleado) => {
  const empleadoEncontrado = await Empleado.findOne({
    mail: `${mailEmpleado}`,
  });
  const listaTareasEmpleado = [...empleadoEncontrado.tareas];
  return listaTareasEmpleado;
};
