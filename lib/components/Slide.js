require('core-js/modules/es.object.keys.js');

require('core-js/modules/es.symbol.js');

require('core-js/modules/es.array.filter.js');

require('core-js/modules/es.object.get-own-property-descriptor.js');

require('core-js/modules/es.array.for-each.js');

require('core-js/modules/web.dom-collections.for-each.js');

require('core-js/modules/es.object.get-own-property-descriptors.js');

require('core-js/modules/es.object.assign.js');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _propTypes = _interopRequireDefault(require('prop-types'));

const _react = _interopRequireDefault(require('react'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter((sym) => Object.getOwnPropertyDescriptor(object, sym).enumerable); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach((key) => { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach((key) => { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value, enumerable: true, configurable: true, writable: true,
    });
  } else { obj[key] = value; } return obj;
}

const Slide = function Slide(props) {
  return /* #__PURE__ */_react.default.createElement('div', {
    ...props,
    style: _objectSpread(_objectSpread({}, props.style), {}, {
      height: '100%',
    }),
  }, props.children);
};

Slide.propTypes = {
  children: _propTypes.default.node,
  style: _propTypes.default.object,
};
Slide.defaultProps = {
  children: null,
  style: {},
};
Slide.isSlideOfFullpage = true;
const _default = Slide;
exports.default = _default;
