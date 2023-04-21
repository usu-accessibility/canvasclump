let zKeyPressed = false;

document.addEventListener("keydown", function (event) {
  if (event.code === "KeyZ") {
    zKeyPressed = true;
  }

  if (event.code === "KeyZ") {
    zKeyPressed = true;
  }
});

document.addEventListener("keyup", function (event) {
  if (event.code === "KeyZ") {
    zKeyPressed = false;
  }
});
