const openButton = document.querySelector(".open-button");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

openButton?.addEventListener("click", function () {
  left?.setAttribute("data-transition", "true");
  right?.setAttribute("data-transition", "true");
  sleep(500).then(() => removeButton());
});

function removeButton() {
  if (!openButton) {
    return;
  }
  openButton.style.display = "none";
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
