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
      image.style.opacity = 1;
    } else {
      image.style.opacity = 1;
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

showSlide();
setInterval(nextSlide, 3000);

// JavaScript
const products = [
  {
    imgSrc: "assets/product.png",
    price: "$29.99",
    description: "Nicorette 500 mg Menthe Existe en plusieurs modéles",
  },
  {
    imgSrc: "assets/product.png",
    price: "$29.99",
    description: "Nicorette 500 mg Menthe Existe en plusieurs modéles",
  },
  {
    imgSrc: "assets/product.png",
    price: "$29.99",
    description: "Nicorette 500 mg Menthe Existe en plusieurs modéles",
  },
  {
    imgSrc: "assets/product.png",
    price: "$29.99",
    description: "Nicorette 500 mg Menthe Existe en plusieurs modéles",
  },
  {
    imgSrc: "assets/product.png",
    price: "$29.99",
    description: "Nicorette 500 mg Menthe Existe en plusieurs modéles",
  },
 
];

function createCard(product) {
  const card = document.createElement("div");
  card.classList.add("product-card");

  const img = document.createElement("img");
  img.src = product.imgSrc;
  img.alt = "Product Image";
  img.classList.add("product-image");
  card.appendChild(img);

  const details = document.createElement("div");
  details.classList.add("product-details");

  const price = document.createElement("p");
  price.classList.add("product-price");
  price.textContent = product.price;
  details.appendChild(price);

  const description = document.createElement("p");
  description.classList.add("product-description");
  description.textContent = product.description;
  details.appendChild(description);

  card.appendChild(details);

  return card;
}

function populateCards() {
  const cardList = document.getElementById("cardList");

  products.forEach((product) => {
    const card = createCard(product);
    cardList.appendChild(card);
  });
}

window.onload = populateCards;
