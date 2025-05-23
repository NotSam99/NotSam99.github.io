const slider = document.getElementById('productSlider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');

const visibleSlides = 3;
const totalSlides = slides.length;
let index = 0;

function updateSlider() {
  const shift = index * (100 / visibleSlides);
  slider.style.transform = 'translateX(-' + shift + '%)';
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % (totalSlides - visibleSlides + 1);
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + (totalSlides - visibleSlides + 1)) % (totalSlides - visibleSlides + 1);
  updateSlider();
});


(function () {
  let bannerIndex = 0;
  const banners = document.querySelectorAll(".banner-slide");

  function showBanner(index) {
    banners.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextBanner() {
    bannerIndex = (bannerIndex + 1) % banners.length;
    showBanner(bannerIndex);
  }

  setInterval(nextBanner, 5000);
})();
