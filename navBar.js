function handleScroll() {
  const navM = document.getElementById('mobile-nav');
  const navD = document.getElementById('desktop-nav');
  const size = getScreenSizeClass()
  if (window.scrollY > 0) {
    if (size == 'client-card-small') {
      // Apply the "scrolled" class to mobile nav when scrolling
      navM.classList.add("scrolled");
    } else {
      // Apply the "scrolled-desktop" class to desktop nav when scrolling
      navD.classList.add("scrolled-desktop");
    }
  } else {
    if (size == 'client-card-small') {
      // Remove "scrolled" class from mobile nav when at top
      navM.classList.remove("scrolled");
    } else {
      // Remove "scrolled-desktop" class from desktop nav when at top
      navD.classList.remove("scrolled-desktop");
    }
  }
}

function getScreenSizeClass() {
  if (window.innerWidth < 770) {
      return 'client-card-small'; 
  } else if (window.innerWidth < 1024) {
      return 'client-card-medium';  
  } else {
      return 'client-card-large';  
  }
}

document.addEventListener("DOMContentLoaded", function () {
  handleScroll();

  window.addEventListener("scroll", handleScroll);
});
;

