document.addEventListener("DOMContentLoaded", () => {

    // بيانات الـ 6 كروت بالكامل
    const blogsData = {

        "1": {
            title: "Build Simple Skincare",

            sub: "Create an effective skincare routine with a few essential steps for cleaner, healthier, and glowing skin.",

            date: "Jul 4, 2025 • 5 min read",

            img: "/assets/images/BLOG/11.jpg",

            summary1: "A consistent skincare routine doesn't have to be complicated. The key is using the right products in the correct order to keep your skin healthy and balanced. Start with a gentle cleanser to remove dirt, oil, and impurities without disrupting your skin's natural barrier. Follow with a toner or hydrating essence if needed, then apply a serum that targets your specific concerns, such as dryness, dullness, or uneven skin tone. Finish with a moisturiser to lock in hydration and keep your skin soft throughout the day.",

            summary2: "In the morning, always complete your routine with a broad-spectrum sunscreen to protect your skin from harmful UV rays and prevent premature ageing. At night, focus on cleansing thoroughly and nourishing your skin with hydrating or repairing products. Remember that consistency is more important than using many products. By following a simple daily routine and choosing products that suit your skin type, you can maintain a healthy, radiant complexion and support long-term skin health."
        },


        "2": {
            title: "Vitamin C for Healthy Skin",

            sub: "Discover how Vitamin C helps brighten your complexion, reduce dark spots, and protect your skin.",

            date: "May 3, 2026 • 6 min read",

            img: "/assets/images/BLOG/12.jpg",

            summary1: "Vitamin C is one of the most effective skincare ingredients for achieving brighter, healthier-looking skin. As a powerful antioxidant, it helps protect the skin from free radicals caused by pollution, UV exposure, and environmental stress, which can contribute to premature ageing. Regular use of a Vitamin C serum can visibly improve skin tone, fade post-acne marks, reduce pigmentation, and give the complexion a natural, radiant glow over time.",

            summary2: "For the best results, apply Vitamin C in the morning after cleansing and before moisturising. Pair it with sunscreen to enhance protection against environmental damage and maintain an even skin tone. When choosing a product, look for stable forms of Vitamin C and store it away from direct sunlight to preserve its effectiveness. Combined with a consistent skincare routine that includes cleansing, moisturising, and sun protection, Vitamin C can help your skin appear smoother, firmer, and more luminous while supporting long-term skin health."
        },


        "3": {
            title: "The Hydration Secret",

            sub: "Learn why hydration is essential for maintaining soft, smooth, and naturally glowing skin all year round.",

            date: "Apr 12, 2025 • 7 min read",

            img: "/assets/images/BLOG/13.jpg",

            summary1: "Hydrated skin is the foundation of a healthy complexion. When your skin lacks moisture, it can become dry, dull, tight, and more prone to irritation and fine lines. Keeping your skin hydrated starts with using a gentle cleanser that doesn't strip away natural oils, followed by a hydrating serum with ingredients like Hyaluronic Acid or Glycerin. Applying a rich moisturiser helps lock in moisture, strengthen the skin barrier, and keep your skin feeling soft and comfortable throughout the day.",

            summary2: "Hydration also comes from within. Drinking enough water, eating water-rich fruits and vegetables, and maintaining a healthy lifestyle all contribute to better skin health. Avoid long, hot showers and harsh skincare products that can weaken your skin's protective barrier. During colder months or in dry climates, consider using a richer moisturiser to prevent moisture loss. By combining the right skincare products with healthy daily habits, you can achieve skin that looks plump, radiant, and refreshed while reducing dryness, sensitivity, and signs of premature ageing."
        },


        "4": {
            title: "Sunscreen Essentials & Guide",

            sub: "Protect your skin daily from harmful UV rays to maintain long-term skin health and clarity.",

            date: "Jan 18, 2026 • 4 min read",

            img: "/assets/images/BLOG/14.jpg",

            summary1: "Many people believe sunscreen is only necessary during sunny weather, but harmful UV rays can affect your skin every day—even when it's cloudy or you're indoors near windows. Daily sun exposure can lead to premature ageing, dark spots, uneven skin tone, and an increased risk of skin damage. Applying a broad-spectrum SPF 30 or higher every morning helps protect your skin from both UVA and UVB rays, preserving its natural glow while reducing long-term damage.",

            summary2: "For the best results, apply sunscreen as the final step of your morning skincare routine and reapply every two hours when spending time outdoors. Choose a lightweight, non-greasy formula that suits your skin type, whether it's oily, dry, combination, or sensitive. Pairing sunscreen with a gentle cleanser, hydrating serum, and moisturiser creates a complete skincare routine that keeps your skin healthy, smooth, and protected throughout the year. Making sunscreen a daily habit is one of the simplest and most effective ways to maintain youthful, radiant skin for years to come."
        },


        "5": {
            title: "Nighttime Skincare Routine",

            sub: "Focus on deep cleansing and repair while you sleep with nourishing nighttime essentials.",

            date: "Feb 22, 2026 • 8 min read",

            img: "/assets/images/BLOG/15.jpg",

            summary1: "A well-planned skincare routine doesn't have to be complicated. The key is understanding your skin type and choosing products that address your specific needs. Whether you have dry, oily, combination, or sensitive skin, following the right steps can improve your skin's health and appearance over time. Begin with a gentle cleanser to remove dirt and excess oil, then apply a toner to balance your skin. Follow with a targeted serum containing ingredients like Vitamin C for brightness or Hyaluronic Acid for hydration. Lock in moisture with a nourishing moisturiser and finish your morning routine with a broad-spectrum SPF to protect against harmful UV rays.",

            summary2: "Consistency is more important than using dozens of products. Introduce new products gradually, avoid harsh ingredients that may irritate your skin, and give each product enough time to show results. Don't forget that healthy skin also depends on lifestyle habits such as drinking enough water, eating nutrient-rich foods, exercising regularly, and getting quality sleep. With patience and the right routine, your skin can become smoother, healthier, and naturally radiant while preventing common concerns like acne, dryness, fine lines, and uneven skin tone."
        },


        "6": {
            title: "Exfoliation Tips for Radiance",

            sub: "Gently remove dead skin cells to reveal smoother, brighter, and refreshed skin.",

            date: "Mar 10, 2026 • 5 min read",

            img: "/assets/images/BLOG/16.jpg",

            summary1: "Healthy, glowing skin isn't achieved overnight—it comes from building consistent daily habits that protect and nourish your skin. Start by cleansing your face with a gentle cleanser to remove dirt, excess oil, and impurities without stripping away natural moisture. Follow with a hydrating moisturizer to keep your skin soft, smooth, and balanced throughout the day. Never skip sunscreen, even on cloudy days, as UV rays are one of the leading causes of premature ageing, dark spots, and skin damage.",

            summary2: "In addition to a proper skincare routine, healthy lifestyle choices make a significant difference. Drink plenty of water to maintain hydration, eat a balanced diet rich in vitamins and antioxidants, and get enough sleep to support your skin's natural repair process. Avoid touching your face frequently, as this can transfer bacteria and lead to breakouts. By following these simple yet effective habits every day, you can strengthen your skin barrier, improve texture, reduce blemishes, and achieve a naturally healthy, radiant complexion that lasts."
        }

    };


    // قراءة المعامل من الرابط URL
    const urlParams = new URLSearchParams(window.location.search);

    const blogId = urlParams.get("id") || "1";


    // تفعيل المحتوى المقابل للبطاقة المحددة
    if (blogsData[blogId]) {

        document.getElementById("article-title").innerHTML =
            blogsData[blogId].title;

        document.getElementById("article-subheading").textContent =
            blogsData[blogId].sub;

        document.getElementById("article-date").textContent =
            blogsData[blogId].date;

        document.getElementById("article-img").src =
            blogsData[blogId].img;

        document.getElementById("article-summary-1").textContent =
            blogsData[blogId].summary1;

        document.getElementById("article-summary-2").textContent =
            blogsData[blogId].summary2;
    }


    // أزرار التنقل في البانر السفلي
    const shopBtn = document.querySelector(".shop-btn");

    const exploreBtn = document.querySelector(".explore-btn");


    if (shopBtn) {

        shopBtn.addEventListener("click", () => {

            window.location.href = "contact.html";

        });

    }


    if (exploreBtn) {

        exploreBtn.addEventListener("click", () => {

            window.location.href = "product.html";

        });

    }

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


