
const toogleBtn = document.querySelector(".toggle-btn");
const toogleBtnIcon = document.querySelector(".toggle-btn i");
const dropDowMenu = document.querySelector(".dropdown-menu");
const leftIcon = document.querySelector(".left-icon");
const rightIcon = document.querySelector(".right-icon");
const menuItems = document.querySelector(".menu-items");
const carousel = document.querySelector(".menu-items");
const internalLinks = document.querySelectorAll('.nav-link-wrapper a[href^="#"]');

toogleBtn.onclick = function () {
  dropDowMenu.classList.toggle("open");
  const isOpen = dropDowMenu.classList.contains("open");

   toogleBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";
};

internalLinks.forEach(link => {
  link.addEventListener("click", () => {
    dropDowMenu.classList.remove("open");
    toogleBtnIcon.classList = "fa-solid fa-bars";
  });
});

if (leftIcon && rightIcon && menuItems) {
  const scrollAmount = 150;

  leftIcon.addEventListener("click", () => {
    if (menuItems.scrollLeft > 0) {
      menuItems.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  });

  rightIcon.addEventListener("click", () => {
    const maxScrollLeft = menuItems.scrollWidth - menuItems.clientWidth;
    if (menuItems.scrollLeft < maxScrollLeft) {
      menuItems.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  });
}

if (carousel) {

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      localStorage.setItem("carouselScroll", carousel.scrollLeft);
    }
  });

  window.addEventListener("DOMContentLoaded", () => {
    const savedScroll = localStorage.getItem("carouselScroll");
    if (savedScroll !== null) {
      // Esperar un poco para que el layout esté listo
      setTimeout(() => {
        carousel.scrollLeft = parseInt(savedScroll, 10);
      }, 100);
    }
  });
}
