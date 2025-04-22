// Navigation Bar Toggle
function toggleMenu() {
  const menuBtn = document.getElementById("myNavMenu");
  menuBtn.classList.toggle("responsive");
}
function myMenuFunction() {
  let menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}
document.getElementById("menuToggleBtn")?.addEventListener("click", toggleMenu);

let cart = []; // Array to hold items in the cart

// Event listener for adding item to cart
document.querySelectorAll('.button').forEach(button => {
  button.addEventListener("click", (event) => {
    const item = {
      id: event.target.dataset.id, // Unique product ID
      name: event.target.dataset.name,
      price: parseFloat(event.target.dataset.price), // Price of the product
      quantity: 1, // Default quantity for this item
    };

    // Check if the item already exists in the cart
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex >= 0) {
      // Item exists in the cart, increment the quantity
      cart[existingItemIndex].quantity++;
    } else {
      // Add new item to cart
      cart.push(item);
    }

    updateCartDisplay();
  });
});
 //contact
const toggleBtn = document.getElementById('contactToggle');
const contactMenu = document.getElementById('contactMenu');

toggleBtn.addEventListener('click', () => {
  contactMenu.classList.toggle('hidden');
});


// Update the cart count and display cart items
function updateCartDisplay() {
  let totalItems = 0;
  let cartListHTML = '';

  // Calculate total number of items in the cart
  cart.forEach(item => {
    totalItems += item.quantity;
    cartListHTML += `<li>${item.name} x${item.quantity} - $${item.price * item.quantity}</li>`;
  });

  // Update cart count in the UI
  document.getElementById("cartCount").textContent = totalItems;
  document.getElementById("cartList").innerHTML = cartListHTML ;
}

// Navigation Bar Shadow on Scroll
window.addEventListener("scroll", () => {
  const navHeader = document.getElementById("header");
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

  if (navHeader) {
    if (scrollTop > 50) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
    } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
    }
  }
});
//visa
// Fake payment submit (optional)
document.getElementById("paymentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Payment processed (not really 😄).");
});


// Typing Effect
const typingEffect = new Typed(".typedText", {
  strings: ["ហាងលក់សម្លៀកបំពាក់បុរស់​ និង នារី", "ហាងលក់សម្លៀកបំពាក់​ប្រពៃណី", "ហាងលក់សម្លៀកបំពាក់សម័យ"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

// Scroll Reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

// Home section animations
sr.reveal(".featured-text-card");
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

// Heading animations
sr.reveal(".top-header");
