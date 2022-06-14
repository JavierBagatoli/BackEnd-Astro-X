import { Router } from "express";
import { createTask, getAllTasks, findOneTask, deleteTask, findAllDoneTask, updateTask } from "../controllers/task.constroller";
import Task from "../models/Task"
const router = Router();

router.get("/", getAllTasks()
)

router.post("/", createTask())

router.get("/DoneTasks", findAllDoneTask())

router.get("/:id", findOneTask())

router.delete("/:id", deleteTask())

router.put("/:id", updateTask())



export default router;