// Sample data for slider images
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

// Sample data for products
const products = [
  {
    imgSrc: "assets/product.png",
    price: "$29.99",
    description: "Nicorette 500 mg Menthe Existe en plusieurs modèles",
  },
  {
    imgSrc: "assets/product.png",
    price: "$29.99",
    description: "Nicorette 500 mg Menthe Existe en plusieurs modèles",
  },
  {
    imgSrc: "assets/product.png",
    price: "$29.99",
    description: "Nicorette 500 mg Menthe Existe en plusieurs modèles",
  },
  {
    imgSrc: "assets/product.png",
    price: "$29.99",
    description: "Nicorette 500 mg Menthe Existe en plusieurs modèles",
  },
  {
    imgSrc: "assets/product.png",
    price: "$29.99",
    description: "Nicorette 500 mg Menthe Existe en plusieurs modèles",
  },
];

/* conseils   section  */
const conseils = [
  {
    imgSrc: "assets/conseils1.png",
    title: "Votre solution sant",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ",
  },
  {
    imgSrc: "assets/conseils2.png",
    title: "Votre solution sant",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ",
  },
  {
    imgSrc: "assets/conseils3.png",
    title: "Votre solution sant",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ",
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

function createConseilCard(conseil) {
  const card = document.createElement("div");
  card.classList.add("conseil-card");

  const img = document.createElement("img");
  img.src = conseil.imgSrc;
  img.alt = "Conseil Image";
  card.appendChild(img);

  const content = document.createElement("div");
  content.classList.add("conseil-content");

  const title = document.createElement("h4");
  title.textContent = conseil.title;
  content.appendChild(title);

  const description = document.createElement("p");
  description.textContent = conseil.description;
  content.appendChild(description);

  card.appendChild(content);

  return card;
}

function populateCardsAndConseils() {
  const productCardList = document.getElementById("cardList");
  const conseilCardContainer = document.getElementById("conseilsCardContainer");

  products.forEach((product) => {
    const card = createCard(product);
    productCardList.appendChild(card);
  });

  conseils.forEach((conseil) => {
    const card = createConseilCard(conseil);
    conseilCardContainer.appendChild(card);
  });
}

window.onload = populateCardsAndConseils;

// ...

// contact-section
function createContactCard(type, content) {
  const card = document.createElement("div");
  card.className = "card";

  const image = document.createElement("img");
  image.src = content.image;
  image.alt = "Card Image";
  image.style.width = "100%";

  if (type === "image") {
    card.appendChild(image);
  } else if (type === "full") {
    const title = document.createElement("h3");
    title.textContent = content.title;

    const description = document.createElement("p");
    description.textContent = content.description;

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Votre adresse email";

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);
    card.classList.add("card-with-input");
    card.appendChild(input);
  }

  return card;
}

const contactCardsContainer = document.getElementById("cardsContainer");

const contactCard1Content = {
  image: "assets/1.png",
};

const contactCard2Content = {
  image: "assets/2.png",
  title: "Restons en contact",
  description:
    "Inscrivez-vous à nos communications et bénéficiez de contenus exclusifs, du programme fidélité et d’offres personnalisées. Pas plus d’un email, par semaine.",
};

const contactCard1 = createContactCard("image", contactCard1Content);
const contactCard2 = createContactCard("full", contactCard2Content);

contactCardsContainer.appendChild(contactCard1);
contactCardsContainer.appendChild(contactCard2);
