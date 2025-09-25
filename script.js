const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  const currentSlide = slides[currentIndex];
  const img = currentSlide.querySelector('img');

  const slideHeight = (img.naturalHeight / img.naturalWidth) * slideWidth;

  track.parentElement.style.height = `${slideHeight}px`; // altura animada

  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Botões
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

// Atualiza ao redimensionar a tela
window.addEventListener('resize', updateCarousel);

// Inicializa o carrossel
updateCarousel();
