document.onmousemove = function (e) {
  document.body.style.setProperty("--y", e.clientY + "px");
  document.body.style.setProperty("--x", e.clientX + "px");
};
