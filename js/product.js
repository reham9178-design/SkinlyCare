function renderProductsGrid() {
  const row = document.getElementById("productsRow");
  if (!row) return;

  row.innerHTML = PRODUCTS.map((product) => {
    return `
      <div class="col-12 col-md-6 col-lg-4">
        <a href="productDetail.html?id=${product.id}" class="product-card">
          <img class="card-img" src="${product.images[0]}" alt="${product.name}" />

                    <button type="button" class="card-cart-btn" onclick="event.preventDefault(); event.stopPropagation(); addToCart('${product.id}')"><i class="fa-solid fa-bag-shopping"></i></button>
                   
                    <button type="button" class="card-wishlist-btn" onclick="event.preventDefault(); event.stopPropagation(); toggleWishlist('${product.id}', this)"><i class="${isInWishlist(product.id) ? 'fa-solid' : 'fa-regular'} fa-heart"></i></button>
                    

          <div class="card-info">
            <h3>${product.name}</h3>
            <p>${product.tagline}</p>
            <div class="price">$${product.price.toFixed(2)}</div>
          </div>
        </a>
      </div>
    `;
  }).join("");
}

document.addEventListener("DOMContentLoaded", renderProductsGrid);








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
