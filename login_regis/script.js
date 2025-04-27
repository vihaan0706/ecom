// JavaScript to toggle forms
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

document.getElementById('show-register').addEventListener('click', function(e) {
    e.preventDefault();
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function(e) {
    e.preventDefault();
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
});

// Handle login form submission
loginForm.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page reload
    alert('Login Successful!');
    // You can redirect to another page here if you want
    // window.location.href = "home.html";
});

// Handle register form submission
registerForm.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page reload
    alert('Registration Successful!');
    // After registration, you can redirect or reset forms
});
