"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validarUsuario = exports.traerEmpleado = exports.quitarTarea = exports.modificarTarea = exports.getTodosEmpleados = exports.existeMail = exports.descompletarTarea = exports.crearEmpleado = exports.completarTarea = exports.borrarEmpleado = exports.agregarTarea = exports.actualizarEmpleado = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Empleado = _interopRequireDefault(require("../models/Empleado"));

var _getPagination2 = require("../libs/getPagination");

var bcrypt = require("bcrypt");

var mensajeError = function mensajeError(res, text) {
  res.status(500).json({
    message: text
  });
};

var getTodosEmpleados = function getTodosEmpleados() {
  return /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _req$query, size, page, _getPagination, limit, offset, empleados;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$query = req.query, size = _req$query.size, page = _req$query.page;
              _getPagination = (0, _getPagination2.getPagination)(page, size), limit = _getPagination.limit, offset = _getPagination.offset;
              _context.next = 5;
              return _Empleado["default"].paginate({}, {
                offset: offset,
                limit: limit
              });

            case 5:
              empleados = _context.sent;
              res.status(200).json(empleados).end();
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              mensajeError(res, "Algo salio mal al traer los empleados");

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

exports.getTodosEmpleados = getTodosEmpleados;

var crearEmpleado = function crearEmpleado() {
  return /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var newEmpleado, empleadoGuardado;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              newEmpleado = new _Empleado["default"]({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                mail: req.body.mail,
                pais: req.body.pais,
                nacimiento: req.body.nacimiento,
                contraseña: req.body.contraseña,
                puesto: req.body.puesto,
                entorno: req.body.entorno,
                tareas: req.body.tareas,
                tareasConcluidas: req.body.tareasConcluidas
              });
              _context2.next = 4;
              return newEmpleado.save();

            case 4:
              empleadoGuardado = _context2.sent;
              res.status(200).json("Empleado Creado");
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              res.json(_context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};

exports.crearEmpleado = crearEmpleado;

var traerEmpleado = function traerEmpleado() {
  return /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var empleado;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _Empleado["default"].findById(req.params.id);

            case 3:
              empleado = _context3.sent;
              empleado.contraseña = "";
              res.status(200).json(empleado);
              _context3.next = 11;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              res.status(500).json({
                message: "El empleado no ha sido encontrado ".concat(_context3.t0)
              });

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 8]]);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }();
};

exports.traerEmpleado = traerEmpleado;

var borrarEmpleado = function borrarEmpleado() {
  return /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
      var empleado;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _Empleado["default"].findByIdAndDelete(req.params.id);

            case 3:
              empleado = _context4.sent;
              res.status(200).json({
                message: "".concat(req.params.id, " Empleado eliminado")
              });
              _context4.next = 10;
              break;

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              res.status(500).json({
                message: "El empleado no ha sido encontrado ".concat(_context4.t0)
              });

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 7]]);
    }));

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }();
};

exports.borrarEmpleado = borrarEmpleado;

var actualizarEmpleado = function actualizarEmpleado() {
  return /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
      var idEmpleado;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              idEmpleado = req.params.id;
              _context5.prev = 1;
              _context5.next = 4;
              return _Empleado["default"].findByIdAndUpdate(idEmpleado, req.body);

            case 4:
              res.status(200).json({
                message: "Empleado actualizado"
              });
              _context5.next = 10;
              break;

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](1);
              res.status(500).json({
                message: "Error al actualizar empleado: ".concat(_context5.t0)
              });

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[1, 7]]);
    }));

    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }();
};

exports.actualizarEmpleado = actualizarEmpleado;

var validarUsuario = function validarUsuario() {
  return /*#__PURE__*/function () {
    var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
      var mailUsuario, contraseñaUsuario, empleado, esValido;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              mailUsuario = req.body.mail;
              contraseñaUsuario = req.body.contraseña;
              _context6.prev = 2;
              _context6.next = 5;
              return _Empleado["default"].findOne({
                mail: "".concat(mailUsuario)
              });

            case 5:
              empleado = _context6.sent;
              _context6.next = 8;
              return bcrypt.compare(contraseñaUsuario, empleado.contraseña).then(function (res) {
                return res;
              });

            case 8:
              esValido = _context6.sent;

              if (esValido) {
                res.status(200).json(empleado);
              } else {
                res.status(203).json({
                  respuesta: "Error al iniciar sesión"
                });
              }

              _context6.next = 15;
              break;

            case 12:
              _context6.prev = 12;
              _context6.t0 = _context6["catch"](2);
              res.status(500).json({
                respuesta: "Error al iniciar sesión"
              });

            case 15:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[2, 12]]);
    }));

    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }();
};

