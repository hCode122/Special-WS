//Dark Mode
export function toggle(className) {
    var btn = document.getElementById(className)
    if (btn.classList.contains('toggle-on')) {
        btn.classList.add("toggle-off")
        btn.classList.remove("toggle-on")
        document.documentElement.classList.toggle('dark');

    } else {
        btn.classList.remove("toggle-off")
        btn.classList.add("toggle-on")
        document.documentElement.classList.toggle('dark');

    }
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

    if (navIcon.src.includes('menu-off.svg') ) {
        navIcon.src = './assets/icons/menu-on.svg';
    } else if (navIcon.src.includes('menu-off-black.svg')) {
        navIcon.src = './assets/icons/menu-on-dark.svg';

    } else {
        navIcon.src = './assets/icons/menu-off.svg';
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
    btnToggle2.addEventListener('click',() => toggle('btn-toggle2'));


    const members2 = [
        {src:"./assets/icons/f.svg"},
        {src:"./assets/icons/ps.svg"},
        {src:"./assets/icons/pr.svg"},
        {src:"./assets/icons/ai.svg"},
        {src:"./assets/icons/html.svg"},
        {src:"./assets/icons/js.svg"},
        {src:"./assets/icons/cs.svg"},
        {src:"./assets/icons/flut.svg"},
        {src:"./assets/icons/ruby.svg"},
        {src:"./assets/icons/b.svg"},
        {src:"./assets/icons/ps.svg"},
        {src:"./assets/icons/word.svg"},
        {src:"./assets/icons/f.svg"},
        {src:"./assets/icons/f-dark.svg"},
        {src:"./assets/icons/ps.svg"},
        {src:"./assets/icons/pr.svg"},
        {src:"./assets/icons/ai.svg"},
        {src:"./assets/icons/html.svg"},
        {src:"./assets/icons/js.svg"},
        {src:"./assets/icons/cs.svg"},
        {src:"./assets/icons/flut.svg"},
        {src:"./assets/icons/ruby.svg"},
        {src:"./assets/icons/b.svg"},
        {src:"./assets/icons/ps.svg"},
        {src:"./assets/icons/word.svg"},
    ];
    
    const marqueeContent = document.querySelector(".marquee-content");

    members2.forEach(member => {
        const img = document.createElement("img");
        if (member.src== "./assets/icons/f.svg") {
            if (document.documentElement.classList.contains('dark')) {
                img.src = member.src;
                marqueeContent.appendChild(img);

            }
        } else {
            img.src = member.src
            marqueeContent.appendChild(img);

        }
    });

    members2.forEach(member => {
        const img = document.createElement("img");
        if (member.src== "./assets/icons/f.svg") {
            if (document.documentElement.classList.contains('dark')) {
                img.src = member.src;
                marqueeContent.appendChild(img);

            }
        } else {
            img.src = member.src
            marqueeContent.appendChild(img);

        }
    });
   
    const members = [
        { name: 'Ahmad Ahmad', role: 'Frontend Developer', image:"./assets/imgs/person1.png" },
        { name: 'Sameer Ahmad', role: 'Frontend Developer', image:"./assets/imgs/person1.png" },
        { name: 'Tawfeeq Ahmad', role: 'Frontend Developer', image:"./assets/imgs/person1.png" },
        { name: 'Ahmad Ahmad', role: 'Frontend Developer', image:"./assets/imgs/person1.png" },
        { name: 'Ahmad Ahmad', role: 'Frontend Developer', image:"./assets/imgs/person1.png" },
      ];
      
      // Select the container where the slides will be inserted
      const marqueeContent2 = document.querySelector(".marquee-content2");
      
      // Function to create a slide from a member
      const createSlide = (member) => {
          const slide = document.createElement("div");
          slide.innerHTML = `
              <div class="card relative rounded-lg overflow-hidden shadow-lg">
                  <img src=${member.image} class="h-full">
                  <div class="text-content dark:bg-black text-center bg-white dark:text-white rounded-[10px]">
                      <p class="text-lg font-bold text-[#2E2E2E] dark:text-white">${member.name}</p>
                      <p class="text-sm text-gray-500">${member.role}</p>
                  </div>
              </div>
          `;
          return slide;
      }
      
      // Append each member to the marquee-content2 twice for seamless looping
      members.forEach(member => {
          const slide = createSlide(member);
          marqueeContent2.appendChild(slide);
      });
      
      // Duplicate the slides for seamless effect
      members.forEach(member => {
          const slide = createSlide(member);
          marqueeContent2.appendChild(slide);
      });


      // Select all the cards
      const cards = document.querySelectorAll(".card");
      
      // Pause marquee when hovering over a card
      cards.forEach(card => {
          card.addEventListener("mouseenter", () => {
            cards.forEach(pausedCard => {
                    pausedCard.style.animationPlayState = "paused";
                
          });
      
          card.addEventListener("mouseleave", () => {
            cards.forEach(pausedCard => {
                    pausedCard.style.animationPlayState = "running";
          });
      });

      loadClient();
      
});
      })})

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
