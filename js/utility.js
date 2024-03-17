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
const snapshotSwiper = new Swiper("#snapshotSwiper", {
  direction: "horizontal",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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

// swiper.js initalizer for #work-section
const workSwiperThumb = new Swiper("#workSwiperThumbnail", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

const workSwiperMain = new Swiper("#workSwiperMain", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next-1",
    prevEl: ".swiper-button-prev-1",
  },
  thumbs: {
    swiper: workSwiperThumb,
  },
});
