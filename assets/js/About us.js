document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1 
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const revealItems = document.querySelectorAll('.reveal-item');
  revealItems.forEach(item => {
    observer.observe(item);
  });
});





