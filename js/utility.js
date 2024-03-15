function mobileNavigation() {
  let x = document.getElementById("navMobile");

  // toggle between adding and removing the 'responsive class'
  if (x.className === "top-nav") {
    x.className += " responsive";
  } else {
    x.className = "top-nav";
  }
}

// dynamically changing top-nav
document.addEventListener("DOMContentLoaded", (event) => {
  if (window.location.pathname.endsWith("contact.html")) {
    //
    const navLinks = document.querySelectorAll(".top-nav a");

    navLinks.forEach((link) => {
      link.style.color = "your desired color here"; // replace with your color
    });
  }
});
