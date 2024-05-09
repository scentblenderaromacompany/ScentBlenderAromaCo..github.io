document.addEventListener("DOMContentLoaded", function () {
  initializeServiceWorker();
  setupCarousel();
  generateProductList();
  setupFormSubmission();
  setupAnnouncementCycling();
  lazyLoadImages();
  setupSmoothScrolling();
  fetchDynamicContent();
  animateLogo();
  setupSpecialOffersToggle();
});







function initializeServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.
    register("/sw.js").
    then((registration) =>
    console.log("Service Worker registered with scope:", registration.scope)).

    catch((error) =>
    console.log("Service Worker registration failed:", error));

  }
}

function setupCarousel() {
  const products = [
      { imgSrc: 'product1.jpg', alt: 'Product 1 Description' },
      { imgSrc: 'product2.jpg', alt: 'Product 2 Description' },
      { imgSrc: 'product3.jpg', alt: 'Product 3 Description' }
  ];
  
  const carousel = document.querySelector('.carousel');
  products.forEach(product => {
      const img = document.createElement('img');
      img.src = product.imgSrc;
      img.alt = product.alt;
      carousel.appendChild(img);
  });

  $(carousel).slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true
  });
}


function generateProductList() {
  const products = [
  {
    name: "Lavender Oil Diffuser",
    price: 9.99,
    img: "https://via.placeholder.com/150" },

  {
    name: "Rose Wax Melt",
    price: 5.99,
    img: "https://via.placeholder.com/150" },

  {
    name: "Ocean Breeze Diffuser",
    price: 8.99,
    img: "https://via.placeholder.com/150" },

  { name: "Orange Zest", price: 7.99, img: "https://via.placeholder.com/150" }];

  const productList = document.getElementById("productList");
  products.forEach(product => {
    let productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `<img src="${product.img}" alt="${product.name}"><h3>${product.name}</h3><p>$${product.price}</p>`;
    productList.appendChild(productElement);
  });
}

function setupFormSubmission() {
  const form = document.getElementById("subscriptionForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    if (isValidEmail(email)) {
      alert("Thank you for subscribing!");
    } else {
      alert("Please enter a valid email address.");
    }
  });
}

function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}
function setupAnnouncementCycling() {
  const messages = document.querySelectorAll(".announcement-bar .message");
  let currentMessage = 0;

  setInterval(() => {
      const nextMessage = (currentMessage + 1) % messages.length;
      messages[currentMessage].style.left = '-100%';  // Slide current out
      messages[nextMessage].style.left = '0';         // Bring next into view

      currentMessage = nextMessage;
  }, 20000);
}


function lazyLoadImages() {
  const lazyImages = document.querySelectorAll('img[lazy-load="true"]');
  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.add("loaded");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    lazyImages.forEach(lazyImage => lazyImageObserver.observe(lazyImage));
  }
}

function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.
      querySelector(this.getAttribute("href")).
      scrollIntoView({ behavior: "smooth" });
    });
  });
}

function fetchDynamicContent() {
  const contentArea = document.getElementById("dynamicContent");
  fetch("path_to_your_content_api_or_file").
  then(response => response.json()).
  then(data => contentArea.innerHTML = `<p>${data.content}</p>`).
  catch(error => console.error("Error loading the content:", error));
}

function animateLogo() {
  const logo = document.querySelector(".logo");
  logo.animate(
  [
  { transform: "translateY(0px)" },
  { transform: "translateY(10px)" },
  { transform: "translateY(0px)" }],

  {
    duration: 2000,
    iterations: Infinity,
    easing: "ease-in-out" });


}

function setupSpecialOffersToggle() {
  const toggleButton = document.getElementById("toggleOffers");
  const offersSection = document.getElementById("specialOffers");
  toggleButton.addEventListener("click", () =>
  offersSection.classList.toggle("hidden"));

}
function setupNavigationToggle() {
  const navToggle = document.createElement('span');
  navToggle.innerText = 'Menu';
  navToggle.className = 'nav-toggle';
  document.querySelector('.top-banner').appendChild(navToggle);

  navToggle.addEventListener('click', function() {
      const nav = document.querySelector('nav ul');
      nav.classList.toggle('show');
  });
}
function fetchDynamicContent() {
  const contentArea = document.getElementById("dynamicContent");
  fetch("path_to_your_content_api_or_file")
      .then(response => response.json())
      .then(data => contentArea.innerHTML = `<p>${data.content}</p>`)
      .catch(error => console.error("Error loading the content:", error));
}
