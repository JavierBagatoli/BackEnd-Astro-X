import Task from "../models/Tarea"
import { getPagination } from "../libs/getPagination"

const mensajeError = (res , text) => {
    res.status(500).json({
        message: text
    })
}

export const getTodaslasTareas = () => async(req,res) =>{
    try{
        const {size, page} = req.query;
        const {limit, offset} = getPagination(page,size)
        const tasks = await Task.paginate({} , {offset,limit})
        res.json(tasks)
    } catch (error){
        mensajeError(res , "Something goes wrong retriving the tasks")
    } 
}

export const crearTarea = () => async(req,res) => {
    if (!req.body.title){
        return res.status(400).send({message : "El titulo no puede ser vacio"})
    }

    const newTask = new Task(
        {
            title: req.body.title,
            description: req.body.description,
            fechaCreacion: req.body.fechaCreacion,
            fechaCompletado: req.body.fechaCompletado ,
            fechaLimite: req.body.fechaLimite
        })
    const taskSave = await newTask.save()
    console.log(newTask)
    res.json("New task created")
}

export const findOneTask = () => async(req, res) => {
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

export const deleteTask = () => async(req, res) => {
    
    await Task.findByIdAndDelete(req.params.id)
    res.json(
        {message: `${req.params.id} Tarea eliminada`}
        )

}

export const findAllDoneTask = () => async(req,res) =>{
    const tasks = await Task.find({done: true})
    res.json(tasks)
}

export const updateTask = () => async(req, res) =>{
    await Task.findByIdAndUpdate(req.params.id, req.body)
    res.json({message: "Tarea actualizado"})
}