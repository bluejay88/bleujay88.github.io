<?php

require 'vendor/autoload.php'; // Include Composer's autoloader

use Dotenv\Dotenv;

// Load environment variables from .env file
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Database credentials
$servername = $_ENV['DB_SERVERNAME'];
$username = $_ENV['DB_USERNAME'];
$password = $_ENV['DB_PASSWORD'];
$dbname = $_ENV['DB_DATABASE'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$address = $_POST['address'];
$city = $_POST['city'];
$state = $_POST['state'];
$zip = (int)$_POST['zip']; // Cast to integer
$phone = (int)str_replace(['-', ' '], '', $_POST['phone']); // Remove non-numeric characters and cast to integer
$email = $_POST['email'];
$businessName = $_POST['businessName'];
$businessAddress = $_POST['businessAddress'];
$businessCity = $_POST['businessCity'];
$businessState = $_POST['businessState'];
$businessZip = (int)$_POST['businessZip']; // Cast to integer
$businessPhone = (int)str_replace(['-', ' '], '', $_POST['businessPhone']); // Remove non-numeric characters and cast to integer
$businessEmail = $_POST['businessEmail'];
$message = $_POST['message'];
$newsletter = isset($_POST['newsletter']) ? 1 : 0;

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO customer_data 
    (firstName, lastName, address, city, state, zip, phone, email, businessName, businessAddress, businessCity, businessState, businessZip, businessPhone, businessEmail, message, newsletter) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

$stmt->bind_param("sssssiisssssiissi", 
    $firstName, $lastName, $address, $city, $state, $zip, $phone, $email, $businessName, $businessAddress, $businessCity, $businessState, $businessZip, $businessPhone, $businessEmail, $message, $newsletter);




// Execute the query
if ($stmt->execute()) {
    // Redirect to the original page after successful submission
    header("Location: thanks.html");
    exit(); // Make sure to exit after redirect to stop further script execution
} else {
    echo "Error: " . $stmt->error;
}

// Close connections
$stmt->close();
$conn->close();
?>
