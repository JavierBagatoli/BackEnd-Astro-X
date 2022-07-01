import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const EmpleadoEsquema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    apellido: {
      type: String,
      required: true,
      trim: true,
    },
    mail: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    pais: {
      type: String,
      required: true,
      trim: true,
    },
    nacimiento: {
      type: Number,
      required: true,
      trim: true,
    },
    contraseña: {
      type: String,
      required: true,
      trim: true,
    },
    puesto: {
      type: String,
      required: true,
      trim: true,
    },
    entorno: {
      type: Array,
    },
    tareas: {
      type: Array,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
EmpleadoEsquema.plugin(mongoosePaginate);
export default model("Empleado", EmpleadoEsquema);
