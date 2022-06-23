import app from "./app"
import "./dabase"

app.listen(app.get("port"))
console.log("Servidor en el puerto: ", app.get("port"))