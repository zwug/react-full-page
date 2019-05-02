"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Controls =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Controls, _React$Component);

  function Controls() {
    _classCallCheck(this, Controls);

    return _possibleConstructorReturn(this, _getPrototypeOf(Controls).apply(this, arguments));
  }

  _createClass(Controls, [{
    key: "renderSlidesNumbers",
    value: function renderSlidesNumbers(currentSlideIndex) {
      var _this$props = this.props,
          slidesCount = _this$props.slidesCount,
          scrollToSlide = _this$props.scrollToSlide;
      var slidesNumbers = [];

      var _loop = function _loop(i) {
        var buttonProps = {
          disabled: currentSlideIndex === i,
          key: i,
          onClick: function onClick() {
            return scrollToSlide(i);
          }
        };
        slidesNumbers.push(_react.default.createElement("button", _extends({
          type: "button"
        }, buttonProps), i + 1));
      };

      for (var i = 0; i < slidesCount; i++) {
        _loop(i);
      }

      return slidesNumbers;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          getCurrentSlideIndex = _this$props2.getCurrentSlideIndex,
          slidesCount = _this$props2.slidesCount,
          style = _this$props2.style,
          className = _this$props2.className;
      var currentSlideIndex = getCurrentSlideIndex();
      return _react.default.createElement("div", {
        className: className,
        style: style
      }, _react.default.createElement("button", {
        type: "button",
        disabled: currentSlideIndex === 0,
        onClick: this.props.onPrev
      }, "\u2190"), this.renderSlidesNumbers(currentSlideIndex), _react.default.createElement("button", {
        type: "button",
        disabled: currentSlideIndex === slidesCount - 1,
        onClick: this.props.onNext
      }, "\u2192"));
    }
  }]);

  return Controls;
}(_react.default.Component);

exports.default = Controls;
Controls.propTypes = {
  className: _propTypes.default.string,
  getCurrentSlideIndex: _propTypes.default.func.isRequired,
  onNext: _propTypes.default.func.isRequired,
  onPrev: _propTypes.default.func.isRequired,
  scrollToSlide: _propTypes.default.func.isRequired,
  slidesCount: _propTypes.default.number.isRequired,
  style: _propTypes.default.object
};
Controls.defaultProps = {
  className: 'full-page-controls',
  style: {}
};