// Top Header Close Button
const closeBtn = document.querySelector(".header__top-close-btn");
const headerTop = document.querySelector(".header__top");

closeBtn.addEventListener("click", function () {
  headerTop.classList.add("header__top--closed");
});