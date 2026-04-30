const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const floatingCta = document.querySelector(".floating-cta");

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

const updateFloatingCta = () => {
  floatingCta.classList.toggle("is-compact", window.scrollY > 80);
};

updateFloatingCta();
window.addEventListener("scroll", updateFloatingCta, { passive: true });
