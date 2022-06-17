import { Router } from "express";
import * as tareas from "../controllers/task.constroller";
const router = Router();

router.get("/", tareas.getTodaslasTareas()
)

router.post("/", tareas.crearTarea())


router.get("/Empleados", tareas.getTodosEmpleados())

router.post("/CrearEmpleado", tareas.crearEmpleado())

router.delete("/:id", tareas.borrarEmpleado())

router.put("/:id", tareas.actualizarEmpleado())


router.get("/DoneTasks", tareas.findAllDoneTask())

router.get("/:id", tareas.findOneTask())

router.delete("/:id", tareas.deleteTask())

router.put("/:id", tareas.updateTask())



export default router;