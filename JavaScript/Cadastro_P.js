var validacao = [0,0,0,0,0,0,0,0];



// Função que desabilita e habilita o botão de cadastro 
function desabilitaBotaoCadastrar(value) {
     var botaoCadastrar = document.getElementById("botaoCadastrar");
    if(value === true) {
        botaoCadastrar.setAttribute('disabled', 'true');
        $("#botaoCadastrar").removeClass('ativado');
        $("#botaoCadastrar").addClass('desativado');

    } else {
        $("#botaoCadastrar").addClass('ativado');
        botaoCadastrar.removeAttribute("disabled");
        $("#botaoCadastrar").removeClass('desativado');
    }
}



// Inicialmente o botão de cadastro estará desabilitado
desabilitaBotaoCadastrar(true);

// Função que verifica se as senhas informadas pelo usuário são iguais
function verifica(){
    var senha1 = document.getElementById("senha").value;
    var senha2 = document.getElementById("senhaIgual").value;
    if (senha1 != senha2){
        document.getElementById("erroSenhaRepetida").innerHTML="As senhas informadas são diferentes!";
    }else{
        validacao[1] = 1;
        validacao[5] = 1;
        validacao[4] = 1;
        frc =  validacao[0] + validacao[1] + validacao[2] + validacao[3] + validacao[4] + validacao[5] + validacao[6] + validacao[7];
        if (frc == 8){
            desabilitaBotaoCadastrar(false);
        }      
    }
}



// Função que verifica se o usuário informou seu nome
function semNome(){
    var nome = document.getElementById("nome");
    if(nome.value == "" ){
        document.getElementById("erroNome").innerHTML="Para prosseguir informe seu nome!!!";
    }else{
        document.getElementById("erroNome").innerHTML="";
        validacao[2] = 1;
        frc =  validacao[0] + validacao[1] + validacao[2] + validacao[3] + validacao[4] + validacao[5] + validacao[6] + validacao[7];
        if (frc == 8){
            desabilitaBotaoCadastrar(false);
            
        }
    }
}



// função que verifica se o campo "E-mail" foi preenchido
 function semEmail(){
    var nome = document.getElementById("E-mail");
    if(nome.value == "" ){
        document.getElementById("erroEmail").innerHTML="Para prosseguir informe seu E-mail!!!";
    }else{
        document.getElementById("erroEmail").innerHTML="";
        validacao[3] = 1;
        frc =  validacao[0] + validacao[1] + validacao[2] + validacao[3] + validacao[4] + validacao[5] + validacao[6] + validacao[7];
        if (frc == 8){
            desabilitaBotaoCadastrar(false);
        }
    }
}



// função que verifica se o campo "senha" foi preenchido
 function semSenha(){
    var nome = document.getElementById("senha");
    if(nome.value == "" ){
        document.getElementById("erroSenha").innerHTML="Insira uma senha forte!!!";
    }else{
        document.getElementById("erroSenha").innerHTML="";
        verifica();
        frc =  validacao[0] + validacao[1] + validacao[2] + validacao[3] + validacao[4] + validacao[5] + validacao[6] + validacao[7];
        if (frc == 8){
            desabilitaBotaoCadastrar(false);
        }
    }
}



// função que verifica se o campo "senha" foi preenchido
 function naoConf(){
    var nome = document.getElementById("senhaIgual");
    if(nome.value == "" ){
        document.getElementById("erroSenhaRepetida").innerHTML="Preencha esse campo!!!";
    }else{
        document.getElementById("erroSenhaRepetida").innerHTML="";
        verifica();
        frc =  validacao[0] + validacao[1] + validacao[2] + validacao[3] + validacao[4] + validacao[5] + validacao[6] + validacao[7];
        if (frc == 8){
            desabilitaBotaoCadastrar(false);
        }
    }
}



// redireciona o usuário para a página de login
function avancar(){
    window.location.href = "login.php";
}
