function handleScroll() {
  const navM = document.getElementById('mobile-nav');
  const navD = document.getElementById('desktop-nav');
  const size = getScreenSizeClass()
  if (window.scrollY > 0) {
    if (size == 'client-card-small') {
      navM.classList.add("scrolled");
    } else {
      navD.classList.add("scrolled-desktop");
    }
  } else {
    if (size == 'client-card-small') {
      navM.classList.remove("scrolled");
    } else {
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
window.addEventListener('scroll', setActiveLinkOnScroll);

function toggleNav() {
  const btn = document.getElementById("nav-btn");
  const navMenu = document.getElementById("nav-menu");
  const isDarkMode = document.documentElement.classList.contains('dark');  // Check if dark mode is active on <html>
  const navIconLight = document.getElementById('nav-icon-light');
  const navIconDark = document.getElementById('nav-icon-dark');
  const navIcon = isDarkMode ? navIconDark : navIconLight;
  const body = document.body;

  if (!navMenu.classList.contains('nav-off')) {
    // Disable scrolling
    body.style.overflow = 'hidden';
} else {
    // Enable scrolling
    body.style.overflow = '';
}

  if (navMenu.classList.contains('nav-off')) {
      // Toggle to menu-on state
      if (navIcon.src.includes("menu-off")) {
          navIcon.src = isDarkMode ? "./assets/icons/menu-on.svg" : "./assets/icons/menu-on-black.svg";
      }
      navMenu.classList.remove("nav-off");
      navMenu.classList.add("nav-on");
  } else {
      // Toggle to menu-off state
      if (navIcon.src.includes("menu-on")) {
          navIcon.src = isDarkMode ? "./assets/icons/menu-off.svg" : "./assets/icons/menu-off-black.svg";
      }
      navMenu.classList.remove("nav-on");
      navMenu.classList.add("nav-off");
  }
}


const links = document.querySelectorAll('#mobile-links li a');
links.forEach(link => {
  link.addEventListener('click', function(event) {
    
    links.forEach(link => {
      link.classList.remove('active-link');
      link.nextElementSibling.src = link.getAttribute('data-img-inactive');
    });

    link.classList.add('active-link');
    link.nextElementSibling.src = link.getAttribute('data-img-active'); 
       
    toggleNav()
  });
});


function setActiveLinkOnScroll() {
  const sections = document.querySelectorAll('section'); 
  const scrollY = window.scrollY;
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; 
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      links.forEach(link => {
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active-link');
          link.nextElementSibling.src = link.getAttribute('data-img-active');
        } else {
          link.classList.remove('active-link');
          link.nextElementSibling.src = link.getAttribute('data-img-inactive');
        }
      });
    }
  });
}