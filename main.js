//Dark Mode
 function toggle() {
    var btn = document.getElementById('btn-toggle')
    var btn2 = document.getElementById('btn-toggle2')
    var btn3 = document.getElementById('btn-toggle3')
    toggleDark(btn)
    toggleDark(btn2)
    toggleDark(btn3)

    const links = document.querySelectorAll('#mobile-links li a');
    links.forEach(link => {
        links.forEach(link => {
            link.classList.remove('active-link');
            link.nextElementSibling.src = link.getAttribute('data-img-inactive');
        });

        link.classList.add('active-link');
        if (!window.matchMedia('(prefers-color-scheme: dark)').matches) {
            link.nextElementSibling.src = link.getAttribute('data-img-active'); 
        }
        else link.nextElementSibling.src = link.getAttribute('data-img-light'); 
        
    });
}

function toggleDark(btn) {
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


document.addEventListener("DOMContentLoaded", function () {
    if (! window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggle()
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

