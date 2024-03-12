function mobileNavigation() {
  let x = document.getElementById("navMobile");

  // toggle between adding and removing the 'responsive class'
  if (x.className === "top-nav") {
    x.className += " responsive";
  } else {
    x.className = "top-nav";
  }
}
