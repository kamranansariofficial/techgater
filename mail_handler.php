<?php
	
		$name=$_POST['name'];
		$email=$_POST['email'];
		$phone=$_POST['phone'];
		$sbj=$_POST['subject'];
		$msg=$_POST['message'];
		$check=$_POST['check'];

		$to='info@techgater.com'; // Receiver Email ID, Replace with your email ID
		$subject=$sbj;
		$message="Name :".$name."\n"."Phone :".$phone."\n"."Message :"."\n".$msg;
		$headers="From: ".$email;
 
		if(mail($to, $subject, $message, $headers)){
		}
?>