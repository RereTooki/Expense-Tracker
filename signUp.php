<?php include('server.php') ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Expense Tracker</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="introText">Expense Tracker</div>
    <div class="login-container">
        <h2 class="center-align font-lg">Sign Up</h2>
        <form action="connect.php" method="post" id="signUpForm" onsubmit="validateSignUp(event)">
            <div class="flex">
                <label for="firstname">Firstname:</label>
                <input type="text" id="firstname" name="firstname" required>
            </div>
            <div class="flex">
                <label for="lastname">Lastname:</label>
                <input type="text" id="lastname" name="lastname" required>
            </div>
            <div class="flex">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="flex">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="flex">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <div class="flex">
                <label for="cpassword">Confirm Password:</label>
                <input type="password" id="cpassword" name="cpassword"  required>
            </div>
            <button type="submit" class="btnLgn">Sign Up</button>
        </form>
        <button type="submit" class="btnSgnUp" onclick="goToLogIn()">Already signed up? Login</button>
    </div>

    <script src="script2.js"></script>
</body>
</html>