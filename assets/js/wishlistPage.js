function renderWishlistPage(itemsToRender) {
  const row = document.getElementById("wishlistRow");
  if (!row) return;

  const items = itemsToRender || wishlist;

    if (items.length === 0) {
    const isSearching = itemsToRender !== undefined;

    row.innerHTML = isSearching
      ? `
        <div class="empty-wishlist">
          <i class="fa-solid fa-magnifying-glass"></i>
          <p>No matching products found in your wishlist</p>
          <a href="product.html">Explore Products</a>
        </div>
      `
      : `
        <div class="empty-wishlist">
          <i class="fa-regular fa-heart"></i>
          <p>Your wishlist is currently empty</p>
          <a href="product.html">Explore Products</a>
        </div>
      `;

    return;
  }

  row.innerHTML = items
    .map((productId) => {
      const product = getProductById(productId);
      if (!product) return "";

      return `
        <div class="col-12 col-md-6 col-lg-4">
          <a href="productDetail.html?id=${product.id}" class="product-card">
            <img class="card-img" src="${product.images[0]}" alt="${product.name}" />

            <button type="button" class="card-cart-btn" onclick="event.preventDefault(); event.stopPropagation(); addToCart('${product.id}')"><i class="fa-solid fa-bag-shopping"></i></button>

            <button type="button" class="card-wishlist-btn active" onclick="event.preventDefault(); event.stopPropagation(); toggleWishlist('${product.id}', this); renderWishlistPage();"><i class="fa-solid fa-heart"></i></button>

            <div class="card-info">
              <h3>${product.name}</h3>
              <p>${product.tagline}</p>
              <div class="price">$${product.price.toFixed(2)}</div>
            </div>
          </a>
        </div>
      `;
    })
    .join("");
}

function filterWishlist() {
  const query = document.getElementById("wishlist-search").value.toLowerCase().trim();

  const filteredIds = wishlist.filter((productId) => {
    const product = getProductById(productId);
    if (!product) return false;
    return product.name.toLowerCase().includes(query);
  });

  renderWishlistPage(filteredIds);
}

document.addEventListener("DOMContentLoaded", () => renderWishlistPage());












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
