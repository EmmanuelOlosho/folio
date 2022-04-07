<?php 
	include 'db.php';
	if ($_POST['msm']) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];
		$trn_date = date("Y-m-d H:i:s");
		echo "$name $email $message $trn_date";
		$query = mysqli_query($con, "INSERT into dashboard(name, email, message, trn_date) VALUES('$name', '$email', '$message', '$trn_date' )") or die(mysqli_error($con));
	}
?>