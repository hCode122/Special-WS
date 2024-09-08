import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
 
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



document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggle = document.getElementById('dropdown-toggle');
    dropdownToggle.addEventListener('click', dropdown);

    const btnToggle = document.getElementById('btn-toggle');
    btnToggle.addEventListener('click', toggle);


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
            <div class="mt-[65px] rounded-[10px] bg-[#EBEBEB] dark:bg-[#303030] h-[300px] w-[220px] flex flex-col pt-[150px] items-center">
                <img class="w-[55px] h-[45px]" src="./assets/icons/img.svg" class="flex-1">  <!-- Fixed src -->
                <div class="  mt-auto w-[160px] h-[80px] dark:bg-black bg-[#F5F5F5] mb-[20px] text-center">
                    <p class="dark:text-white text-[#2E2E2E] mt-[15px]">${member.name}</p>
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
        slide.innerHTML = `
            <img class=" " src="${member.src}">
        `;
        swiperWrapper.appendChild(slide);
    });

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 2.5,
        autoplay: {
            delay: 1500
        }
      });

    const swiper2 = new Swiper('.swiper2', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 12,
        autoplay: {
            delay: 1500
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

    items.forEach(item => {
        const p = document.createElement('p');
        p.className = 'item  bg-[#262626] w-full h-full text-start pl-4 pb-4 pt-[18px] text-white text-[14px]  border-2 border-[#262626]';
        p.textContent = item;
        p.onclick = () => setSelectedItem(item); 
        dropdownMenu.appendChild(p);
    });
}

export function setSelectedItem(itemText) {
    const selectedItemDiv = document.getElementById('selected-item');
    selectedItemDiv.textContent = itemText;
    dropdown(); 
}

