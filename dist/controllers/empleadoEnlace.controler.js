"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quitarEnlace = exports.agregarEnlace = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Empleado = _interopRequireDefault(require("../models/Empleado"));

var mensajeError = function mensajeError(res, text) {
  res.status(500).json({
    message: text
  });
};

var agregarEnlace = function agregarEnlace() {
  return /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var mailUsuario, nuevoEnlace, empleadoEnt, nuevaListaEnlaces;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              mailUsuario = req.body.mail;
              nuevoEnlace = req.body.enlace;
              console.log(req.body);
              _context.next = 5;
              return _Empleado["default"].findOne({
                mail: "".concat(mailUsuario)
              });

            case 5:
              empleadoEnt = _context.sent;
              console.log(empleadoEnt);
              nuevaListaEnlaces = [].concat((0, _toConsumableArray2["default"])(empleadoEnt.entorno), [nuevoEnlace]);
              _context.next = 10;
              return _Empleado["default"].findOneAndUpdate({
                mail: "".concat(mailUsuario)
              }, {
                entorno: nuevaListaEnlaces
              });

            case 10:
              res.json({
                message: "Enlace agregado"
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

exports.agregarEnlace = agregarEnlace;

var quitarEnlace = function quitarEnlace() {
  return /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var mailUsuario, eliminarEnlace, empleado, listaEnlaces, nuevaListaEnlaces;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              mailUsuario = req.body.mail;
              eliminarEnlace = req.body.enlace;
              console.log(eliminarEnlace);
              _context2.next = 5;
              return _Empleado["default"].findOne({
                mail: "".concat(mailUsuario)
              });

            case 5:
              empleado = _context2.sent;
              listaEnlaces = (0, _toConsumableArray2["default"])(empleado.entorno);
              nuevaListaEnlaces = listaEnlaces.filter(function (enlace) {
                return enlace.id !== eliminarEnlace.id;
              });
              _context2.next = 10;
              return _Empleado["default"].findOneAndUpdate({
                mail: "".concat(mailUsuario)
              }, {
                entorno: nuevaListaEnlaces
              });

            case 10:
              res.json({
                message: "Enlace eliminada"
              });

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};

exports.quitarEnlace = quitarEnlace;