Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = animatedScrollTo;

function animatedScrollTo(scrollTo, callback) {
  window.scrollTo({
    top: scrollTo,
    behavior: 'smooth',
  });
  callback();
}
