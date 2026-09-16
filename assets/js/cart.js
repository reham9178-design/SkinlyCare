const saved = localStorage.getItem("cart");

let cart = saved ? JSON.parse(saved) : [];


function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();

  if (typeof renderCartPage === "function") {
    renderCartPage();
  }
}


function addToCart(productId) {
  cart.push(String(productId));

  saveCart();
}


function decreaseFromCart(productId) {
  productId = String(productId);

  const index = cart.indexOf(productId);

  if (index !== -1) {
    cart.splice(index, 1);

    saveCart();
  }
}


function removeAllFromCart(productId) {
  productId = String(productId);

  cart = cart.filter((id) => id !== productId);

  saveCart();
}


function updateCartCount() {
  const badge = document.getElementById("cartCount");

  if (!badge) return;

  badge.textContent = cart.length;
}


updateCartCount();



