function renderCheckoutSummary() {
  const container = document.getElementById("checkoutItems");
  const totalBox = document.getElementById("checkoutTotal");
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    totalBox.textContent = "$0.00";
    disableCheckoutForm();
    return;
  }

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
      <div class="checkout-item">
        <img src="${product.images[0]}" alt="${product.name}" />
        <div class="checkout-item-info">
          <span>${product.name}</span>
          <span>Qty: ${quantity}</span>
        </div>
        <span class="checkout-item-price">$${(product.price * quantity).toFixed(2)}</span>
      </div>
    `;
  });

  container.innerHTML = html;
  totalBox.textContent = "$" + total.toFixed(2);
}

function disableCheckoutForm() {
  const form = document.getElementById("checkoutForm");
  if (!form) return;
  form.querySelector("button[type=submit]").disabled = true;
}

function validateCheckoutForm() {
  let isValid = true;

  const nameInput = document.getElementById("fullName");
  const nameValue = nameInput.value.trim();
  const nameRegex = /^[A-Za-z\s]{3,}$/;

  if (!nameRegex.test(nameValue)) {
    showError("fullNameError", "Please enter a valid name (letters only, at least 3 characters)");
    isValid = false;
  } else {
    showError("fullNameError", "");
  }

  const addressInput = document.getElementById("address");
  const addressValue = addressInput.value.trim();

  if (addressValue.length < 5) {
    showError("addressError", "Please enter a valid address (at least 5 characters)");
    isValid = false;
  } else {
    showError("addressError", "");
  }

  const cityInput = document.getElementById("city");
  const cityValue = cityInput.value.trim();
  const cityRegex = /^[A-Za-z\s]{2,}$/;

  if (!cityRegex.test(cityValue)) {
    showError("cityError", "Please enter a valid city name");
    isValid = false;
  } else {
    showError("cityError", "");
  }

  const phoneInput = document.getElementById("phone");
  const phoneValue = phoneInput.value.trim();
  const phoneRegex = /^(01[0125][0-9]{8}|\+201[0125][0-9]{8})$/;

  if (!phoneRegex.test(phoneValue)) {
    showError("phoneError", "Please enter a valid phone number");
    isValid = false;
  } else {
    showError("phoneError", "");
  }

  return isValid;
}

function showError(elementId, message) {
  const errorBox = document.getElementById(elementId);
  if (!errorBox) return;

  errorBox.textContent = message;

  const input = errorBox.previousElementSibling;
  if (message) {
    input.classList.add("input-error");
  } else {
    input.classList.remove("input-error");
  }
}

function placeOrder(event) {
  event.preventDefault();

  const isValid = validateCheckoutForm();
  if (!isValid) return;

  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();

  document.getElementById("checkoutForm").style.display = "none";
  document.getElementById("orderSuccess").style.display = "block";
}

document.addEventListener("DOMContentLoaded", renderCheckoutSummary);