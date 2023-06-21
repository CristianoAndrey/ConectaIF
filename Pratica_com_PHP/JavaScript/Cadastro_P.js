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


function validaC() {
    var cpf = document.getElementById("cpf").value;
    var cpfValido = 0;

    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        cpfValido = -1;
    }

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.charAt(9))) {
        cpfValido = -1;
    }

    soma = 0;

    for (let i = 0; i <= 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.charAt(10))) {
        cpfValido = -1;
    }


    if (cpfValido == 0){
        document.getElementById("erroCPF").innerHTML="";
        validacao[6] = 1;
        frc =  validacao[0] + validacao[1] + validacao[2] + validacao[3] + validacao[4] + validacao[5] + validacao[6] + validacao[7];
    
        if (frc == 8){
            desabilitaBotaoCadastrar(false);
            
        }
    }else{
        document.getElementById("erroCPF").innerHTML="Para prosseguir informe um CPF válido! Não informe pontos ou traços";
    }
}


function validaIdade() {
    var inputNascimento = document.getElementById("nascimento");
    var erroIdade = document.getElementById("erroIdade");
    let dataAtual = new Date();
    let dataNascimento = new Date(inputNascimento.value);
    let dataAniversario18 = new Date(dataNascimento.getUTCFullYear() + 18, dataNascimento.getUTCMonth() && dataNascimento.getUTCDate());
    
    // Se o usuário tem mais de 18 anos, valida a etapa e habilita o botão de cadastro se todas as etapas estiverem validadas
    if(dataAtual >= dataAniversario18) {
      erroIdade.textContent = " "
      validacao[0] = 1;
        frc =  validacao[0] + validacao[1] + validacao[2] + validacao[3] + validacao[4] + validacao[5] + validacao[6] + validacao[7];
        if (frc == 8){
            desabilitaBotaoCadastrar(false);
        }
    } else {
        erroIdade.textContent = "Permitido apenas para maiores de 18"
    }
}



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

function semEndereco(){
    var endereco = document.getElementById("endereco");
    if(endereco.value == ""){
        document.getElementById("erroEndereco").innerHTML="Para prosseguir informe seu endereço!!!";
    }else{
        document.getElementById("erroEndereco").innerHTML="";
        validacao[7] = 1;
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
