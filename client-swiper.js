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
    `, imageSrc: './assets/icons/user.svg', position: 'CEO example agency' }
];

function loadClients() {
    const clientContainer = document.getElementById('clientContainer');
    clientContainer.innerHTML = ''; // Clear existing content

    let counter = 0;

    clients.forEach(client => {
        // Create the slide container
        const slide = document.createElement('div');
        slide.className = 'swiper-slide '; // Each slide will have this class

        // Create the clientCard element
        const clientCard = document.createElement('div');
        
        // Shared class names
        let baseClass = 'client-card flex gap-[10px] flex-col items-center justify-center client-animation';
        let gradientClass = ''; // Placeholder for border-grad classes

        // Assign specific border-grad class based on counter
        if (counter === 0) {
            gradientClass = 'border-grad rounded-tl-[100px]';  // Every third item but not zero
        } else if (counter === 1) {
            gradientClass = 'border-grad2';  // Every second item
        } else if (counter === 2) {
            gradientClass = 'border-grad3 rounded-br-[100px]';  // All other items
        }
        
        // Combine the classes
        clientCard.className = `${baseClass} ${gradientClass}`;
        counter = (counter + 1) % 3

        // Client card content
        clientCard.innerHTML = `
            <p class="lg:text-[1rem] md:text-[0.8rem] text-[0.8rem] text-center text-gray-400 md:p-8 p-2">
                ${client.description}
            </p>
            <img src="${client.imageSrc}" class="mt-16 rounded-full h-12 ">
            <p class="text-[1.2rem] text-white mt-4">${client.name}</p>
            <p>${client.position}</p>
        `;

        // Append the clientCard inside the slide
        slide.appendChild(clientCard);

        // Append the slide to the client container (swiper-wrapper)
        clientContainer.appendChild(slide);
    });


    const swiper = new Swiper('.client-container', {
        spaceBetween: 10,   // Space between cards in px
        slidesPerView: 1,  // Show 1.5 slides on mobile
        // Adjust space between slides for mobile
      slidesPerGroup: 1,
        loop: false,         // Enable looping of slides
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          
            768: {
                slidesPerView: 2,  // Default for larger screens
                spaceBetween: 5,
                        slidesPerGroup: 2,
            },
            1224: {
                slidesPerView: 3,  // Default for larger screens
                spaceBetween: 10,
                        slidesPerGroup: 3,
            }
        }
       
    });
    

    

    
}

// Initialize the Swiper
loadClients();
