<?php
	$con = mysqli_connect("localhost", "root", "", "midefolio");
	if (mysqli_connect_errno()){
	 	echo "I can't connect to Mysql" . mysqli_connect_error();
	 } 
?>