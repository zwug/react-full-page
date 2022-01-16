"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = animatedScrollTo;

require("core-js/modules/es.number.to-fixed.js");

function animatedScrollTo(scrollTo, callback) {
  var scrollCallback = function scrollCallback(e) {
    if (window.scrollY.toFixed() === scrollTo.toFixed()) {
      window.removeEventListener("scroll", scrollCallback);
      callback();
    }
  };

  window.addEventListener("scroll", scrollCallback);
  scrollCallback();
  window.scrollTo({
    top: scrollTo,
    behavior: "smooth"
  });
}