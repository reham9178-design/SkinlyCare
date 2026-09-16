const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Get values from inputs
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Validation
  if (email === "" && password === "") 
    { showToast("Please enter your email and password.");
         return;
         }
 if (email === "") 
    { showToast("Please enter your email."); 
        return; 
    } 
if (password === "") 
    { showToast("Please enter your password.");
         return; 
        } 
        // Check email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailPattern.test(email)) 
    { showToast("Please enter a valid email."); 
        return; 
    }
    // Get users from Local Storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    // Check if user exists
    const user = users.find(function (user) {
        return user.email === email && user.password === password;
    });

    if (user) {
        // Save logged-in user
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        showToast("Login successful!");
        // Go to home page after a short delay
        setTimeout(function () {
            window.location.href = "home.html";//هنا نحط مكان الصفحة اللي هيروح عليها لما يعمل log in
        }, 1500);

    } else {
        showToast("Email or password is incorrect.");
    }

});
/* TOAST MESSAGE */
function showToast(message) {

    const toast = document.createElement("div");
    toast.className = "toast-message";
    toast.innerHTML = `
        <i class="fa-solid fa-circle-check"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);

    setTimeout(function () {
        toast.classList.add("hide");
    }, 2000);
    setTimeout(function () {
        toast.remove();
    }, 2500);
}

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
