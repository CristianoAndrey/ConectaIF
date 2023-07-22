<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="stylesheet" href="../Style/style.css">
</head>
<body>
<?php 
    include "../ScriptsPHP/IdentificarUser.php";
    if(isset($_COOKIE['ID'])){
        $ID_User = $_COOKIE['ID'];
        $usserName = IdentificarUser($ID_User);

        echo "<p>$usserName</p>";
    }else{    
        function voltar(){
            header("Location: ../Cadastro_Login/login.php");
            exit; // Certifique-se de sair após a chamada header
        }
        voltar();
    }
?>
<main>
    <h1>OK</h1>
</main>
</body>
</html>



