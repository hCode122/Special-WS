const swiper = new Swiper('.team-container', {
    spaceBetween: 15,  
    slidesPerGroup: 3,
    autoplay: {
        delay: 1,
            reverseDirection: true,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
    },
    loop: true,
    speed: 9000,
    breakpoints: {
    768: {
        slidesPerView: 3, 
        spaceBetween: 15,  
    },
    1024: {
        slidesPerView: 1.5, 
        spaceBetween: 5, 
    },
    1220: {
        slidesPerView: 2, 
        spaceBetween: 5, 
    },
    1378: {
        slidesPerView: 2.5,
        spaceBetween: 15,
    }
}

})

const swiper2 = new Swiper('.middle-container', {
    spaceBetween: 15,  
    slidesPerGroup: 11,
    slidesPerView: 3,  
    autoplay: {
        delay: 1,
        reverseDirection: true,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 22000,
    breakpoints: {
    500: {
        slidesPerView: 5,  
        spaceBetween: 5,   
    },
    1024: {
        slidesPerView: 12,  
        spaceBetween: 15,
    }
    
}

})

function createClientCards() {
    const members = [
        { name: 'Ahmad Ahmad', role: 'Frontend Developer', image: "./assets/imgs/person1.png" },
        { name: 'Sameer Ahmad', role: 'Frontend Developer', image: "./assets/imgs/person2.png" },
        { name: 'Tawfeeq Ahmad', role: 'Frontend Developer', image: "./assets/imgs/person1.png" },
        { name: 'Ahmad Ahmad', role: 'Frontend Developer', image: "./assets/imgs/person2.png" },
        { name: 'Ahmad Ahmad', role: 'Frontend Developer', image: "./assets/imgs/person1.png" },
        { name: 'Ahmad Ahmad', role: 'Frontend Developer', image: "./assets/imgs/person2.png" },
        { name: 'Sameer Ahmad', role: 'Frontend Developer', image: "./assets/imgs/person1.png" },
        { name: 'Tawfeeq Ahmad', role: 'Frontend Developer', image: "./assets/imgs/person2.png" },
        { name: 'Ahmad Ahmad', role: 'Frontend Developer', image: "./assets/imgs/person1.png" },
        { name: 'Ahmad Ahmad', role: 'Frontend Developer', image: "./assets/imgs/person2.png" },
        { name: 'Ahmad Ahmad', role: 'Frontend Developer', image: "./assets/imgs/person2.png" }
    ];

    const container = document.querySelector(".team-wrapper");

    const createSlide = (member) => {
        const slide = document.createElement("div");
        slide.classList.add('swiper-slide');
        slide.classList.add('pausable');  
        slide.classList.add('overflow-hidden');  
        slide.innerHTML = `
            <div class="team-card relative rounded-lg overflow-hidden shadow-lg">
                <img src="${member.image}" class="h-full">
                <div class="text-content dark:bg-black text-center bg-white dark:text-white rounded-[10px]">
                    <p class="text-lg font-bold text-[#2E2E2E] dark:text-white">${member.name}</p>
                    <p class="text-sm text-gray-500">${member.role}</p>
                </div>
            </div>
        `;
        return slide;
    };

    members.forEach(member => {
        const slide = createSlide(member);
        container.appendChild(slide);
    });

    members.forEach(member => {
        const slide = createSlide(member);
        container.appendChild(slide);
    });
}

function createCodeCards() {
    const members2 = [
        { src: "./assets/icons/ps.svg" },
        { src: "./assets/icons/pr.svg" },
        { src: "./assets/icons/ai.svg" },
        { src: "./assets/icons/html.svg" },
        { src: "./assets/icons/js.svg" },
        { src: "./assets/icons/cs.svg" },
        { src: "./assets/icons/flut.svg" },
        { src: "./assets/icons/ruby.svg" },
        { src: "./assets/icons/b.svg" },
        { src: "./assets/icons/ps.svg" },
        { src: "./assets/icons/word.svg" },
        { src: "./assets/icons/f.svg" },
        { src: "./assets/icons/ps.svg" },
        { src: "./assets/icons/pr.svg" },
        { src: "./assets/icons/ai.svg" },
        { src: "./assets/icons/html.svg" },
        { src: "./assets/icons/js.svg" },
        { src: "./assets/icons/cs.svg" },
        { src: "./assets/icons/flut.svg" },
        { src: "./assets/icons/ruby.svg" },
        { src: "./assets/icons/b.svg" },
        { src: "./assets/icons/ps.svg" },
        { src: "./assets/icons/word.svg" }
      ];
    
      const middleWeapper = document.querySelector('.middle-wrapper');
      const isDarkMode = document.documentElement.classList.contains('dark'); 

      members2.forEach(member => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide'); // Add Swiper slide class
    
        const img = document.createElement('img');
    
        if (member.src === "./assets/icons/f.svg" | member.src === "./assets/icons/f-dark.svg") {
            if (isDarkMode) {
                img.src= "./assets/icons/f-dark.svg"
            } else {
                img.src ="./assets/icons/f.svg"
            }
            img.classList.add("switchDark")
       
        } else {
            img.src = member.src;
        }

        slide.appendChild(img);
        middleWeapper.appendChild(slide);
      });
      
}

createCodeCards();
createClientCards();