<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../Style/style.css">
    <script src="../JavaScript/jquery.js"></script>
</head>
<body>

    <?php
      if(isset($_GET['erro'])){
        echo "<script>alert('O E-mail informado já está em uso');</script>";
     
      }
    
    ?>

    <img src="../Imagens/img/logo.png" alt="logo">
        <form action="../ScriptsPHP/adicionarUser.php" method="get">

            <fieldset>
            <h1>Conecta IFBA</h1>

            <h2>Cadastro</h2>

            <label for="nome">Seu nome</label>
            <input type="text" name="nome" id="nome" required onblur="semNome()" minlength="3" maxlength="30" placeholder="Nome">
            <span id="erroNome" class="erro"></span>

            <label for="email">Seu email</label>
            <input type="email" name="email" id="email" required onblur="semEmail()" placeholder="aluno@ifba.edu.br" >
            <span id="erroEmail" class="erro"></span>

            <label for="senha">Sua senha</label>
            <input type="password" name="senha" id="senha" maxlength="12" minlength="4" required onkeyup="semSenha()"  onblur="semSenha()" placeholder='12345678'>
            <span id="erroSenha" class="erro"></span>


            <label for="senhaIgual">Confirme a senha</label>
            <input type="password" name="senhaIgual" id="confirme" maxlength="12" minlength="4" onkeyup="naoConf()" onblur="naoConf()" placeholder='12345678'>
            <span id="erroSenhaRepetida" class="erro"></span>

            <input type="submit" value="Cadastrar">

            <p>Já possui uma conta? <a href="login.php">Login</a></p>
            </fieldset>
        </form>
</body>
  <script src="../JavaScript/Cadastro_P.js"></script>
</html>