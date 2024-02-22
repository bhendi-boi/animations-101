const openButton = document.querySelector(".open-button");
const app = document.querySelector("#app");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

openButton?.addEventListener("click", function () {
  left?.setAttribute("data-transition", "true");
  right?.setAttribute("data-transition", "true");
  sleep(500).then(() => removeButton());
});

function removeButton() {
  if (!app) {
    return;
  }
  app.style.display = "none";
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
