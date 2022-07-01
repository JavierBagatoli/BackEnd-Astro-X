import Empleado from "../models/Empleado";

const mensajeError = (res, text) => {
  res.status(500).json({
    message: text,
  });
};

export const agregarEnlace = () => async (req, res) => {
  const mailUsuario = req.body.mail;
  const nuevoEnlace = req.body.enlace;
  console.log(req.body);

  const empleadoEnt = await Empleado.findOne({ mail: `${mailUsuario}` });
  console.log(empleadoEnt);
  let nuevaListaEnlaces = [...empleadoEnt.entorno, nuevoEnlace];

  await Empleado.findOneAndUpdate(
    { mail: `${mailUsuario}` },
    { entorno: nuevaListaEnlaces }
  );

  res.json({ message: "Enlace agregado" });
};

export const quitarEnlace = () => async (req, res) => {
  const mailUsuario = req.body.mail;
  const eliminarEnlace = req.body.enlace;
  console.log(eliminarEnlace);

  const empleado = await Empleado.findOne({ mail: `${mailUsuario}` });
  let listaEnlaces = [...empleado.entorno];
  let nuevaListaEnlaces = listaEnlaces.filter(
    (enlace) => enlace.id !== eliminarEnlace.id
  );
  await Empleado.findOneAndUpdate(
    { mail: `${mailUsuario}` },
    { entorno: nuevaListaEnlaces }
  );
  res.json({ message: "Enlace eliminada" });
};
