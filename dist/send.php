<?php

if(empty($_POST['email'])) {
	die('Error: Missing variables');
}

$email		= $_POST['email'];
$tel		= $_POST['tel'];
$name		= $_POST['name'];
$www.   	= $_POST['www'];

$to = 'info@cutme.pl';
$subject = 'Post ze strony';

$headers = 'From: '.$email."\r\n" .
	'Reply-To: '.$email."\r\n" .
	'X-Mailer: PHP/' . phpversion();
$subject = $subject;
$body.='Imię i nazwisko: '.$name."\n";
$body.='Adres e-mail: '.$email."\n";
$body.='Telefon: '.$tel."\n";
$body.='Adres strony lub nazwa firmy: '.$www."\n";

if(mail($to, $subject, $body, $headers)) {
	die('Mail sent');
} else {
	die('Error: Mail failed');
}

?>
