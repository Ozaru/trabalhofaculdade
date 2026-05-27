<?php

$nome = $_POST['nome'];
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];

echo "<h1>Mensagem enviada com sucesso!</h1>";

echo "Nome: " . $nome . "<br>";
echo "Email: " . $email . "<br>";
echo "Mensagem: " . $mensagem;

?>