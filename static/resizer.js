function isMobile() {
  return window.innerWidth <= 699;
}

document.addEventListener("DOMContentLoaded", function () {
  if (isMobile()) {
    const splitInstance = Split(["#split-0", "#split-1"], {
      sizes: [0, 100],
      gutterAlign: "end",
      minSize: 0,
      gutterSize: 19,
    });
    let isRight = true;
    const openEditorButton = document.querySelector("#open-editor");
    openEditorButton.addEventListener("touchend", function () {
      if (isRight) {
        splitInstance.setSizes([100, 0]);
        isRight = false;
      } else {
        splitInstance.setSizes([0, 100]);
        isRight = true;
      }
    });
  } else {
    Split(["#split-0", "#split-1"], {
      sizes: [50, 50],
      gutterAlign: "end",
      minSize: 0,
      gutterSize: 19,
    });
  }

  const split0 = document.getElementById("split-0");
  const vsEditor = document.getElementById("editor");
  setInterval(() => {
    if (split0.offsetWidth < 20) {
      vsEditor.style.display = "none";
    } else {
      vsEditor.style.display = "block";
    }
  }, 50);
});
