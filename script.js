// simple animation effect
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card, .event, .stat").forEach(el => {
    el.style.transform = "translateY(0px)";
    el.style.opacity = 1;
  });
});