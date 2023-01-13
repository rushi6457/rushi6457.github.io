"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _logo = _interopRequireDefault(require("./logo.svg"));

require("./App.css");

var _reactRouterDom = require("react-router-dom");

var _Home = _interopRequireDefault(require("./Routes/Home"));

var _About = _interopRequireDefault(require("./Routes/About"));

var _Contact = _interopRequireDefault(require("./Routes/Contact"));

var _Navbar = _interopRequireDefault(require("./Components/Navbar"));

var _HeroImage = _interopRequireDefault(require("./Components/HeroImage"));

var _Skills = _interopRequireDefault(require("./Routes/Skills"));

var _react = require("react");

var _GitCalender = _interopRequireDefault(require("./Routes/GitCalender"));

var _Projects = _interopRequireDefault(require("./Routes/Projects1"));

var _Contact2 = _interopRequireDefault(require("./Routes/Contact1"));

var _Project = _interopRequireDefault(require("./Routes/Projects/Project"));

var _Footer = _interopRequireDefault(require("./Routes/Footer"));

var _Coding = _interopRequireDefault(require("./Routes/Coding"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function App() {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  setTimeout(function () {
    setLoading(true);
  }, 1500);
}

var _default = App;
exports["default"] = _default;