document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example credentials for validation
    const validUsername = 'admin';
    const validPassword = 'admin123';

    if (username === validUsername && password === validPassword) {
        alert('Login successful');
        // Redirect to the admin dashboard (you can change the URL)
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});
