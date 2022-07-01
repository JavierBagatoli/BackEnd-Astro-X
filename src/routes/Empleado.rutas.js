import { Router } from "express";
import * as empleados from "../controllers/empleado.controlador";
import * as controladorEnlace from "../controllers/empleadoEnlace.controler";
const rutas = Router();

rutas.get("/Empleados", empleados.getTodosEmpleados());

rutas.post("/CrearEmpleado", empleados.crearEmpleado());

rutas.post("/Validar", empleados.validarUsuario());

rutas.post("/ExisteMail", empleados.existeMail());

rutas.put("/agregarTarea", empleados.agregarTarea());

rutas.put("/quitarTarea", empleados.quitarTarea());

rutas.put("/completarTarea", empleados.completarTarea());

rutas.put("/descompletarTarea", empleados.descompletarTarea());

rutas.put("/modificarTarea", empleados.modificarTarea());

rutas.put("/agregarEnlace", controladorEnlace.agregarEnlace());

rutas.put("/quitarEnlace", controladorEnlace.quitarEnlace());

rutas.get("/:id", empleados.traerEmpleado());

rutas.delete("/:id", empleados.borrarEmpleado());

rutas.put("/:id", empleados.actualizarEmpleado());

export default rutas;
