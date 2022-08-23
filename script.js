const navToggle = document.querySelector(".nav-toggle");
const navLinksContainer = document.querySelector(".links-container");
const navLinks = document.querySelectorAll(".navlinks .link a");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    navToggle.click();
  });
});

navToggle.addEventListener("click", function () {
  navLinksContainer.classList.toggle("mobile-active");

  if (navLinksContainer.classList.contains("mobile-active")) {
    navToggle.innerHTML = '<i class="fa-solid fa-xmark"></i> Close';
  } else {
    navToggle.innerHTML = '<i class="fa-solid fa-bars"></i> Menu';
  }
});
