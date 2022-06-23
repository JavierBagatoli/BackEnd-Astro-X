import { Router } from "express";
import * as empleados from "../controllers/empleado.controlador";
const rutas = Router();

rutas.get("/Empleados", empleados.getTodosEmpleados())

rutas.post("/CrearEmpleado", empleados.crearEmpleado())

rutas.post("/Validar", empleados.validarUsuario())

rutas.post("/ExisteMail", empleados.existeMail())

rutas.put("/agregarTarea", empleados.agregarTarea())

rutas.put("/quitarTarea", empleados.quitarTarea())

rutas.put("/completarTarea", empleados.completarTarea())

rutas.put("/descompletarTarea", empleados.descompletarTarea())

rutas.put("/modificarTarea", empleados.modificarTarea())

rutas.get("/:id", empleados.traerEmpleado())

rutas.delete("/:id", empleados.borrarEmpleado())

rutas.put("/:id", empleados.actualizarEmpleado())

export default rutas;