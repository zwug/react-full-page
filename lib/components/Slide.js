"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Slide = function Slide(props) {
  return _react.default.createElement("div", _extends({}, props, {
    style: Object.assign({}, props.style, {
      height: '100%'
    })
  }), props.children);
};

Slide.propTypes = {
  children: _propTypes.default.node,
  style: _propTypes.default.object
};
Slide.defaultProps = {
  children: null,
  style: {}
};
Slide.isSlideOfFullpage = true;
var _default = Slide;
exports.default = _default;