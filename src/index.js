import app from "./app"
import "./dabase"

app.listen(app.get("port"))
console.log("server on port ", app.get("port"))