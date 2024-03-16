//  creating the burger and expanded menu effect
function mobileNavigation() {
  let burger = document.getElementById("navMobile");
  let bodyWrapper = document.querySelector(".body-wrapper");

  if (!burger.classList.contains("responsive")) {
    burger.classList.add("responsive");
    bodyWrapper.classList.add("menu-open");
  } else {
    burger.classList.remove("responsive");
    bodyWrapper.classList.remove("menu-open");
  }
}

// top nav bar adjusting the active class based on the sections
let navLinks = document.querySelectorAll(".top-nav a");

// remove active class for nav
function removeActiveClass() {
  navLinks.forEach(function (link) {
    link.classList.remove("top-nav__link--active");
  });
}

// remove active class for nav
function addActiveClass(link) {
  link.classList.add("top-nav__link--active");
}

// Add click event listener to all nav links
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    removeActiveClass();
    addActiveClass(this);
  });
});

// swiper.js initalizer taking from the docs
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  let swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
  console.log(swiper);
});
