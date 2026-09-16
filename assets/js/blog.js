document.addEventListener("DOMContentLoaded", () => {

    // 1. Staggered Wave Text Effect for Navigation Links
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        const text = link.textContent.trim();
        link.textContent = "";

        [...text].forEach((char, index) => {
            const span = document.createElement("span");
            span.classList.add("char");
            span.innerHTML = char === " " ? "&nbsp;" : char; 
            span.style.setProperty("--i", index);
            link.appendChild(span);
        });

        link.addEventListener("click", function () {
            navLinks.forEach(item => item.classList.remove("wave-active"));
            this.classList.add("wave-active");

            setTimeout(() => {
                this.classList.remove("wave-active");
            }, 600);
        });
    });

    // 2. Dark Mode Toggle
    const themeToggle = document.getElementById("theme-toggle");

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            
            if (document.body.classList.contains("dark-mode")) {
                themeToggle.textContent = "☀️";
            } else {
                themeToggle.textContent = "🌙";
            }
        });
    }

    // 3. Search Box Toggle
    const searchToggle = document.getElementById("searchToggle");
    const searchBox = document.getElementById("searchBox");
    const searchInput = document.getElementById("searchInput");

    if (searchToggle && searchBox) {
        searchToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            searchBox.classList.toggle("open");
            if (searchBox.classList.contains("open")) {
                setTimeout(() => searchInput.focus(), 200);
            }
        });

        document.addEventListener("click", (e) => {
            if (!searchBox.contains(e.target) && !searchToggle.contains(e.target)) {
                searchBox.classList.remove("open");
            }
        });
    }

});
// footer1,,,,,,,,,,,,,,,,,,,,,
document.addEventListener("DOMContentLoaded", () => {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(questionBtn => {
        questionBtn.addEventListener("click", () => {
            const currentItem = questionBtn.closest(".faq-item");

            // إذا كان السؤال مفتوحاً بالفعل، قم بإغلاقه
            if (currentItem.classList.contains("active")) {
                currentItem.classList.remove("active");
            } else {
                // إغلاق أي سؤال آخر مفتوح
                document.querySelectorAll(".faq-item").forEach(item => {
                    item.classList.remove("active");
                });
                
                // فتح السؤال الحالي
                currentItem.classList.add("active");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. التوجيه لأزرار قسم Glow / CTA
    const shopBtn = document.querySelector(".shop-btn");
    const exploreBtn = document.querySelector(".explore-btn");

    if (shopBtn) {
        shopBtn.addEventListener("click", (e) => {
            window.location.href = "contact.html";
        });
    }

    if (exploreBtn) {
        exploreBtn.addEventListener("click", (e) => {
            window.location.href = "product.html";
        });
    }

    // 2. التحكم في روابط الفوتر
    const footerLinks = document.querySelectorAll(".footer-links a");

    footerLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetHref = link.getAttribute("href");

            // منع السلوك الافتراضي إذا كانت الروابط فارغة أو تجريبية
            if (targetHref === "#" || targetHref === "") {
                e.preventDefault();
                console.log(`تم الضغط على رابط: ${link.textContent.trim()}`);
            }
        });
    });

});









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
