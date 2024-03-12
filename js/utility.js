function mobileNavigation() {
  let x = document.getElementById("navMobile");

  // toggle between adding and removing the 'responsive class'
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
