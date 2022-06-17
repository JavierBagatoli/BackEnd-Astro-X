import {Schema, model} from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2"

const EmpleadoSchema = new Schema({
    nombre: {type: String, required: true, trim: true},
    apellido: {type: String, trim: true},
    mail: {type: String, required: true},
    pais: {type : String},
    edad: {type: Number},
    contrasenia: {String},
    puesto: {type: String},
    entorno: {type: Array},
    tareas: {type: Array},
    tareasConcluidas: {type: Array},

},
    {
    versionKey: false,
    timestamps: true
})
EmpleadoSchema.plugin(mongoosePaginate)
export default model("Empleado", EmpleadoSchema)