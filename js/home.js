










// const container  = document.getElementById('sliderContainer');
//   const afterWrap  = document.getElementById('afterWrap');
//   const dividerLine = document.getElementById('dividerLine');
//   const handle     = document.getElementById('handle');
 
//   let isDragging = false;
 
//   // بيحول موضع الماوس/الإصبع لنسبة مئوية جوه الحاوية، وبيحدث الثلاث عناصر مع بعض
//   function updatePosition(clientX) {
//     const rect = container.getBoundingClientRect();
//     let percent = ((clientX - rect.left) / rect.width) * 100;
 
//     // منع الخروج عن حدود الصورة (0% - 100%)
//     percent = Math.max(0, Math.min(100, percent));
 
//     afterWrap.style.width   = percent + '%';
//     dividerLine.style.left  = percent + '%';
//     handle.style.left       = percent + '%';
//   }
 
//   function startDrag() {
//     isDragging = true;
//   }
 
//   function stopDrag() {
//     isDragging = false;
//   }
 
//   function onMove(e) {
//     if (!isDragging) return;
//     const clientX = e.touches ? e.touches[0].clientX : e.clientX;
//     updatePosition(clientX);
//   }
 
//   // دعم الماوس
//   handle.addEventListener('mousedown', startDrag);
//   window.addEventListener('mousemove', onMove);
//   window.addEventListener('mouseup', stopDrag);
 
//   // دعم اللمس على الموبايل
//   handle.addEventListener('touchstart', startDrag);
//   window.addEventListener('touchmove', onMove);
//   window.addEventListener('touchend', stopDrag);
 
//   // اختياري: تحريك السلايدر كمان لو الضغط كان في أي مكان في الصورة مش بس الدايرة
//   container.addEventListener('mousedown', (e) => {
//     startDrag();
//     updatePosition(e.clientX);
//   });





















document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counters h2');
    const speed = 200; // سرعة العداد

    const startCounters = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const suffix = counter.getAttribute('data-suffix') || '';
                    const count = +counter.innerText.replace(/[^0-9]/g, '');

                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc) + suffix;
                        setTimeout(updateCount, 25);
                    } else {
                        counter.innerText = target + suffix;
                    }
                };

                updateCount();
                observer.unobserve(counter); // يعمل مرة واحدة فقط عند الوصول إليه
            }
        });
    };



    const observer = new IntersectionObserver(startCounters, {
        threshold: 0.5 // يبدأ العداد عند ظهور 50% من العنصر للشاشة
    });

    counters.forEach(counter => observer.observe(counter));
});













function renderHomeProducts() {

    const row = document.getElementById("homeProductsRow");

    if (!row) return;

    const firstThreeProducts = PRODUCTS.slice(0, 3);

    row.innerHTML = firstThreeProducts.map(product => {

        return `
            <div class="col-12 col-md-6 col-lg-4">

                <a href="productDetail.html?id=${product.id}"
                   class="home-product-card">

                    <img
                        class="home-card-img"
                        src="${product.images[0]}"
                        alt="${product.name}"
                    >

                    <button
                        type="button"
                        class="home-card-cart-btn"
                        onclick="event.preventDefault(); event.stopPropagation(); addToCart('${product.id}')"
                    >
                        <i class="fa-solid fa-bag-shopping"></i>
                    </button>

                    <button
                        type="button"
                        class="home-card-wishlist-btn"
                        onclick="event.preventDefault(); event.stopPropagation(); toggleWishlist('${product.id}', this)"
                    >
                        <i class="${isInWishlist(product.id) ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                    </button>

                    <div class="home-card-info">

                        <h3>${product.name}</h3>

                        <p>${product.tagline}</p>

                        <div class="home-price">
                            $${product.price.toFixed(2)}
                        </div>

                    </div>

                </a>

            </div>
        `;

    }).join("");
}

document.addEventListener("DOMContentLoaded", renderHomeProducts);










function renderHomeBlogs() {

    const row = document.getElementById("homeBlogRow");

    if (!row) return;

    const blogs = [
        {
            title: "Build Simple Skincare",
            sub: "Create an effective skincare routine with a few essential steps for cleaner, healthier, and glowing skin.",
            date: "Jul 4, 2025 • 5 min read",
            img: "/assets/images/BLOG/11.jpg",
            id: 1
        },

        {
            title: "Vitamin C for Healthy Skin",
            sub: "Discover how Vitamin C helps brighten your complexion, reduce dark spots, and protect your skin.",
            date: "May 3, 2026 • 6 min read",
            img: "/assets/images/BLOG/12.jpg",
            id: 2
        },

        {
            title: "The Hydration Secret",
            sub: "Learn why hydration is essential for maintaining soft, smooth, and naturally glowing skin all year round.",
            date: "Apr 12, 2025 • 7 min read",
            img: "/assets/images/BLOG/13.jpg",
            id: 3
        }
    ];

    row.innerHTML = blogs.map(blog => {

        return `
            <a href="blogdatail.html?id=${blog.id}" class="home-blog-card">

                <div class="home-blog-img-wrapper">
                    <img 
                        src="${blog.img}" 
                        alt="${blog.title}"
                        class="home-blog-img"
                    >
                </div>

                <div class="home-blog-content">

                    <span class="home-blog-date">
                        ${blog.date}
                    </span>

                    <h3>${blog.title}</h3>

                    <p>${blog.sub}</p>

                   

                </div>

            </a>
        `;

    }).join("");
}

document.addEventListener("DOMContentLoaded", renderHomeBlogs);








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
