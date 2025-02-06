<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "printing_app";
$port="8080";

$conn = new mysqli($host, $user, $pass, $db,$port);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>