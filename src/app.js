import express from "express"
import morgan from "morgan"
import cors from "cors"
import IndexRoutes from "./routes/Task.routes"

const app = express()

//Settings
app.set("port", process.env.PORT || 3000)

//middlewares
app.use(cors()) //En vacio es * si no corresponde poner origin: ""
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//Rutas
app.get("/", (req,res) => {
    res.json({message: "hola"})
})

app.use("/api/task",IndexRoutes)

export default app;