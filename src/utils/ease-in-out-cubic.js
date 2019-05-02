export default function easeInOutCubic(currentTime, startValue, changeInValue, duration) {
  const time = (currentTime / duration) - 1;
  const timeCubic = time * time * time;
  return (changeInValue * (timeCubic + 1)) + startValue;
}