exports.validarUsuario = validarUsuario;

var existeMail = function existeMail() {
  return /*#__PURE__*/function () {
    var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
      var mailUsuario, respuesta, empleado;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              mailUsuario = req.body.mail;
              _context7.prev = 1;
              _context7.next = 4;
              return _Empleado["default"].findOne({
                mail: "".concat(mailUsuario)
              });

            case 4:
              empleado = _context7.sent;

              if (empleado !== null) {
                respuesta = "Ya existe";
              } else {
                respuesta = "No existe";
              }

              res.status(200).json({
                respuesta: "".concat(respuesta)
              });
              _context7.next = 12;
              break;

            case 9:
              _context7.prev = 9;
              _context7.t0 = _context7["catch"](1);
              res.status(500).json({
                respuesta: "Eror de servidor: ",
                e: _context7.t0
              });

            case 12:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[1, 9]]);
    }));

    return function (_x13, _x14) {
      return _ref7.apply(this, arguments);
    };
  }();
};

exports.existeMail = existeMail;

var agregarTarea = function agregarTarea() {
  return /*#__PURE__*/function () {
    var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
      var mailUsuario, nuevaTarea, tareasEmpleado, nuevaListaTareas;
      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              mailUsuario = req.body.mail;
              nuevaTarea = req.body.tarea;
              _context8.next = 5;
              return _Empleado["default"].findOne({
                mail: "".concat(mailUsuario)
              });

            case 5:
              tareasEmpleado = _context8.sent;
              nuevaListaTareas = [].concat((0, _toConsumableArray2["default"])(tareasEmpleado.tareas), [nuevaTarea]);
              _context8.next = 9;
              return _Empleado["default"].findOneAndUpdate({
                mail: "".concat(mailUsuario)
              }, {
                tareas: nuevaListaTareas
              });

            case 9:
              res.status(200).json({
                message: "Tarea agregada"
              });
              _context8.next = 15;
              break;

            case 12:
              _context8.prev = 12;
              _context8.t0 = _context8["catch"](0);
              res.status(500).json({
                message: "Fallo al agregar tarea"
              });

            case 15:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 12]]);
    }));

    return function (_x15, _x16) {
      return _ref8.apply(this, arguments);
    };
  }();
};

exports.agregarTarea = agregarTarea;

var quitarTarea = function quitarTarea() {
  return /*#__PURE__*/function () {
    var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
      var mailUsuario, eliminarTarea, tareasEmpleado, listaTareas, nuevaListaTareas;
      return _regenerator["default"].wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              mailUsuario = req.body.mail;
              eliminarTarea = req.body.tarea;
              _context9.next = 4;
              return _Empleado["default"].findOne({
                mail: "".concat(mailUsuario)
              });

            case 4:
              tareasEmpleado = _context9.sent;
              listaTareas = (0, _toConsumableArray2["default"])(tareasEmpleado.tareas);
              nuevaListaTareas = listaTareas.filter(function (tarea) {
                return tarea.fechaCreacion !== eliminarTarea.fechaCreacion;
              });
              _context9.next = 9;
              return _Empleado["default"].findOneAndUpdate({
                mail: "".concat(mailUsuario)
              }, {
                tareas: nuevaListaTareas
              });

            case 9:
              res.json({
                message: "Tarea eliminada"
              });

            case 10:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function (_x17, _x18) {
      return _ref9.apply(this, arguments);
    };
  }();
};

exports.quitarTarea = quitarTarea;

