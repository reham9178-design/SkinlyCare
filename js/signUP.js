// Get users from Local Storage
let users = JSON.parse(localStorage.getItem("users")) || [];
// If there are no users, add the first 5 users
if (users.length === 0) {
    users = [
        {
            name: "Mariam Essa",
            email: "at01015261261@gmail.com",
            password: "12345678910"
        },
        {
            name: "Hanen Wael",
            email: "Hanen@gmail.com",
            password: "12345"
        },
        {
            name: "Amira Hendawy",
            email: "amira@gmail.com",
            password: "A12345@"
        },
        {
            name: "Reham Hamada",
            email: "reham9178@gmail.com",
            password: "r@3456"
        },
        {
            name: "Jana Kaled",
            email: "Jana@gmail.com",
            password: "JK1124"
        }
    ];
    localStorage.setItem("users", JSON.stringify(users));
}
// Sign Up
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let terms = document.getElementById("terms").checked;

   // Validation
   // Check Name 
   if (name === "") {
     showToast("Please enter your name.");
      return; 
    }
    // Check Email
    if (email === "") { 
    showToast("Please enter your email."); 
    return; 
    
}
   // Check Email Format
   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
   if (!emailPattern.test(email)) { 
    showToast("Please enter a valid email."); 
    return; 
}
// Check Password
if (password === "") { 
    showToast("Please enter your password."); 
    return; 
}
// Check Confirm Password
if (confirmPassword === "") { 
    showToast("Please confirm your password."); 
    return; 
}
    // Check Password
    if (password !== confirmPassword) {
        showToast("Passwords do not match!");
        return;
    }

   // Check Terms
   if (!terms) { 
    showToast("Please agree to the Terms & Conditions."); 
    return; 
}
    // Check if email already exists
    let existingUser = users.find(function(user) {
        return user.email === email;

    });
    if (existingUser) {
        showToast("This email is already registered!");
        return;
    }
    // Create new user
    let newUser = {
        name: name,
        email: email,
        password: password

    };
    // Add new user
    users.push(newUser);
    // Save users in Local Storage
    localStorage.setItem("users", JSON.stringify(users));
    showToast("Sign Up successful!");
    // Clear form
    document.getElementById("signupForm").reset();
});

// Toast Message
function showToast(message) { 
    const toast = document.createElement("div"); 
    toast.className = "toast-message"; 
    toast.innerHTML = ` <i class="fa-solid fa-circle-check"></i> <span>${message}</span> `; 
    document.body.appendChild(toast); 
    setTimeout(function() { 
        toast.classList.add("hide"); 
    }, 2000); 
    setTimeout(function() { 
        toast.remove(); }, 2500); 
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
