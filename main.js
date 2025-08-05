
const toogleBtn = document.querySelector(".toggle-btn");
const toogleBtnIcon = document.querySelector(".toggle-btn i");
const dropDowMenu = document.querySelector(".dropdown-menu");
const leftIcon = document.querySelector(".left-icon");
const rightIcon = document.querySelector(".right-icon");
const menuItems = document.querySelector(".menu-items");
const carousel = document.querySelector(".menu-items");

toogleBtn.onclick = function () {
  dropDowMenu.classList.toggle("open");
  const isOpen = dropDowMenu.classList.contains("open");

   toogleBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";
};

if (leftIcon && rightIcon && menuItems) {
  const scrollAmount = 150;

  leftIcon.addEventListener("click", () => {
    menuItems.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  rightIcon.addEventListener("click", () => {
    menuItems.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
}

if (carousel) {
  window.addEventListener("beforeunload", () => {
    localStorage.setItem("carouselScroll", carousel.scrollLeft);
  });

  window.addEventListener("load", () => {
    const savedScroll = localStorage.getItem("carouselScroll");
    if (savedScroll) {
      carousel.scrollLeft = savedScroll;
    }
  });
}
