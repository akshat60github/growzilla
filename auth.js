// auth.js

// SIGNUP HANDLER
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    // Store user in localStorage
    localStorage.setItem("user", JSON.stringify({ username, password }));

    alert("Signup successful! Please login.");
    window.location.href = "login.html";
  });
}

// LOGIN HANDLER
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && username === storedUser.username && password === storedUser.password) {
      alert("Login successful!");
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid credentials. Try again.");
    }
  });
}
