"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _Empleado = _interopRequireDefault(require("./routes/Empleado.rutas"));

var app = (0, _express["default"])(); //Settings

app.set("port", 3001); //middlewares

app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
})); //Rutas

app.get("/", function (req, res) {
  res.json({
    message: "Inicio"
  });
});
app.use("/api/empleados", _Empleado["default"]);
var _default = app;
exports["default"] = _default;