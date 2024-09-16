let currentIndex = 0;

const clients = [
  { name: 'Client 1', description: 'Description 1', imageSrc: './assets/icons/user.svg', position: 'Position 1' },
  { name: 'Client 2', description: 'Description 2', imageSrc: './assets/icons/user.svg', position: 'Position 2' },
  { name: 'Client 3', description: 'Description 3', imageSrc: './assets/icons/user.svg', position: 'Position 3' },
  { name: 'Client 4', description: 'Description 4', imageSrc: './assets/icons/user.svg', position: 'Position 4' },
  { name: 'Client 5', description: 'Description 5', imageSrc: './assets/icons/user.svg', position: 'Position 5' },
  { name: 'Client 5', description: 'Description 5', imageSrc: './assets/icons/user.svg', position: 'Position 5' }
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
        let baseClass = 'flex gap-[10px] flex-col items-center justify-center client-animation w-[70vw] md:w-[30%] lg:w-[22vw]';
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
            <p class="lg:text-[0.9rem] md:text-[0.8rem] text-[0.8rem] text-center text-gray-400 md:p-8 p-2">
                ${client.description}
            </p>
            <img src="${client.imageSrc}" class="mt-4 rounded-full h-12 p-2">
            <p class="text-[0.9rem] text-white mt-4">${client.name}</p>
            <p>${client.position}</p>
        `;

        // Append the clientCard inside the slide
        slide.appendChild(clientCard);

        // Append the slide to the client container (swiper-wrapper)
        clientContainer.appendChild(slide);
    });


    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,   // Display 3 cards at a time
        spaceBetween: 5,   // Space between cards in px
        loop: false,         // Enable looping of slides
        slidesPerGroup: 3,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
          
        // Event when swiper reaches the beginning
        reachBeginning: function() {
            document.getElementById('swiperPrev').classList.add('none');
        },
        // Event when swiper leaves the beginning (so previous button shows again)
        fromEdge: function() {
            document.getElementById('swiperPrev').classList.remove('hidden');
            document.getElementById('swiperNext').classList.remove('hidden');
        },
        // Event when swiper reaches the end
        reachEnd: function() {
            document.getElementById('swiperNext').classList.add('hidden');
        },
    },
    });
    

    function toggleNavButtons(swiper) {
        const prevButton = document.getElementById('swiperPrev');
        const nextButton = document.getElementById('swiperNext');
        
        // Show/hide the previous button
        if (swiper.isBeginning) {
            prevButton.classList.add('hidden');
        } else {
            prevButton.classList.remove('hidden');
        }
        
        // Show/hide the next button
        if (swiper.isEnd) {
            nextButton.classList.add('hidden');
        } else {
            nextButton.classList.remove('hidden');
        }
    }
}

// Initialize the Swiper
loadClients();
