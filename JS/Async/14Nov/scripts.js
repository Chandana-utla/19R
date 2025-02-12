function validateSignup() {
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;
    let error = document.getElementById("signupError");
    error.textContent = "";

    if (!email || !password) {
        error.textContent = "All fields are required.";
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        error.textContent = "Invalid email format.";
        return;
    }
    if (password.length < 6) {
        error.textContent = "Password must be at least 6 characters long.";
        return;
    }
    if (!/[A-Z]/.test(password)) {
        error.textContent = "Password must contain at least one uppercase letter.";
        return;
    }
    if (!/[a-z]/.test(password)) {
        error.textContent = "Password must contain at least one lowercase letter.";
        return;
    }
    if (!/[0-9]/.test(password)) {
        error.textContent = "Password must contain at least one digit.";
        return;
    }
    if (!/[!@#$%^&*]/.test(password)) {
        error.textContent = "Password must contain at least one special character (!@#$%^&*).";
        return;
    }
    alert("Signup successful!");
}

function validateLogin() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
    let error = document.getElementById("loginError");
    error.textContent = "";

    if (!email || !password) {
        error.textContent = "All fields are required.";
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        error.textContent = "Invalid email format.";
        return;
    }
    alert("Login successful!");
}
