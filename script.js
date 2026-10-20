// Jahr im Footer
document.getElementById("year").textContent = new Date().getFullYear();

// Button: Füllung startet an der Mausposition + leichter "magnetischer" Zug
const cta = document.querySelector(".cta");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const canHover = window.matchMedia("(hover: hover)").matches;

if (cta && canHover) {
  const setOrigin = (e) => {
    const r = cta.getBoundingClientRect();
    cta.style.setProperty("--x", `${e.clientX - r.left}px`);
    cta.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  cta.addEventListener("mouseenter", setOrigin);
  cta.addEventListener("mouseleave", setOrigin);

  if (!reduceMotion) {
    cta.addEventListener("mousemove", (e) => {
      const r = cta.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) * 0.12;
      const dy = (e.clientY - (r.top + r.height / 2)) * 0.25;
      cta.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    cta.addEventListener("mouseleave", () => {
      cta.style.transform = "";
    });
  }
}
