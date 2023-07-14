<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="../Style/style_login.css">
    <script src="../JavaScript/jquery.js"></script>
</head>
<body>
    <img src="../Imagens/img/logo.png" alt="logo">
    <form action="../ScriptsPHP/validarLogin.php" method="post">

        <fieldset>
        <h1>Conecta IFBA</h1>

        <h2>Login</h2>

        <label for="email">Email</label> 
        <input type="email" name="Email" id="email" placeholder="Email@exemplo.com"  required size="30" onclick="ocutar()">

        <label for="senha">Senha</label> 
        <input type="password" name="Senha" id="senha" placeholder="12345678" required onclick="ocutar()">
        <?php
            if (isset($_GET['erro'])){
                echo '<samp class="erro"> Usuário e ou senha inválidos </samp>';
                }
        ?>
        <input type="submit" value="Logar">

        <p>Já possui uma conta? <a href="cadastro.php">cadastro</a></p>
        </fieldset>
    </form>
    <script>
        function ocutar(){
            $(".erro").hide();
        }
    </script>
</body>
</html>