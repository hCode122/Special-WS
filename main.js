import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
 
export function toggle() {
    var btn = document.getElementById("btn-toggle")
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

export function toggleNav() {
    const btn = document.getElementById("nav-btn");
    const navMenu = document.getElementById("nav-menu");
    const navIcon = document.getElementById('nav-icon');

    if (navMenu.classList.contains('nav-off')) {
        navMenu.classList.remove("nav-off");
        navMenu.classList.add("nav-on");
        btn.textContent = "Hide";  
    } else {
        navMenu.classList.remove("nav-on");
        navMenu.classList.add("nav-off");
        btn.textContent = "Show";  
    }
    if (navIcon.src.includes('menu-off.svg')) {
        navIcon.src = './assets/icons/menu-on.svg';
    } else {
        navIcon.src = './assets/icons/menu-off.svg';
    }
}



document.addEventListener("DOMContentLoaded", function () {
    const navBtn = document.getElementById('nav-btn');
    navBtn.addEventListener('click', toggleNav);

    const dropdownToggle = document.getElementById('dropdown-toggle');
    dropdownToggle.addEventListener('click', dropdown);

    const btnToggle = document.getElementById('btn-toggle');
    btnToggle.addEventListener('click', toggle);
    const btnToggle2 = document.getElementById('btn-toggle2');
    btnToggle2.addEventListener('click', toggle);



    const members = [
        { name: 'Ahmad Ahmad', role: 'Frontend Developer' },
        { name: 'Ahmad Ahmad', role: 'Frontend Developer' },
        { name: 'Ahmad Ahmad', role: 'Frontend Developer' },
        { name: 'Ahmad Ahmad', role: 'Frontend Developer' },
        { name: 'Ahmad Ahmad', role: 'Frontend Developer' },
        { name: 'Ahmad Ahmad', role: 'Frontend Developer' }
    ];
    const swiperContainer = document.getElementById("swiper-wrapper1");

    members.map(member => {
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide"); 
        slide.innerHTML = `
        <div class="rounded-[10px] bg-[#EBEBEB] dark:bg-[#303030] h-full gap-[50px] flex flex-col justify-center">
            <img class="w-[80px] ml-auto mr-auto mt-[100px]" src="./assets/icons/img.svg"> 
            <div class="w-[60px] h-[100px] dark:bg-black bg-[#F5F5F5]  text-center">
                <p class="dark:text-white text-[#2E2E2E] ">${member.name}</p>
                <p class="text-grey">${member.role}</p>
            </div>
        </div>
    `;
        
        swiperContainer.appendChild(slide);
    });

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
    
    const swiperWrapper = document.getElementById("swiper-wrapper");

    members2.forEach(member => {
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide"); 
        if (member.src== "./assets/icons/f.svg") {
            if (document.documentElement.classList.contains('dark')) {
                slide.innerHTML = `
                    <img class="" src="${member.src}">
                `;
                swiperWrapper.appendChild(slide);

            }
        } else {
            slide.innerHTML = `
                    <img class="" src="${member.src}">
                `;
                swiperWrapper.appendChild(slide);

        }
    });

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1.5,
        autoplay: {
            delay: 1500
        },
        breakpoints: {
            1024: {
                slidesPerView: 2.5,
            }
        },
        spaceBetween: 35
      });

    const swiper2 = new Swiper('.swiper2', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 6,
        autoplay: {
            delay: 1500
        },
        breakpoints: {
            1024: {
                slidesPerView: 12,
            }
        }
      });
      
});

export function dropdown() {
    var dropdownMenu = document.getElementById('dropdown-menu');

    if (dropdownMenu.classList.contains('dropdown-off')) {
        populateDropdown(items)
        dropdownMenu.classList.remove('dropdown-off');
        dropdownMenu.classList.add('dropdown-on');
    } else {
        dropdownMenu.innerHTML = '';
        dropdownMenu.classList.remove('dropdown-on');
        dropdownMenu.classList.add('dropdown-off');
    }
}

const items = [
    "App Development",
    "Web Development",
    "UI UX Design"
];

export function populateDropdown(items) {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.innerHTML = '';
    const ul = document.createElement('ul');

    items.forEach(item => {
        const li = document.createElement('li');
        const p = document.createElement('p');

        li.className = 'item bg-white text-[#2E2E2E]  dark:bg-[#262626] w-full h-full text-start pl-4 pb-4 pt-[18px] dark:text-white text-[14px]  border-2 border-[#262626]';
        p.textContent = item;
        li.onclick = () => setSelectedItem(item); 
        li.appendChild(p)
        ul.appendChild(li)
    });
    dropdownMenu.appendChild(ul);
}

export function setSelectedItem(itemText) {
    const selectedItemDiv = document.getElementById('selected-item');
    selectedItemDiv.textContent = itemText;
    dropdown(); 
}

