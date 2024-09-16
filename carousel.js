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
    810: {
        slidesPerView: 1.5,  // Show 1.5 slides on mobile
        spaceBetween: 5,   // Adjust space between slides for mobile
    },
    // when the screen width is > 768px (tablet and above)
    1024: {
        slidesPerView: 2.5,  // Default for larger screens
        spaceBetween: 15,
    }
}

})

const swiper2 = new Swiper('.middle-container', {
    spaceBetween: 15,  
    slidesPerGroup: 12,
    autoplay: {
        delay: 1,
        reverseDirection: true,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 22000,
    breakpoints: {
    810: {
        slidesPerView: 5,  // Show 1.5 slides on mobile
        spaceBetween: 5,   // Adjust space between slides for mobile
    },
    1024: {
        slidesPerView: 12,  // Default for larger screens
        spaceBetween: 15,
    }
    
}

})

function createClientCards() {
    const members = [
        { name: 'Ahmad Ahmad', role: 'Frontend Developer', image: "./assets/imgs/person1.png" },
        { name: 'Sameer Ahmad', role: 'Frontend Developer', image: "./assets/imgs/person1.png" },
        { name: 'Tawfeeq Ahmad', role: 'Frontend Developer', image: "./assets/imgs/person1.png" },
        { name: 'Ahmad Ahmad', role: 'Frontend Developer', image: "./assets/imgs/person1.png" },
        { name: 'Ahmad Ahmad', role: 'Frontend Developer', image: "./assets/imgs/person1.png" }
    ];

    const container = document.querySelector(".team-wrapper");

    const createSlide = (member) => {
        const slide = document.createElement("div");
        slide.classList.add('swiper-slide');
        slide.classList.add('pausable');  
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
        { src: "./assets/icons/word.svg" },
        { src: "./assets/icons/f.svg" },
        { src: "./assets/icons/f-dark.svg" },
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
    
      members2.forEach(member => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide'); // Add Swiper slide class
    
        const img = document.createElement('img');
        img.src = member.src;
        img.alt = ''; // Optionally add alt text for accessibility
    
        slide.appendChild(img);
        middleWeapper.appendChild(slide);
      });
      members2.forEach(member => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide'); // Add Swiper slide class
    
        const img = document.createElement('img');
        img.src = member.src;
        img.alt = ''; // Optionally add alt text for accessibility
    
        slide.appendChild(img);
        middleWeapper.appendChild(slide);
      });
}

createCodeCards();
createClientCards();