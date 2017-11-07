'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slide = function Slide(props) {
  return _react2.default.createElement(
    'div',
    _extends({}, props, { style: Object.assign({}, props.style, { height: '100%', touchAction: 'none' }) }),
    props.children
  );
};

Slide.propTypes = {
  children: _propTypes2.default.node,
  style: _propTypes2.default.object
};

Slide.defaultProps = {
  children: null,
  style: {}
};

Slide.isSlideOfFullpage = true;

exports.default = Slide;