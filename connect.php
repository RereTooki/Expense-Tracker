<?php
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $cpassword = $_POST['cpassword'];

    //Database Connection
    $conn = new mysqli('localhost', 'root', '', 'logindb');
    if($conn->connect_error){
        die('Connection Failed: '.$conn->connect_error);
    } else{
        $stmt = $conn->prepare("INSERT INTO `login` (`firstname`, `lastname`, `username`, `email`, `password`, `cpassword`) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssss", $firstname, $lastname, $username, $email, $password, $cpassword);
        $stmt->execute();
        echo "registration succesfull";
        $stmt->close();
        $conn->close();
    }

?> 