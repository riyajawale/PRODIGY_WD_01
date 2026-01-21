// Select the navbar
const navbar = document.getElementById("navbar");

// Listen for scroll event
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // Add class when page is scrolled
    navbar.classList.add("scrolled");
  } else {
    // Remove class when at top
    navbar.classList.remove("scrolled");
  }
});
