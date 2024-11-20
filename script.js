// Open modal for login or signup
function openModal(formType) {
    const modal = document.getElementById('modal');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    modal.style.display = 'block';
    if (formType === 'login') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}

// Close modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Toggle between login and signup forms
function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}

// Handle login
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email && password) {
        alert('Logged in successfully!');
        closeModal(); // Close modal after successful login
    } else {
        alert('Please fill in all fields.');
    }
}

// Handle signup
function signup() {
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password'). value;

    if (password === confirmPassword) {
        alert('Account created successfully!');
        closeModal(); // Close modal after successful signup
    } else {
        alert('Passwords do not match.');
    }
}

// Canvas for Background Animation (example using bubbles)
const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const bubbles = [];

class Bubble {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 50;
        this.radius = Math.random() * 10 + 2;
        this.speed = Math.random() * 2 + 0.5;
    }

    update() {
        this.y -= this.speed;
        if (this.y < -this.radius) {
            this.y = canvas.height + this.radius;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
    }
}

for (let i = 0; i < 200; i++) {
    bubbles.push(new Bubble());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let bubble of bubbles) {
        bubble.update();
        bubble.draw();
    }
    requestAnimationFrame(animate);
}

animate();
