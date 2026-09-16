const savedWishlist = localStorage.getItem("wishlist");
let wishlist = savedWishlist ? JSON.parse(savedWishlist) : [];

function isInWishlist(productId) {
  return wishlist.includes(productId);
}

function toggleWishlist(productId, btn) {
  if (isInWishlist(productId)) {
    wishlist = wishlist.filter((id) => id !== productId);
  } else {
    wishlist.push(productId);
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  updateWishlistIcon(btn, productId);
  updateWishlistCount();
}

function updateWishlistIcon(btn, productId) {
  const icon = btn.querySelector("i");

  if (isInWishlist(productId)) {
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
    btn.classList.add("active");
  } else {
    icon.classList.remove("fa-solid");
    icon.classList.add("fa-regular");
    btn.classList.remove("active");
  }
}

function updateWishlistCount() {
  const badge = document.getElementById("wishlistCount");
  if (!badge) return;
  badge.textContent = wishlist.length;
}

updateWishlistCount();