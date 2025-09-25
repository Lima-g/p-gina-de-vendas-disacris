// Carrossel
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const container = document.querySelector('.carousel-container');
let currentIndex = 0;

function updateCarousel() {
  const currentSlide = slides[currentIndex];
  const img = currentSlide.querySelector('img');
  const slideWidth = container.offsetWidth;
  const slideHeight = (img.naturalHeight / img.naturalWidth) * slideWidth;
  container.style.height = `${slideHeight}px`;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() { currentIndex = (currentIndex + 1) % slides.length; updateCarousel(); }
function prevSlide() { currentIndex = (currentIndex - 1 + slides.length) % slides.length; updateCarousel(); }

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
window.addEventListener('resize', updateCarousel);
window.addEventListener('load', updateCarousel);
setInterval(nextSlide, 5000);

// Scroll fade-in e parallax
const sections = document.querySelectorAll('section');
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  hero.style.backgroundPosition = `center ${scrollY * 0.3}px`;
  
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
      // fade-in sequencial para <li>
      const lis = section.querySelectorAll('li');
      lis.forEach((li, i) => {
        setTimeout(() => li.classList.add('show'), i * 150);
      });
    }
  });
});
