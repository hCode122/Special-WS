let currentIndex = 0;

const clients = [
  { name: 'name', description: `
    Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsumsito dolor sit amet, consectetur Lorem adipiscing consectetur sed dolor o
Lorem ipsum dolor sit amet, dolor 
    `, imageSrc: './assets/icons/user.svg', position: 'CEO example agency' },
  { name: 'name', description: `
    Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsumsito dolor sit amet, consectetur Lorem adipiscing consectetur sed dolor o
Lorem ipsum dolor sit amet, dolor 
    `, imageSrc: './assets/icons/user.svg', position: 'CEO example agency' },
  { name: 'name', description: `
    Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsumsito dolor sit amet, consectetur Lorem adipiscing consectetur sed dolor o
Lorem ipsum dolor sit amet, dolor 
    `, imageSrc: './assets/icons/user.svg', position: 'CEO example agency' },
  { name: 'name', description: `
    Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsumsito dolor sit amet, consectetur Lorem adipiscing consectetur sed dolor o
Lorem ipsum dolor sit amet, dolor 
    `, imageSrc: './assets/icons/user.svg', position: 'CEO example agency' },
  { name: 'name', description: `
    Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsumsito dolor sit amet, consectetur Lorem adipiscing consectetur sed dolor o
Lorem ipsum dolor sit amet, dolor 
    `, imageSrc: './assets/icons/user.svg', position: 'CEO example agency' },
  { name: 'name', description: `
    Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsumsito dolor sit amet, consectetur Lorem adipiscing consectetur sed dolor o
Lorem ipsum dolor sit amet, dolor 
    `, imageSrc: './assets/icons/user.svg', position: 'CEO example agency' },
    { name: 'name', description: `
        Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsumsito dolor sit amet, consectetur Lorem adipiscing consectetur sed dolor o
    Lorem ipsum dolor sit amet, dolor 
        `, imageSrc: './assets/icons/user.svg', position: 'CEO example agency' },
      { name: 'name', description: `
        Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsumsito dolor sit amet, consectetur Lorem adipiscing consectetur sed dolor o
    Lorem ipsum dolor sit amet, dolor 
        `, imageSrc: './assets/icons/user.svg', position: 'CEO example agency' },
      { name: 'name', description: `
        Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsumsito dolor sit amet, consectetur Lorem adipiscing consectetur sed dolor o
    Lorem ipsum dolor sit amet, dolor 
        `, imageSrc: './assets/icons/user.svg', position: 'CEO example agency' }
];

function loadClients() {
    const clientContainer = document.getElementById('clientContainer');
    clientContainer.innerHTML = '';

    let counter = 0;

    clients.forEach((client, index) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide '; 

        const clientCard = document.createElement('div');
        const size = getScreenSizeClass();
        let baseClass = 'client-card flex gap-[10px] flex-col items-center justify-center client-animation min-w-[200px]';
        let gradientClass = ''; 

        if (size == "client-card-large" ) {
            if (counter === 0) {
                gradientClass = 'border-grad rounded-tl-[100px]'; 
            } else if (counter === 1) {
                gradientClass = 'border-grad2';  
            } else if (counter === 2) {
                gradientClass = 'border-grad3 rounded-br-[100px]'; 
            }
            
            clientCard.className = `${baseClass} ${gradientClass}`;
            counter = (counter + 1) % 3
        } else {
            if (index == 0) {
                gradientClass = 'border-grad rounded-tl-[100px]'; 
            } else if (index == clients.length -1) {
                gradientClass = 'border-grad3 rounded-br-[100px]'; 
            } else {
                gradientClass = 'border-grad2';  
            }
            clientCard.className = `${baseClass} ${gradientClass}`;
        }
 
        clientCard.innerHTML = `
            <p class="text-styles ">
                ${client.description}
            </p>
            <img src="${client.imageSrc}" class="md:mt-16 md:mt-8 mt-4 rounded-full">
            <p class="text-[1.2rem] text-white mt-4">${client.name}</p>
            <p>${client.position}</p>
        `;

        slide.appendChild(clientCard);

        clientContainer.appendChild(slide);
    });


    const swiper = new Swiper('.client-container', {
        spaceBetween: 5,   
        slidesPerView: 1.5,  

        slidesPerGroup: 1,
        loop: false,         
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          
            768: {
                slidesPerView: 2.5,  
                slidesPerGroup: 2,
                spaceBetween: 5,
            },
            1024: {
                slidesPerView: 2,  
                spaceBetween: 5,
                slidesPerGroup: 2
            },
            1280: {
                slidesPerView: 3,  
                spaceBetween: 0,
                slidesPerGroup: 3
            }
       
        },
        on: {
            init: function () {
                updateNavButtons(this);
            },
            slideChange: function () {
                updateNavButtons(this);
            }
        }
       
    });
}

function updateNavButtons(swiper) {
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');

    if (swiper.isBeginning) {
        prevButton.style.display = 'none'; // Hide prev button
    } else {
        prevButton.style.display = 'block'; // Show prev button
    }

    // Check if at the last slide
    if (swiper.isEnd) {
        nextButton.style.display = 'none'; // Hide next button
    } else {
        nextButton.style.display = 'block'; // Show next button
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


loadClients();
