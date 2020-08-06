<?php
$to = "anuragxprime@gmail.com";
$sub = "Test Mail";
$msg = "Hi bro";

$headers .= 'From: anuragguptadps@gmail.com' . "\r\n";

mail($to, $sub, $msg, $headers);
?>