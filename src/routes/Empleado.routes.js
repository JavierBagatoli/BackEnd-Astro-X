import { Router } from "express";
import * as tareas from "../controllers/task.constroller";
const router = Router();

router.get("/Empleados", tareas.getTodosEmpleados())

router.post("/CrearEmpleado", tareas.crearEmpleado())

router.delete("/:id", tareas.borrarEmpleado())

router.put("/:id", tareas.actualizarEmpleado())

export default router;