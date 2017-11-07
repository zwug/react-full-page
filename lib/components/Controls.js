'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Controls = function (_React$Component) {
  _inherits(Controls, _React$Component);

  function Controls() {
    _classCallCheck(this, Controls);

    return _possibleConstructorReturn(this, (Controls.__proto__ || Object.getPrototypeOf(Controls)).apply(this, arguments));
  }

  _createClass(Controls, [{
    key: 'renderSlidesNumbers',
    value: function renderSlidesNumbers(currentSlideIndex) {
      var _props = this.props,
          slidesCount = _props.slidesCount,
          scrollToSlide = _props.scrollToSlide;

      var slidesNumbers = [];

      var _loop = function _loop(i) {
        var buttonProps = {
          disabled: currentSlideIndex === i,
          key: i,
          onClick: function onClick() {
            return scrollToSlide(i);
          }
        };
        slidesNumbers.push(_react2.default.createElement(
          'button',
          buttonProps,
          i + 1
        ));
      };

      for (var i = 0; i < slidesCount; i++) {
        _loop(i);
      }
      return slidesNumbers;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          getCurrentSlideIndex = _props2.getCurrentSlideIndex,
          slidesCount = _props2.slidesCount,
          style = _props2.style,
          className = _props2.className;

      var currentSlideIndex = getCurrentSlideIndex();

      return _react2.default.createElement(
        'div',
        { className: className, style: style },
        _react2.default.createElement(
          'button',
          {
            disabled: currentSlideIndex === 0,
            onClick: this.props.onPrev
          },
          '\u2190'
        ),
        this.renderSlidesNumbers(currentSlideIndex),
        _react2.default.createElement(
          'button',
          {
            disabled: currentSlideIndex === slidesCount - 1,
            onClick: this.props.onNext
          },
          '\u2192'
        )
      );
    }
  }]);

  return Controls;
}(_react2.default.Component);

Controls.propTypes = {
  className: _propTypes2.default.string,
  getCurrentSlideIndex: _propTypes2.default.func.isRequired,
  onNext: _propTypes2.default.func.isRequired,
  onPrev: _propTypes2.default.func.isRequired,
  scrollToSlide: _propTypes2.default.func.isRequired,
  slidesCount: _propTypes2.default.number.isRequired,
  style: _propTypes2.default.object
};
Controls.defaultProps = {
  className: 'full-page-controls',
  style: {}
};
exports.default = Controls;