function handleScroll() {
  const navM = document.getElementById('mobile-nav');
  const navD = document.getElementById('desktop-nav');
  const body = document.body;

  const size = getScreenSizeClass()
  if (window.scrollY > navD.offsetHeight) {
    if (size == 'client-card-small') {
      navM.classList.add("scrolled");
      navM.classList.remove("header-border");
    } else {
      navD.classList.add("scrolled-desktop");
    }
  } else {
    if (size == 'client-card-small') {
      navM.classList.remove("scrolled");
      navM.classList.add("header-border");
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
const links2 = document.querySelectorAll('#desktop-links li a');
const size = getScreenSizeClass()

if (size == 'client-card-small') {

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      
      links.forEach(link => {
        link.classList.remove('active-link');
        link.nextElementSibling.src = link.getAttribute('data-img-inactive');
      });

      link.classList.add('active-link');
      if (! window.matchMedia('(prefers-color-scheme: dark)').matches) {
        link.nextElementSibling.src = link.getAttribute('data-img-light'); 
      }
      else link.nextElementSibling.src = link.getAttribute('data-img-active'); 
        
      toggleNav()
    });
  });
} else {
  links2.forEach(link => {
    link.addEventListener('click', function(event) {
      
      links.forEach(link => {
        link.classList.remove('active-link');
      });
  
      link.classList.add('active-link');      
    });
  });
}

const heroLink = document.querySelector("#hero-link")
const heroLink2 = document.querySelector("#hero-link2")
const aboutUs = document.querySelector("#about")
const aboutUs2 = document.querySelector("#about2")

if (scrollY < aboutUs.offsetTop) {
  heroLink.classList.add("active-link")
}


function setActiveLinkOnScroll() {
  const sections = document.querySelectorAll('section'); 
  
  const scrollY = window.scrollY;
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; 
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
  
    if (scrollY < aboutUs.offsetTop-300) {
      heroLink.classList.add("active-link")

    } 
    
    if (scrollY < aboutUs2.offsetTop -300) {
      links.forEach(link => {
        
          link.classList.remove('active-link');
          link.nextElementSibling.src = link.getAttribute('data-img-inactive');
        }
      );
      heroLink2.classList.add("active-link")
      if (! window.matchMedia('(prefers-color-scheme: dark)').matches) {
        heroLink2.nextElementSibling.src = heroLink2.getAttribute('data-img-light'); 
      }
      else heroLink2.nextElementSibling.src = heroLink2.getAttribute('data-img-active'); 
    }
     else if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      links.forEach(link => {
        if (link.getAttribute('href') === `#${sectionId}`) {
          console.log(link.getAttribute('href'))
          link.classList.add('active-link');
          if (! window.matchMedia('(prefers-color-scheme: dark)').matches) {
            link.nextElementSibling.src = link.getAttribute('data-img-light'); 
          }
          else link.nextElementSibling.src = link.getAttribute('data-img-active'); 
        } else {
          link.classList.remove('active-link');
          link.nextElementSibling.src = link.getAttribute('data-img-inactive');
        }
      });
      links2.forEach(link => {
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active-link');
       
        } else {
          link.classList.remove('active-link');
        }
      });
    }
  });
}

