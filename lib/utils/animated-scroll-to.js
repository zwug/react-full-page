'use strict';

var easeInOutCubic = require('./ease-in-out-cubic');

function animatedScrollTo(to, duration, callback) {
  var start = window.scrollY;
  var change = to - start;
  var currentTime = 0;
  var increment = 20;

  (function animateScroll() {
    currentTime += increment;
    var val = easeInOutCubic(currentTime, start, change, duration);

    window.scrollTo(0, val);
    if (currentTime > duration) {
      return callback();
    }

    setTimeout(animateScroll, increment);
  })();
}

module.exports = animatedScrollTo;