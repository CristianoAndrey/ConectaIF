<!DOCTYPE html>
<html lang="pt-Br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste form php</title>
    <link rel="stylesheet" href="../Style/style.css">
    <script src="../JavaScript/jquery.js"></script>
    <link rel="shortcut icon" href="../Imagens/Favicon/logo.jpg" type="image/jpeg">
</head>
    <body>

        <header>
            <img src="../Imagens/Logotipo/logo_150x80.jpg" id="logotipo" alt="">
            <article>
                <h1>Materiais esportivos</h1>
            </article>
            <nav id="entrar" onclick="logar()" >
                <?php
                if(isset($_COOKIE['userA_Nome'])){
                    $nomeUser = $_COOKIE['userA_Nome'];
                    $inicial = strtoupper(substr($nomeUser,0,1));
                    echo <<< LOGADO
                        <div id="UserLog">
                            $inicial
                        </div>
                        LOGADO;
                }else{    
                    function voltar(){
                        header("Location: ../Cadastro_Login/login.php");
                    }
                    voltar();
                }
                ?>
        </header>

        <main>
            <article id="itens">
                Itens disponiveis
                <hr id="L_ttl">
            </article>

            <section id="conteudo">
                <?php
                    echo <<< FORM
                        <form action="pedido.php" method="post">
                    FORM;
                ?>
                    <article class="Item" id="Bola_d_volei">    
                        <div>
                            <input class="botao_Nav" type="button" value="<" onclick="Ant()">
                        </div>
                            <aside class="Cont_Bola">
                                <h2>Bola de Volei</h2>
                                <img src="../Imagens/Produtos/Bola_volei.png" alt="Bola de volei">
                                
                                <div class="Entrada">    
                                    <label for="quant_Bv">Quantidade</label>
                                    <input type="text" maxlength="10" name="BvQtd" id="quant_Bv">
                                </div>
                            </aside>
                        <div>                            
                            <input class="botao_Nav" type="button" value=">" onclick="Prox()">
                        </div>
                    </article>

                    <article class="Item" id="Bola_d_fut">
                        <div>
                            <input class="botao_Nav" type="button" value="<" onclick="Ant()">
                        </div>

                        <aside class="Cont_Bola">
                            <h2>Bola de Futebol</h2>
                            <img src="../Imagens/Produtos/B_Futebol.png" alt="Bola de futebol">
                            
                            <div class="Entrada">
                                <label for="quant_Bf">Quantidade</label>
                                <input type="text" maxlength="10" name="BfQtd" id="quant_Bf">
                            </div>
                        </aside>

                        <div>
                            <input class="botao_Nav" type="button" value=">" onclick="Prox()">
                        </div>
                    </article>


                    <article class="Item" id="Bola_d_hand">
                        <div>
                            <input class="botao_Nav" type="button" value="<" onclick="Ant()">
                        </div>

                        <aside class="Cont_Bola">
                            <h2>Bola de Handebol</h2>
                            <img src="../Imagens/Produtos/B_Handbal.png" alt="Bola de handball">
                            
                            <div class="Entrada">
                                <label for="quant_Bh">Quantidade</label>
                                <input type="text" maxlength="10" name="BhQtd" id="quant_Bh">                
                            </div>
                        </aside>

                        <div>
                            <input class="botao_Nav" type="button" value=">" onclick="Prox()">
                        </div>
                    </article>                   

                    <aside id="enviar">
                        
                        <input class="botao" type="submit" value="Enviar pedido">
                    </aside>

                </form>
            </section> 
        </main>
        <script src="../JavaScript/script.js"></script>
    </body>
</html>