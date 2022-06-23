import { Router } from "express";
import * as tareas from "../controllers/task.constroller";
const router = Router();

router.get("/", tareas.getTodaslasTareas()
)

router.post("/", tareas.crearTarea())

router.get("/DoneTasks", tareas.findAllDoneTask())

router.get("/:id", tareas.findOneTask())

router.delete("/:id", tareas.deleteTask())

router.put("/:id", tareas.updateTask())



export default router;