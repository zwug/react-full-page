'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var controlsShape = {
  scrollToSlide: _propTypes2.default.func.isRequired,
  scrollNext: _propTypes2.default.func.isRequired,
  scrollPrev: _propTypes2.default.func.isRequired,
  getSlidesCount: _propTypes2.default.func.isRequired,
  getCurrentIndex: _propTypes2.default.func.isRequired
};

var Provider = function (_React$Component) {
  _inherits(Provider, _React$Component);

  function Provider() {
    _classCallCheck(this, Provider);

    return _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).apply(this, arguments));
  }

  _createClass(Provider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        scrollToSlide: this.props.scrollToSlide,
        scrollNext: this.props.scrollNext,
        scrollPrev: this.props.scrollPrev,
        getSlidesCount: this.props.getSlidesCount,
        getCurrentIndex: this.props.getCurrentIndex
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return Provider;
}(_react2.default.Component);

Provider.propTypes = controlsShape;
Provider.childContextTypes = controlsShape;

var withControls = function withControls(Component) {
  var ControlledComponent = function (_React$Component2) {
    _inherits(ControlledComponent, _React$Component2);

    function ControlledComponent() {
      _classCallCheck(this, ControlledComponent);

      return _possibleConstructorReturn(this, (ControlledComponent.__proto__ || Object.getPrototypeOf(ControlledComponent)).apply(this, arguments));
    }

    _createClass(ControlledComponent, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Component, _extends({}, this.props, this.context));
      }
    }]);

    return ControlledComponent;
  }(_react2.default.Component);

  ControlledComponent.contextTypes = controlsShape;
  ControlledComponent.displayName = 'ControlledComponent';

  return ControlledComponent;
};

module.exports = { controlsShape: controlsShape, Provider: Provider, withControls: withControls };