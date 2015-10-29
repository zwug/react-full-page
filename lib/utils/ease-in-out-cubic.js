"use strict";

function easeInOutCubic(currentTime, startValue, changeInValue, duration) {
  var time = currentTime;
  time /= duration;
  time--;
  return changeInValue * (time * time * time + 1) + startValue;
}

module.exports = easeInOutCubic;