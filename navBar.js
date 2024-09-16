const nav = document.querySelector("nav");

// Function to handle scroll event
function handleScroll() {
  if (window.scrollY > 10) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}
handleScroll();
document.addEventListener("DOMContentLoaded", function () {
  handleScroll();

  window.addEventListener("scroll", handleScroll);
});
;