var completarTarea = function completarTarea() {
  return /*#__PURE__*/function () {
    var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
      var mailUsuario, modificarTarea, tareasEmpleado, listaTareas, nuevaListaTareas, nuevoEmpleado;
      return _regenerator["default"].wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              mailUsuario = req.body.mail;
              modificarTarea = req.body.tarea;
              modificarTarea.fechaCompletado = Date.now();
              _context10.next = 5;
              return _Empleado["default"].findOne({
                mail: "".concat(mailUsuario)
              });

            case 5:
              tareasEmpleado = _context10.sent;
              listaTareas = (0, _toConsumableArray2["default"])(tareasEmpleado.tareas);
              nuevaListaTareas = listaTareas.filter(function (tarea) {
                return tarea.fechaCreacion !== modificarTarea.fechaCreacion;
              });
              nuevaListaTareas = [modificarTarea].concat((0, _toConsumableArray2["default"])(nuevaListaTareas));
              _context10.next = 11;
              return _Empleado["default"].findOneAndUpdate({
                mail: "".concat(mailUsuario)
              }, {
                tareas: nuevaListaTareas
              });

            case 11:
              nuevoEmpleado = _context10.sent;
              res.json({
                message: "actualización completada"
              });

            case 13:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function (_x19, _x20) {
      return _ref10.apply(this, arguments);
    };
  }();
};

exports.completarTarea = completarTarea;

var descompletarTarea = function descompletarTarea() {
  return /*#__PURE__*/function () {
    var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
      var mailUsuario, modificarTarea, tareasEmpleado, listaTareas, nuevaListaTareas, nuevoEmpleado;
      return _regenerator["default"].wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              mailUsuario = req.body.mail;
              modificarTarea = req.body.tarea;
              modificarTarea.fechaCompletado = null;
              _context11.next = 5;
              return _Empleado["default"].findOne({
                mail: "".concat(mailUsuario)
              });

            case 5:
              tareasEmpleado = _context11.sent;
              listaTareas = (0, _toConsumableArray2["default"])(tareasEmpleado.tareas);
              nuevaListaTareas = listaTareas.filter(function (tarea) {
                return tarea.fechaCreacion !== modificarTarea.fechaCreacion;
              });
              nuevaListaTareas = [modificarTarea].concat((0, _toConsumableArray2["default"])(nuevaListaTareas));
              _context11.next = 11;
              return _Empleado["default"].findOneAndUpdate({
                mail: "".concat(mailUsuario)
              }, {
                tareas: nuevaListaTareas
              });

            case 11:
              nuevoEmpleado = _context11.sent;
              res.json({
                message: "actualización completada"
              });

            case 13:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    return function (_x21, _x22) {
      return _ref11.apply(this, arguments);
    };
  }();
};

exports.descompletarTarea = descompletarTarea;

var modificarTarea = function modificarTarea() {
  return /*#__PURE__*/function () {
    var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res) {
      var _modificarTarea, listaTareas, nuevaListaTareas;

      return _regenerator["default"].wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.prev = 0;
              _modificarTarea = req.body.tarea;

              if (!(_modificarTarea.fechaCreacion === null)) {
                _context12.next = 6;
                break;
              }

              res.json({
                message: "La modificaci\xF3n de la tarea ha fallado, id no valido"
              });
              _context12.next = 14;
              break;

            case 6:
              _context12.next = 8;
              return asignarTareasDeEmpleado(req.body.mail);

            case 8:
              listaTareas = _context12.sent;
              nuevaListaTareas = listaTareas.filter(function (tarea) {
                return tarea.fechaCreacion !== _modificarTarea.fechaCreacion;
              });
              nuevaListaTareas = [_modificarTarea].concat((0, _toConsumableArray2["default"])(nuevaListaTareas));
              _context12.next = 13;
              return _Empleado["default"].findOneAndUpdate({
                mail: "".concat(req.body.mail)
              }, {
                tareas: nuevaListaTareas
              });

            case 13:
              res.json({
                message: "actualización completada"
              });

            case 14:
              _context12.next = 19;
              break;

            case 16:
              _context12.prev = 16;
              _context12.t0 = _context12["catch"](0);
              res.json({
                message: "La modificaci\xF3n de la tarea ha fallado: ".concat(_context12.t0)
              });

            case 19:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, null, [[0, 16]]);
    }));

    return function (_x23, _x24) {
      return _ref12.apply(this, arguments);
    };
  }();
};

exports.modificarTarea = modificarTarea;

var asignarTareasDeEmpleado = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(mailEmpleado) {
    var empleadoEncontrado, listaTareasEmpleado;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return _Empleado["default"].findOne({
              mail: "".concat(mailEmpleado)
            });

          case 2:
            empleadoEncontrado = _context13.sent;
            listaTareasEmpleado = (0, _toConsumableArray2["default"])(empleadoEncontrado.tareas);
            return _context13.abrupt("return", listaTareasEmpleado);

          case 5:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function asignarTareasDeEmpleado(_x25) {
    return _ref13.apply(this, arguments);
  };
}();