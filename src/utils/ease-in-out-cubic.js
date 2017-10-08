function easeInOutCubic(currentTime, startValue, changeInValue, duration) {
  const time = currentTime / duration - 1;
  return changeInValue * (time * time * time + 1) + startValue;
}

module.exports = easeInOutCubic;
