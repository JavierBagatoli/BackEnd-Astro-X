"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var empleados = _interopRequireWildcard(require("../controllers/empleado.controlador"));

var controladorEnlace = _interopRequireWildcard(require("../controllers/empleadoEnlace.controler"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var rutas = (0, _express.Router)();
rutas.get("/Empleados", empleados.getTodosEmpleados());
rutas.post("/CrearEmpleado", empleados.crearEmpleado());
rutas.post("/Validar", empleados.validarUsuario());
rutas.post("/ExisteMail", empleados.existeMail());
rutas.put("/agregarTarea", empleados.agregarTarea());
rutas.put("/quitarTarea", empleados.quitarTarea());
rutas.put("/completarTarea", empleados.completarTarea());
rutas.put("/descompletarTarea", empleados.descompletarTarea());
rutas.put("/modificarTarea", empleados.modificarTarea());
rutas.put("/agregarEnlace", controladorEnlace.agregarEnlace());
rutas.put("/quitarEnlace", controladorEnlace.quitarEnlace());
rutas.get("/:id", empleados.traerEmpleado());
rutas["delete"]("/:id", empleados.borrarEmpleado());
rutas.put("/:id", empleados.actualizarEmpleado());
var _default = rutas;
exports["default"] = _default;