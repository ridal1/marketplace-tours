

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

const iconMenu = document.getElementById('icon-menu');
const iconClose = document.getElementById('icon-close');

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");

  // تبديل الأيقونات
  iconMenu.classList.toggle("hidden");
  iconClose.classList.toggle("hidden");
});




