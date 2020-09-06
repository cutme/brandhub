<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';

$mail = new PHPMailer(true);

$type = $_POST['type'];
$body = '';

if (!in_array($type, ['premiere', 'testdrive'])) {
    exit;
}

if ($type === 'premiere') {
    $body .= 'Typ formularza: premiera online'.PHP_EOL;
}

if ($type === 'testdrive') {
    $body .= 'Typ formularza: jazda próbna'.PHP_EOL;
}

$inputs = [
    'username' => 'Imię i nazwisko: ',
    'phone' => 'Telefon: ',
    'email' => 'E-mail: '
];

foreach($inputs as $k => $v) {
    $label = $type.'_'.$k;
    if (isset($_POST[$label])) {
        $body .= $v.htmlspecialchars(stripslashes(trim($_POST[$label]))).PHP_EOL;
    }
}

try {
    //Server settings
//    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->CharSet = 'UTF-8';

    $mail->Host = 'tbcc.home.pl';
    $mail->Username = 'internetowysalontoyota@toyotabielany.pl';
    $mail->Password = '';
    $mail->Mailer = "smtp";    //do wysłania zostanie użyty serwer SMTP
    $mail->SMTPAuth = true;    //włączenie autoryzacji do serwera SMTP
    $mail->Port = 587;
    $mail->From = 'internetowysalontoyota@toyotabielany.pl';

    //Recipients
    $mail->setFrom('internetowysalontoyota@toyotabielany.pl', 'Internetowy Salon Toyoty');
    $mail->addAddress('lead@toyotabielany.pl' );     // Add a recipient

    // Content
    $mail->isHTML(false);                                  // Set email format to HTML
    $mail->ContentType = 'text/plain';
    $mail->Subject = 'Internetowy Salon Toyota - lead';
    $mail->Body    = $body;

    $mail->send();

    if ($type === 'premiere') {
        echo 'Cieszymy się, że chcesz wziąć udział w wyjątkowej premierze online nowej Toyoty Yaris. Na adres e-mail podany w formularzu  otrzymasz link do pokazu! <br>Do zobaczenia 24 sierpnia o godzinie 20:00.';
    }

    if ($type === 'testdrive') {
        echo 'Przetestowanie nowej Toyoty Yaris to doskonała decyzja! Nasz doradca skontaktuje się z Tobą w celu omówienia szczegółów i terminu jazdy testowej.';
    }

} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
