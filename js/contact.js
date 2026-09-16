
      document.addEventListener("DOMContentLoaded", () => {
        const themeToggleBtn = document.getElementById("theme-toggle");

        if (themeToggleBtn) {
          themeToggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            themeToggleBtn.textContent = isDark ? "☀️" : "🌙";
          });
        }

        /* Search Box Toggle */
        const searchToggleBtn = document.getElementById("searchToggle");
        const searchBox = document.getElementById("searchBox");

        if (searchToggleBtn && searchBox) {
          searchToggleBtn.addEventListener("click", () => {
            searchBox.classList.toggle("open");
          });
        }

        /* No Leading Spaces Logic */
        const formInputs = document.querySelectorAll(
          "#contactForm input, #contactForm textarea",
        );

        formInputs.forEach((input) => {
          input.addEventListener("keydown", (e) => {
            if (e.key === " " && input.selectionStart === 0) {
              e.preventDefault();
            }
          });

          input.addEventListener("input", () => {
            if (input.value.startsWith(" ")) {
              input.value = input.value.trimStart();
            }
          });
        });

        /* Contact Form Validation */
        const contactForm = document.getElementById("contactForm");
        const emailInput = document.getElementById("contactEmail");

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (contactForm && emailInput) {
          contactForm.addEventListener("submit", (e) => {
            const emailValue = emailInput.value.trim();

            if (!emailRegex.test(emailValue)) {
              e.preventDefault();
              alert(
                "Please enter a valid email address (e.g. name@domain.com)",
              );
              emailInput.focus();
              emailInput.style.borderColor = "red";
            } else {
              emailInput.style.borderColor = "";
              alert("Thank you! Your message has been sent successfully.");
            }
          });

          emailInput.addEventListener("input", () => {
            if (emailRegex.test(emailInput.value.trim())) {
              emailInput.style.borderColor = "";
            }
          });
        }

        /* FAQ Accordion Toggle */
        const faqQuestions = document.querySelectorAll(".faq-question");

        faqQuestions.forEach((btn) => {
          btn.addEventListener("click", () => {
            const currentItem = btn.parentElement;
            const isActive = currentItem.classList.contains("active");

            document.querySelectorAll(".faq-item").forEach((item) => {
              item.classList.remove("active");
            });

            if (!isActive) {
              currentItem.classList.add("active");
            }
          });
        });
      });

      const sections = document.querySelectorAll(".reveal-section");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            }
          });
        },
        {
          threshold: 0.2,
        },
      );

      sections.forEach((section) => observer.observe(section));
