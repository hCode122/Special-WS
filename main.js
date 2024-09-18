//Dark Mode
export function toggle(className) {
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
        switchDarkIcons()    }
}

//Nav Menu
export function toggleNav() {
    const btn = document.getElementById("nav-btn");
    const navMenu = document.getElementById("nav-menu");
    const navIcon = document.getElementById('nav-icon-light');

    if (navMenu.classList.contains('nav-off')) {
        navMenu.classList.remove("nav-off");
        navMenu.classList.add("nav-on");
    } else {
        navMenu.classList.remove("nav-on");
        navMenu.classList.add("nav-off");
    }

    
}


document.addEventListener("DOMContentLoaded", function () {
    const navBtn = document.getElementById('nav-btn');
    navBtn.addEventListener('click', toggleNav);

    const dropdownToggle = document.getElementById('dropdown-toggle');
    dropdownToggle.addEventListener('click', dropdown);

    const dropdownMenu = document.getElementById('dropdown-menu');
    
    
    window.onclick = function(e) {
        if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            if (dropdownMenu.classList.contains('dropdown-on')) {
                dropdown();
            }
        }
    };
      
    const btnToggle = document.getElementById('btn-toggle');
    btnToggle.addEventListener('click', () => toggle('btn-toggle'));
    const btnToggle2 = document.getElementById('btn-toggle2');
    btnToggle2.addEventListener('click',() => toggle('btn-toggle2'))
    
});


function switchDarkIcons() {
    const members2 = document.getElementsByClassName('switchDark'); 
    const isDarkMode = document.documentElement.classList.contains('dark');  // Check if dark mode is active on <html>

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



export function setSelectedItem(itemText) {
    const selectedItemDiv = document.getElementById('selected-item');
    selectedItemDiv.textContent = itemText;
    dropdown(); 
}

const clients = [
    {
        description: "Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur Lorem adipiscing consectetur sed dolor o Lorem ipsum dolor sit amet, dolor",
        imageSrc: "./assets/icons/user.svg",
        name: "name",
        position: "CEO agency"
    },
    {
        description: "Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur Lorem adipiscing consectetur sed dolor o Lorem ipsum dolor sit amet, dolor",
        imageSrc: "./assets/icons/user.svg",
        name: "name",
        position: "CEO agency"
    },
    {
        description: "Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur Lorem adipiscing consectetur sed dolor o Lorem ipsum dolor sit amet, dolor",
        imageSrc: "./assets/icons/user.svg",
        name: "name",
        position: "CEO agency"
    },
    {
        description: "Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur Lorem adipiscing consectetur sed dolor o Lorem ipsum dolor sit amet, dolor",
        imageSrc: "./assets/icons/user.svg",
        name: "AAA",
        position: "CEO agency"
    },
    {
        description: "Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur Lorem adipiscing consectetur sed dolor o Lorem ipsum dolor sit amet, dolor",
        imageSrc: "./assets/icons/user.svg",
        name: "AAA",
        position: "CEO agency"
    },
    {
        description: "Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur Lorem adipiscing consectetur sed dolor o Lorem ipsum dolor sit amet, dolor",
        imageSrc: "./assets/icons/user.svg",
        name: "AAA",
        position: "CEO agency"
    },
    {
        description: "Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur Lorem adipiscing consectetur sed dolor o Lorem ipsum dolor sit amet, dolor",
        imageSrc: "./assets/icons/user.svg",
        name: "3",
        position: "CEO agency"
    },
    {
        description: "Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur Lorem adipiscing consectetur sed dolor o Lorem ipsum dolor sit amet, dolor",
        imageSrc: "./assets/icons/user.svg",
        name: "3",
        position: "CEO agency"
    },
    {
        description: "Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur Lorem adipiscing consectetur sed dolor o Lorem ipsum dolor sit amet, dolor",
        imageSrc: "./assets/icons/user.svg",
        name: "3",
        position: "CEO agency"
    },
    {
        description: "Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur Lorem adipiscing consectetur sed dolor o Lorem ipsum dolor sit amet, dolor",
        imageSrc: "./assets/icons/user.svg",
        name: "name",
        position: "CEO agency"
    },
]
