import Task from "../models/Task"
import { getPagination } from "../libs/getPagination"

const mensajeError = (res , text) => {
    res.status(500).json({
        message: text
    })
}

const getAllTasks = () => async(req,res) =>{
    try{
        const {size, page} = req.query;
        const {limit, offset} = getPagination(page,size)
        const tasks = await Task.paginate({} , {offset,limit})
        res.json(tasks)
    } catch (error){
        mensajeError(res , "Something goes wrong retriving the tasks")
    } 
}

const createTask = () => async(req,res) => {
    if (!req.body.title){
        return res.status(400).send({message : "El titulo no puede ser vacio"})
    }

    const newTask = new Task(
        {
            title: req.body.title,
            description: req.body.description,
            done : req.body.done ? req.body.done : false
        })
    const taskSave = await newTask.save()
    console.log(newTask)
    res.json("New task created")
}

const findOneTask = () => async(req, res) => {
    const {id} = req.params; 
    try{
        const task = await Task.findById(id)
    
        if (!task) return res.status(404).json({
            message: `Task with id ${id} does not exists`
        })
    
        console.log(task)
        res.json(task)
    } catch( err){
        res.status(500).json({
            message: error.message || `Error retriving task with id: ${id}`        })
    }
    
}

const deleteTask = () => async(req, res) => {
    
    await Task.findByIdAndDelete(req.params.id)
    res.json(
        {message: `${req.params.id} Tarea eliminada`}
        )

}

const findAllDoneTask = () => async(req,res) =>{
    const tasks = await Task.find({done: true})
    res.json(tasks)
}

const updateTask = () => async(req, res) =>{
    await Task.findByIdAndUpdate(req.params.id, req.body)
    res.json({message: "Tarea actualizado"})
}

export {getAllTasks, createTask, findOneTask, deleteTask, findAllDoneTask, updateTask}

