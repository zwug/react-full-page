export default function animatedScrollTo(scrollTo, callback) {
  window.scrollTo({
    top: scrollTo,
    behavior: 'smooth',
  });
  callback();
}
