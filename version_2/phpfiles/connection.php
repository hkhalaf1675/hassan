<?php
$host="localhost";
$user="root";
$password="";
$DB_name="protestdt";
$conn=mysqli_connect($host,$user,$password,$DB_name);
if($conn);
else echo 	   die(mysqli_connect_error());

?>