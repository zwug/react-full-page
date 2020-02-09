"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = animatedScrollTo;

var easeInOutCubic = require('./ease-in-out-cubic');

function animatedScrollTo(scrollTo, duration, callback) {
  var scrollFrom = window.scrollY;
  var scrollDiff = scrollTo - scrollFrom;
  var currentTime = 0;
  var increment = 20;

  (function animateScroll() {
    currentTime += increment;
    var newScrollPos = easeInOutCubic(currentTime, scrollFrom, scrollDiff, duration);
    window.scrollTo(0, newScrollPos);

    if (currentTime > duration) {
      callback();
      return;
    }

    setTimeout(animateScroll, increment);
  })();
}