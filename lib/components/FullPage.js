'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _animatedScrollTo = require('../utils/animated-scroll-to');

var _animatedScrollTo2 = _interopRequireDefault(_animatedScrollTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FullPage = function (_React$Component) {
  _inherits(FullPage, _React$Component);

  function FullPage(props) {
    _classCallCheck(this, FullPage);

    var _this = _possibleConstructorReturn(this, (FullPage.__proto__ || Object.getPrototypeOf(FullPage)).call(this, props));

    _this.onResize = _this.onResize.bind(_this);
    _this.onScroll = _this.onScroll.bind(_this);
    _this.onTouchMove = _this.onTouchMove.bind(_this);
    _this.onTouchStart = _this.onTouchStart.bind(_this);

    _this.scrollPending = false;
    _this.slides = [];
    _this.slidesCount = props.children.length;
    _this.touchSensitivity = 5;
    _this.touchStart = 0;

    _this.state = {
      activeSlide: 0
    };
    return _this;
  }

  _createClass(FullPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('touchmove', this.onTouchMove);
      document.addEventListener('touchstart', this.onTouchStart);
      document.addEventListener('wheel', this.onScroll);
      window.addEventListener('resize', this.onResize);

      this.onResize();
      this.scrollToSlide(0);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('touchmove', this.onTouchMove);
      document.removeEventListener('touchstart', this.onTouchStart);
      document.removeEventListener('wheel', this.onScroll);
      window.removeEventListener('resize', this.onResize);
    }
  }, {
    key: 'onResize',
    value: function onResize() {
      this.slides = [];

      for (var i = 0; i < this.slidesCount; i++) {
        this.slides.push(window.innerHeight * i);
      }

      this.setState({
        height: window.innerHeight
      });
    }
  }, {
    key: 'scrollToSlide',
    value: function scrollToSlide(slide) {
      var _this2 = this;

      if (slide >= 0 && slide < this.slidesCount) {
        this.setState({
          activeSlide: slide
        });

        this.scrollPending = true;
        (0, _animatedScrollTo2.default)(this.slides[slide], 700, function () {
          _this2.scrollPending = false;
        });
      }
    }
  }, {
    key: 'onTouchStart',
    value: function onTouchStart(e) {
      this.touchStart = e.touches[0].clientY;
    }
  }, {
    key: 'onTouchMove',
    value: function onTouchMove(evt) {
      evt.preventDefault();
      var touchEnd = evt.changedTouches[0].clientY;

      if (!this.scrollPending) {
        if (this.touchStart > touchEnd + this.touchSensitivity) {
          this.scrollToSlide(this.state.activeSlide + 1);
        } else if (this.touchStart < touchEnd - this.touchSensitivity) {
          this.scrollToSlide(this.state.activeSlide - 1);
        }
      }
    }
  }, {
    key: 'onArrowClick',
    value: function onArrowClick() {
      this.scrollToSlide(this.state.activeSlide + 1);
    }
  }, {
    key: 'onScroll',
    value: function onScroll(e) {
      e.preventDefault();
      if (this.scrollPending) {
        return false;
      }

      var scrollDown = (e.wheelDelta || -e.deltaY || -e.detail) < 0;
      var activeSlide = this.state.activeSlide;

      if (scrollDown) {
        activeSlide++;
      } else {
        activeSlide--;
      }

      this.scrollToSlide(activeSlide);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { height: this.state.height } },
        this.props.children
      );
    }
  }]);

  return FullPage;
}(_react2.default.Component);

module.exports = FullPage;