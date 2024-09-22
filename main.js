//Dark Mode
 function toggle(className) {
    var btn = document.getElementById(className)
    if (btn.classList.contains('toggle-on')) {
        btn.classList.add("toggle-off")
        btn.classList.remove("toggle-on")
        document.documentElement.classList.toggle('dark');
        switchDarkIcons()
    } else {
        btn.classList.remove("toggle-off")
        btn.classList.add("toggle-on")
        document.documentElement.classList.toggle('dark');
        switchDarkIcons()    
    }
}

//Nav Menu
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


document.addEventListener("DOMContentLoaded", function () {
    // use system mode preferance by default
    if (! window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggle('btn-toggle')
    }
   

    const navBtn = document.getElementById('nav-btn');
    navBtn.addEventListener('click', toggleNav);

    const dropdownToggle = document.getElementById('dropdown-toggle');
    dropdownToggle.addEventListener('click', dropdown);

    const navMenu = document.getElementById("nav-menu");
    const dropdownMenu = document.getElementById('dropdown-menu');
    
    
    window.onclick = function(e) {
        if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            if (dropdownMenu.classList.contains('dropdown-on')) {
                dropdown();
            }
        } 
        if (!navBtn.contains(e.target) && !navMenu.contains(e.target)) {
            if (navMenu.classList.contains("nav-on")) {
                toggleNav();
            }
        }
        
    };

    document.querySelectorAll('#nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
        
            const navMenu = document.getElementById('nav-menu');
            const targetId = link.getAttribute('href');
         
            const targetElement = document.getElementById(targetId);
           
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
    
            navMenu.classList.remove('nav-on');
            navMenu.classList.add('nav-off');
        });
    });
      
    const btnToggle = document.getElementById('btn-toggle');
    btnToggle.addEventListener('click', () => toggle('btn-toggle'));
    const btnToggle2 = document.getElementById('btn-toggle2');
    btnToggle2.addEventListener('click',() => toggle('btn-toggle2'))
    const btnToggle3 = document.getElementById('btn-toggle3');
    btnToggle3.addEventListener('click',() => toggle('btn-toggle3'))
    
});


function switchDarkIcons() {
    const members2 = document.getElementsByClassName('switchDark'); 
    const isDarkMode = document.documentElement.classList.contains('dark'); 

    Array.from(members2).forEach(img => {
        if (img.src.includes("f.svg") || img.src.includes("f-dark.svg")) {
            img.src = isDarkMode ? "./assets/icons/f-dark.svg" : "./assets/icons/f.svg";
        }

        if (img.src.includes("ai.svg") || img.src.includes("ai-dark.svg")) {
            img.src = isDarkMode ? "./assets/icons/ai-dark.svg" : "./assets/icons/ai.svg";
        }
    });
}


function dropdown() {
    var dropdownMenu = document.getElementById('dropdown-menu');

    if (dropdownMenu.classList.contains('dropdown-off')) {
        dropdownMenu.classList.remove('dropdown-off');
        dropdownMenu.classList.add('dropdown-on');
    } else {
        dropdownMenu.classList.remove('dropdown-on');
        dropdownMenu.classList.add('dropdown-off');
    }
}



 function setSelectedItem(itemText) {
    const selectedItemDiv = document.getElementById('selected-item');
    selectedItemDiv.textContent = itemText;
    dropdown(); 
}

