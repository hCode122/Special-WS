
document.addEventListener("DOMContentLoaded", function () {
    createTheCards()
    const glide = new Glide('.glide', {
        type: 'carousel',
        autoplay: 2000,
        animationDuration: 3000,
  animationTimingFunc: 'linear',
  perView: 3
      });
    
    glide.mount();
    ;


})

function createTheCards() {
    const members = [
        { name: 'Ahmad Ahmad', role: 'Frontend Developer' },
        { name: 'Ahmad Ahmad', role: 'Frontend Developer' },
        { name: 'Ahmad Ahmad', role: 'Frontend Developer' },
        { name: 'Ahmad Ahmad', role: 'Frontend Developer' },
        { name: 'Ahmad Ahmad', role: 'Frontend Developer' },
        { name: 'Ahmad Ahmad', role: 'Frontend Developer' }
    ];

    members.map(member => {
        const slide = document.createElement("li");
        slide.classList.add("glide__slide");
        
        slide.innerHTML = `
        <div class="bg-red-500">
            <img class="w-[90px] h-[90px] object-cover  mt-16" src="./assets/icons/img.svg" alt="${member.name}"> 
            
            <div class="w-full max-w-[200px] h-[100px] bg-[#F5F5F5] text-start
                 justify-center dark:bg-black text-center p-4 rounded-lg shadow-lg flex flex-col">
                <p class="text-lg ml-2 font-bold text-[#2E2E2E] dark:text-white">${member.name}</p>
                <p class="text-sm ml-2 text-gray-500">${member.role}</p>
            </div>
        </div>
        `;
        
        swiperContainer.appendChild(slide);
    });
}