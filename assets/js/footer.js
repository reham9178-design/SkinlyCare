document.addEventListener("DOMContentLoaded", function () {
    // 1. تشغيل الأنميشن للسكاشن الثابتة الموجودة في الصفحة أصلاً
    initScrollReveal();

    // 2. تحميل الفوتر ديناميكياً
    const componentsContainer = document.getElementById("site-components");

    if (componentsContainer) {
        fetch("footer.html")
            .then(response => {
                if (!response.ok) throw new Error("Failed to load footer");
                return response.text();
            })
            .then(data => {
                componentsContainer.innerHTML = data;

                // تهيئة الأسئلة الشائعة
                initFAQ();

                // إعادة تشغيل الأنميشن خصيصاً للفوتر بعد ما نزل في الـ DOM
                initScrollReveal(componentsContainer);
            })
            .catch(error => console.error("Error loading components:", error));
    }
});

/* =========================
   SCROLL REVEAL FUNCTION
   (نقلناها هنا كفانكشن مستقلة في الـ global scope
   عشان تشتغل من أي مكان في الكود - قبل كده كانت
   متعرّفة جوه initFAQ بس وده كان بيسبب ReferenceError)
========================= */
function initScrollReveal(container = document) {
    const sections = container.querySelectorAll(".reveal-section");

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                obs.unobserve(entry.target); // إيقاف المراقبة بعد الظهور
            }
        });
    }, {
        threshold: 0.05, // تقليل النسبه لضمان الاستجابة السريعة فور ظهور جزء بسيط من السكشن
        rootMargin: "0px 0px -50px 0px"
    });

    sections.forEach(section => observer.observe(section));
}

/* =========================
   FAQ FUNCTION
========================= */
function initFAQ() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const button = item.querySelector(".faq-btn");

        if (!question) return;

        question.addEventListener("click", function () {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                    const otherButton = otherItem.querySelector(".faq-btn");
                    if (otherButton) otherButton.textContent = "+";
                }
            });

            item.classList.toggle("active");
            if (button) {
                button.textContent = item.classList.contains("active") ? "×" : "+";
            }
        });
    });
}