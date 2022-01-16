function _typeof(obj) {
  '@babel/helpers - typeof';

  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj);
}

require('core-js/modules/es.reflect.construct.js');

require('core-js/modules/es.object.assign.js');

require('core-js/modules/es.symbol.js');

require('core-js/modules/es.symbol.description.js');

require('core-js/modules/es.object.to-string.js');

require('core-js/modules/es.symbol.iterator.js');

require('core-js/modules/es.array.iterator.js');

require('core-js/modules/es.string.iterator.js');

require('core-js/modules/web.dom-collections.iterator.js');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('core-js/modules/es.object.set-prototype-of.js');

require('core-js/modules/es.object.get-prototype-of.js');

require('core-js/modules/es.array.filter.js');

const _propTypes = _interopRequireDefault(require('prop-types'));

const _react = _interopRequireDefault(require('react'));

const _animatedScrollTo = _interopRequireDefault(require('../utils/animated-scroll-to'));

const _isMobile = _interopRequireDefault(require('../utils/is-mobile'));

const _helpers = require('../utils/helpers');

const _Slide = _interopRequireDefault(require('./Slide'));

const _Controls = _interopRequireDefault(require('./Controls'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function'); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) {
  const hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() {
    const Super = _getPrototypeOf(Derived); let
      result; if (hasNativeReflectConstruct) { const NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === 'object' || typeof call === 'function')) { return call; } if (call !== void 0) { throw new TypeError('Derived constructors may only return object or undefined'); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

const scrollMode = {
  FULL_PAGE: 'full-page',
  NORMAL: 'normal',
};

const FullPage = /* #__PURE__ */(function (_React$Component) {
  _inherits(FullPage, _React$Component);

  const _super = _createSuper(FullPage);

  function FullPage(props) {
    let _this;

    _classCallCheck(this, FullPage);

    _this = _super.call(this, props);

    _this.updateSlides = function () {
      _this._slides = [];

      for (let i = 0; i < _this.state.slidesCount; i++) {
        _this._slides.push(window.innerHeight * i);
      }
    };

    _this.onResize = function () {
      _this.updateSlides();

      _this.setState({
        height: window.innerHeight,
      });
    };

    _this.onTouchStart = function (evt) {
      _this._touchStart = evt.touches[0].clientY;
      _this._isScrolledAlready = false;
    };

    _this.onTouchMove = function (evt) {
      if (_this.props.scrollMode !== scrollMode.FULL_PAGE) {
        return;
      }

      evt.preventDefault();
      const touchEnd = evt.changedTouches[0].clientY;

      if (!_this._isScrollPending && !_this._isScrolledAlready) {
        if (_this._touchStart > touchEnd + _this._touchSensitivity) {
          _this.scrollToSlide(_this.state.activeSlide + 1);
        } else if (_this._touchStart < touchEnd - _this._touchSensitivity) {
          _this.scrollToSlide(_this.state.activeSlide - 1);
        }
      }
    };

    _this.onScroll = function (evt) {
      if (_this.props.scrollMode !== scrollMode.FULL_PAGE) {
        return;
      }

      evt.preventDefault();

      if (_this._isScrollPending) {
        return;
      }

      const scrollDown = (evt.wheelDelta || -evt.deltaY || -evt.detail) < 0;
      let { activeSlide } = _this.state;

      if (scrollDown) {
        activeSlide++;
      } else {
        activeSlide--;
      }

      _this.scrollToSlide(activeSlide);
    };

    _this.getSlidesCount = function () {
      return _this.state.slidesCount;
    };

    _this.getCurrentSlideIndex = function () {
      return _this.state.activeSlide;
    };

    _this.scrollNext = function () {
      _this.scrollToSlide(_this.state.activeSlide + 1);
    };

    _this.scrollPrev = function () {
      _this.scrollToSlide(_this.state.activeSlide - 1);
    };

    _this.scrollToSlide = function (slide) {
      if (!_this._isScrollPending && slide >= 0 && slide < _this.state.slidesCount) {
        const currentSlide = _this.state.activeSlide;

        _this.props.beforeChange({
          from: currentSlide,
          to: slide,
        });

        _this.setState({
          activeSlide: slide,
        });

        _this._isScrollPending = true;
        (0, _animatedScrollTo.default)(_this._slides[slide], () => {
          _this._isScrollPending = false;
          _this._isScrolledAlready = true;

          _this.props.afterChange({
            from: currentSlide,
            to: slide,
          });
        });
      }
    };

    _this._isScrollPending = false;
    _this._isScrolledAlready = false;
    _this._slides = [];
    _this._touchSensitivity = 5;
    _this._touchStart = 0;
    _this._isMobile = null;
    _this.state = {
      activeSlide: props.initialSlide,
      slidesCount: FullPage.getChildrenCount(_this.props.children),
    };
    return _this;
  }

  _createClass(FullPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._isMobile = (0, _isMobile.default)();

      if (this._isMobile) {
        document.addEventListener('touchmove', this.onTouchMove, {
          passive: false,
        });
        document.addEventListener('touchstart', this.onTouchStart);
      } else {
        document.addEventListener('wheel', this.onScroll, {
          passive: false,
        });
      }

      window.addEventListener('resize', this.onResize);
      this.onResize();
      this.scrollToSlide(this.props.initialSlide);
    },
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      const newSlidesCount = FullPage.getChildrenCount(this.props.children);

      if (newSlidesCount !== this.state.slidesCount) {
        // use getDerivedStateFromProps after react <16 support is dropped
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          slidesCount: newSlidesCount,
        }, this.updateSlides);
        const slidesDiff = this.state.slidesCount - newSlidesCount; // activeSlide should always be less than slides count

        if (slidesDiff > 0 && this.state.activeSlide >= this.state.slidesCount - slidesDiff) {
          // eslint-disable-next-line react/no-did-update-set-state
          this.setState({
            activeSlide: newSlidesCount - 1,
          }, this.updateSlides);
        }
      }
    },
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._isMobile) {
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchstart', this.onTouchStart);
      } else {
        document.removeEventListener('wheel', this.onScroll);
      }

      window.removeEventListener('resize', this.onResize);
    },
  }, {
    key: 'renderControls',
    value: function renderControls() {
      const _this$props = this.props;
      const { controls } = _this$props;
      const { controlsProps } = _this$props;

      if (!controls) {
        return null;
      }

      const controlsBasicProps = {
        getCurrentSlideIndex: this.getCurrentSlideIndex,
        onNext: this.scrollNext,
        onPrev: this.scrollPrev,
        scrollToSlide: this.scrollToSlide,
        slidesCount: this.getSlidesCount(),
      };

      if (controls === true) {
        return /* #__PURE__ */_react.default.createElement(_Controls.default, { className: 'full-page-controls', ...controlsBasicProps, ...controlsProps });
      }

      const CustomControls = controls;
      return /* #__PURE__ */_react.default.createElement(CustomControls, { ...controlsBasicProps, ...controlsProps });
    },
  }, {
    key: 'render',
    value: function render() {
      return /* #__PURE__ */_react.default.createElement('div', {
        style: {
          height: this.state.height,
        },
      }, this.renderControls(), this.props.children);
    },
  }]);

  return FullPage;
}(_react.default.Component));

exports.default = FullPage;

FullPage.getChildrenCount = function (children) {
  const childrenArr = _react.default.Children.toArray(children);

  const slides = childrenArr.filter((_ref) => {
    const { type } = _ref;
    return type === _Slide.default;
  });
  return slides.length;
};

FullPage.propTypes = {
  afterChange: _propTypes.default.func,
  beforeChange: _propTypes.default.func,
  children: _propTypes.default.node.isRequired,
  controls: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.element, _propTypes.default.func]),
  controlsProps: _propTypes.default.object,
  initialSlide: _propTypes.default.number,
  scrollMode: _propTypes.default.oneOf((0, _helpers.getObjectValues)(scrollMode)),
};
FullPage.defaultProps = {
  afterChange: function afterChange() {},
  beforeChange: function beforeChange() {},
  controls: false,
  controlsProps: {},
  initialSlide: 0,
  scrollMode: scrollMode.FULL_PAGE,
};
