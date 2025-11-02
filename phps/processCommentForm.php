<?php

//check if anything was submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    //collect form data
    $username = $_POST['username'];
    $password = $_POST['password'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $comment = $_POST['comment'];

    //display the collected data
    echo "Username: " . htmlspecialchars($username) . "<br>";
    echo "Password: " . htmlspecialchars($password) . "<br>";
    echo "Name: " . htmlspecialchars($name) . "<br>";
    echo "Phone: " . htmlspecialchars($phone) . "<br>";
    echo "Email: " . htmlspecialchars($email) . "<br>";
    echo "Comment: " . nl2br(htmlspecialchars($comment)) . "<br>";

} else {
    echo "No data submitted.";
}
?>