function mobileNavigation() {
  let burger = document.getElementById("navMobile");
  let bodyWrapper = document.querySelector(".body-wrapper");

  // toggle between adding and removing the 'responsive' and 'menu-open' classes
  if (!burger.classList.contains("responsive")) {
    burger.classList.add("responsive");
    bodyWrapper.classList.add("menu-open");
  } else {
    burger.classList.remove("responsive");
    bodyWrapper.classList.remove("menu-open");
  }
}
