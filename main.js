//Dark Mode
function toggle() {
    var btn = document.getElementById('btn-toggle');
    var btn2 = document.getElementById('btn-toggle2');
    var btn3 = document.getElementById('btn-toggle3');
    
    
    toggleDark(btn);
    toggleDark(btn2);
    toggleDark(btn3);

    const links = document.querySelectorAll('#mobile-links li a');
    const isDarkMode = document.documentElement.classList.contains('dark'); 
    const activeLink = document.querySelector('.active-link');

    links.forEach(link => {
        link.classList.remove('active-link');
        link.nextElementSibling.src = link.getAttribute('data-img-inactive');
    });

    if (activeLink) {
        activeLink.classList.add('active-link'); 
        if (isDarkMode) {
            activeLink.nextElementSibling.src = activeLink.getAttribute('data-img-active'); 
        } else {
            activeLink.nextElementSibling.src = activeLink.getAttribute('data-img-light'); 
        }
    }
}

function toggleDark(btn) {
    var text = document.querySelector('#mode-text')
    if (btn.classList.contains('toggle-on')) {
        btn.classList.add("toggle-off")
        btn.classList.remove("toggle-on")
        document.documentElement.classList.toggle('dark');
        text.innerHTML = "Light mode"
        switchDarkIcons()
    } else {
        btn.classList.remove("toggle-off")
        btn.classList.add("toggle-on")
        document.documentElement.classList.toggle('dark');
        text.innerHTML = "Dark mode"
        switchDarkIcons()    
    }
}


document.addEventListener("DOMContentLoaded", function () {
    if (! window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggle()
    }
   
    const button = document.querySelector('.get-animation');

   

    const navBtn = document.getElementById('nav-btn');
    navBtn.addEventListener('click', toggleNav);

    const navMenu = document.getElementById("nav-menu");
    
    
    window.onclick = function(e) {
        if (!navBtn.contains(e.target) && !navMenu.contains(e.target)) {
            if (navMenu.classList.contains("nav-on")) {
                toggleNav();
            }
        }
        
    };

    
      
    const btnToggle = document.getElementById('btn-toggle');
    btnToggle.addEventListener('click', () => toggle());
    const btnToggle2 = document.getElementById('btn-toggle2');
    btnToggle2.addEventListener('click',() => toggle())
    const btnToggle3 = document.getElementById('btn-toggle3');
    btnToggle3.addEventListener('click',() => toggle())
    
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


function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    
    // Use toggle for better handling of class states
    dropdownMenu.classList.toggle('dropdown-on');
    dropdownMenu.classList.toggle('dropdown-off');
}

// Set the selected item and close the dropdown
function setSelectedItem(item) {
    const selectedItemDiv = document.getElementById('selected-item');
    selectedItemDiv.textContent = item.innerText;

    // Close dropdown after selection
    closeDropdown();
}

// Explicitly close the dropdown
function closeDropdown() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.classList.remove('dropdown-on');
    dropdownMenu.classList.add('dropdown-off');
}

window.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.getElementById('selected-item');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    
    dropdownToggle.addEventListener('click', function(event) {
        event.stopPropagation(); 
        toggleDropdown();
    });
    
    dropdownItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.stopPropagation(); 
            setSelectedItem(item);
        });
    });
    
    document.addEventListener('click', function(event) {
        const dropdownMenu = document.getElementById('dropdown-menu');
        const dropdownContainer = document.getElementById('dropdown-container');
        
        if (!dropdownContainer.contains(event.target)) {
            closeDropdown();
        }
    });
});

