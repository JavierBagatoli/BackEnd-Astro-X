import express from "express"
import morgan from "morgan"
import cors from "cors"
import IndexEmpeladosRutas from "./routes/Empleado.rutas"
import IndexRoutes from "./routes/Task.routes"

const app = express()

//Settings
app.set("port", 3001)

//middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Rutas


app.get("/", (req,res) => {
    res.json({message: "Inicio"})
})

app.use("/api/empleados",IndexEmpeladosRutas)

app.use("/api/tareas",IndexRoutes)

export default app;