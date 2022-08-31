"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));

var EmpleadoEsquema = new _mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  apellido: {
    type: String,
    required: true,
    trim: true
  },
  mail: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  pais: {
    type: String,
    required: true,
    trim: true
  },
  nacimiento: {
    type: Number,
    required: true,
    trim: true
  },
  contraseña: {
    type: String,
    required: true,
    trim: true
  },
  puesto: {
    type: String,
    required: true,
    trim: true
  },
  entorno: {
    type: Array
  },
  tareas: {
    type: Array
  }
}, {
  versionKey: false,
  timestamps: true
});
EmpleadoEsquema.plugin(_mongoosePaginateV["default"]);

var _default = (0, _mongoose.model)("Empleado", EmpleadoEsquema);

exports["default"] = _default;