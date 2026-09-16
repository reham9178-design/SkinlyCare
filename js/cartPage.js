function renderCartPage() {
  const container = document.getElementById("cartItems");
  const totalBox = document.getElementById("cartTotal");
  const summary = document.getElementById("cartSummary");

  if (!container || !totalBox || !summary) return;

  const quantities = {};

  cart.forEach((id) => {
    quantities[id] = (quantities[id] || 0) + 1;
  });

  let html = "";
  let total = 0;

  Object.keys(quantities).forEach((productId) => {
    const product = getProductById(productId);

    if (!product) return;

    const quantity = quantities[productId];

    total += product.price * quantity;

    html += `
      <div class="cart-item">
        <img src="${product.images[0]}" alt="${product.name}" />

        <span>${product.name}</span>

        <span>$${product.price.toFixed(2)}</span>

        <div class="qty-control">
          <button onclick="decreaseFromCart('${productId}')"><i class="fa-solid fa-minus"></i></button>
          <span>${quantity}</span>
          <button onclick="addToCart('${productId}')"><i class="fa-solid fa-plus"></i></button>
        </div>

        <button onclick="removeAllFromCart('${productId}')">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    `;
  });

  if (html === "") {
    container.innerHTML = `
      <div class="empty-cart">
        <img src="assets/images/emptycart.jpg" alt="Empty cart">

        <p>Your cart is currently empty</p>

        <p>Looking for something to add to your cart?</p>

        <a href="product.html">Explore Products</a>
      </div>
    `;

    summary.style.display = "none";

  } else {
    container.innerHTML = html;

    summary.style.display = "block";
    totalBox.textContent = "$" + total.toFixed(2);
  }
}

document.addEventListener("DOMContentLoaded", renderCartPage);






const sections = document.querySelectorAll(".reveal-section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => observer.observe(section));
