const easeInOutCubic = require('./ease-in-out-cubic');

function animatedScrollTo(to, duration, callback) {
  const start = window.scrollY;
  const change = to - start;
  let currentTime = 0;
  const increment = 20;

  (function animateScroll() {
    currentTime += increment;
    const val = easeInOutCubic(currentTime, start, change, duration);

    window.scrollTo(0, val);
    if (currentTime > duration) {
      return callback();
    }

    setTimeout(animateScroll, increment);
  })();
}

module.exports = animatedScrollTo;
