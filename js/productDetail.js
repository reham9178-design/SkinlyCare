
function getIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function initGallery(product) {
  const mainImage = document.getElementById("mainImage");
  const thumbsRow = document.getElementById("thumbsRow");

  mainImage.innerHTML = `<img src="${product.images[0]}" alt="${product.name}" />`;

  const thumbsHtml = product.images.map((img) => {
    return `
      <div class="product-thumb">
        <img src="${img}" alt="${product.name}">
      </div>
      `;}).join("");

  thumbsRow.innerHTML = thumbsHtml + thumbsHtml;
}


function renderProductInfo(product) {
  document.title = `Skinlycare | ${product.name}`;

  document.getElementById("pdPrice").textContent = `$${product.price.toFixed(2)}`;

  document.getElementById("pdTitle").textContent = product.name;

  document.getElementById("pdDescription").textContent = product.description;

  document.getElementById("pdRating").textContent =`${product.rating}/5 (${product.reviews} Reviews)`;

  document.getElementById("pdSummary").innerHTML = product.summary
    .split("\n\n")
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

    const detailsHtml = Object.entries(product.details)
    .map(([label, value]) => 
      `
        <div class="detail-row">
          <span class="label">${label}</span>
          <span class="value">${value}</span>
        </div>
      `
    )
    .join("");

  document.getElementById("productDetails").innerHTML = detailsHtml;

  document.getElementById("pdWishlistBtn").outerHTML = `
  <button type="button" id="pdWishlistBtn" class="pd-wishlist-btn" onclick="toggleWishlist('${product.id}', this)">
    <i class="${isInWishlist(product.id) ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
  </button>
`;
  
  document.querySelector(".btn-buy").onclick = () => addToCart(product.id);
}


function renderRelatedProducts(currentProduct) {
  const relatedRow = document.getElementById("relatedRow");

  const others = PRODUCTS
    .filter((p) => p.id !== currentProduct.id)
    .slice(0, 3);

  relatedRow.innerHTML = others
    .map(
      (product) => `
        <div class="col-12 col-md-6 col-lg-4">

          <a href="productDetail.html?id=${product.id}" class="product-card" >
            <img class="card-img" src="${product.images[0]}" alt="${product.name}" />

    
                      <button type="button" class="card-cart-btn" onclick="event.preventDefault(); event.stopPropagation(); addToCart('${product.id}')"><i class="fa-solid fa-bag-shopping"></i></button>
                      
                      <button type="button" class="card-wishlist-btn" onclick="event.preventDefault(); event.stopPropagation(); toggleWishlist('${product.id}', this)"><i class="${isInWishlist(product.id) ? 'fa-solid' : 'fa-regular'} fa-heart"></i></button>

            <div class="card-info">
              <h3>${product.name}</h3>
              <p>${product.tagline}</p>
              <div class="price">
                $${product.price.toFixed(2)}
              </div>
            </div>
          </a>
        </div>
      `
    )
    .join("");
}


function loadProductPage() {
  const id = getIdFromUrl();
  const product = getProductById(id) || PRODUCTS[0];

  if (!product) {
    document.querySelector(
      ".product-detail .container-narrow"
    ).innerHTML = "<p>Product not found</p>";

    return;
  }

  renderProductInfo(product);
  initGallery(product);
  renderRelatedProducts(product);
}

document.addEventListener( "DOMContentLoaded", loadProductPage);
