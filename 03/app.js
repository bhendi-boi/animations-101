const body = document.querySelector("body");
const scrollIndicator = document.querySelector(".scroll-indicator");

let width = 0;

function getScrollPercent() {
  const h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";
  return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
}

window.addEventListener("scroll", function () {
  width = getScrollPercent();
  console.log(width);
  scrollIndicator.style.width = `${width}%`;
});
