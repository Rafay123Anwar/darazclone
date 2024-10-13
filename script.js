let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;
    
    const offset = currentSlide * -100; // Move to the respective slide
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function moveSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
}

// Auto-slide functionality (every 3 seconds)
setInterval(() => {
    moveSlide(1);
}, 3000);
