const scrollTopBtn = document.querySelector(".scroll-top-btn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "flex";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", function (e) {
    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});