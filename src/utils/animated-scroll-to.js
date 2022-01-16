export default function animatedScrollTo(scrollTo, callback) {
  const scrollCallback = (e) => {
    if (window.pageYOffset.toFixed() === scrollTo.toFixed()) {
      window.removeEventListener("scroll", scrollCallback);
      callback();
    }
  };
  window.addEventListener("scroll", scrollCallback);
  scrollCallback();
  window.scrollTo({
    top: scrollTo,
    behavior: "smooth",
  });
}
