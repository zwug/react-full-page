"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = easeInOutCubic;

function easeInOutCubic(currentTime, startValue, changeInValue, duration) {
  var time = currentTime / duration - 1;
  var timeCubic = time * time * time;
  return changeInValue * (timeCubic + 1) + startValue;
}