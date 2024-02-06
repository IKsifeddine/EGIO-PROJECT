const images = [
  "assets/pharmacist-checking-medicines-drugstore.png",
  "assets/pharmacist-checking-medicines-drugstore.png",
  "assets/pharmacist-checking-medicines-drugstore.png",
];

let currentSlideIndex = 0;
const sliderImages = document.querySelectorAll(".slider-image");

function showSlide() {
  sliderImages.forEach((image, index) => {
    if (index === currentSlideIndex) {
      image.style.opacity = 1; // Show the current image
    } else {
      image.style.opacity = 1; // Hide other images
    }
  });
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % images.length;
  showSlide();
}

function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + images.length) % images.length;
  showSlide();
}

showSlide(); // Initial display of the first image
setInterval(nextSlide, 3000);
