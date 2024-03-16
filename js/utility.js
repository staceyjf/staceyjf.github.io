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

// Add click event listener to all nav links to add or remove a class based on a click event to the top-nav which was clicked on
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    removeActiveClass();
    addActiveClass(event.currentTarget);
  });
});

// swiper.js initalizer taking from the docs for #snapshot-section
const snapshotSwiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    //set the slides for the desktop view
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
console.log(snapshotSwiper);

// // swiper.js initalizer for #work-section
// const workSwiper = new Swiper("#workSwiper", {
//   slidesPerView: "auto",
//   spaceBetween: 40,
//   centeredSlides: true,
//   grabcursor: true,
//   loop: true,
//   preloadImages: true,

//   breakpoints: {
//     300: {
//       slidesPerView: 1.5,
//       spaceBetween: 15,
//     },

//     768: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//     },

//     1280: {
//       slidesPerView: 4,
//       spaceBetween: 30,
//     },

//     1920: {
//       slidesPerView: 5,
//       spaceBetween: 50,
//     },
//   },

//   navigation: {
//     nextEl: ".swiper-button-next-2",
//     prevEl: ".swiper-button-prev-2",
//   },
// });

// console.log(workSwiper);
