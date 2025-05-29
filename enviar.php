<?php
// Mostrar errores PHP (Desactivar en producción)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Incluir la libreria PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Inicio
$mail = new PHPMailer(true);


$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

try {
    // Configuracion SMTP
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                         // Mostrar salida (Desactivar en producción)
    $mail->isSMTP();                                               // Activar envio SMTP
    $mail->Host  = 'smtp.gmail.com';                     // Servidor SMTP
    $mail->SMTPAuth  = true;                                       // Identificacion SMTP
    $mail->Username  = 'noreplycomirna@gmail.com';                  // Usuario SMTP
    $mail->Password  = 'xofg haur logx oeob';	          // Contraseña SMTP
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port  = 587;
    $mail->CharSet = 'UTF-8';
    
    $mail->setFrom('noreply@comirna.com.ar', 'Minera Comirna');                // Remitente del correo
  
    // Destinatarios
    $mail->addAddress('comercial@comirna.com.ar', 'Comercial Cormina');  // Email y nombre del destinatario

    // Contenido del correo
    $mail->isHTML(true);
    $mail->Subject = $nombre.' '.$email. '--' .'Mensaje recibido desde WWW.COMIRNA.COM.AR';
    $mail->Body  = 'Cuerpo del mensaje :<br>'.$mensaje;
   // $mail->AltBody = $mensaje;
    $mail->send();
    echo 'El mensaje se ha enviado';
    header("Location: https://comirna.tycserviciosdigitales.com.ar?status=ok");
    die();
} catch (Exception $e) {
    echo "El mensaje no se ha enviado. Mailer Error: {$mail->ErrorInfo}";
   
}

?>