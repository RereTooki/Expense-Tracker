function validateSignUp(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const Cpassword = document.getElementById('Cpassword').value;

    if (username.trim() !== '' && email.trim() !== '' && password.trim() !== '' && Cpassword.trim() !== '') {
        // Redirect to the main expense tracker page or perform any other action
        window.location.href = "expenseTracker.html";
    } else {
        alert('Please enter both username and password.');
    }
}


function goToLogIn() {
    window.location.href = "index.html";
}