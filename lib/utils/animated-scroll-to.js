"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = animatedScrollTo;

var _easeInOutCubic = _interopRequireDefault(require("./ease-in-out-cubic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function animatedScrollTo(scrollTo, duration, callback) {
  var scrollFrom = window.scrollY || window.pageYOffset || 0;
  var scrollDiff = scrollTo - scrollFrom;
  var currentTime = 0;
  var increment = 20;

  (function animateScroll() {
    currentTime += increment;
    var newScrollPos = (0, _easeInOutCubic.default)(currentTime, scrollFrom, scrollDiff, duration);
    window.scrollTo(0, newScrollPos);

    if (currentTime > duration) {
      callback();
      return;
    }

    setTimeout(animateScroll, increment);
  })();
}