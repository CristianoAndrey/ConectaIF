<?php

function IdentificarUser($ID_User){
    $ArquivoUsers = fopen("../Arquivos_json/usuarios.json" , "r");

    $definido = 0;
    $usserName = null;

    if (filesize("../Arquivos_json/usuarios.json") > 0){
        $jsonPessoas = fread($ArquivoUsers, filesize("../Arquivos_json/usuarios.json"));
        $definido = 1;
    }

    // Decodificar o JSON para um array
    $pessoas = json_decode($jsonPessoas, true);

    if ($definido == 1){
        foreach ($pessoas as $index => $pessoa) {
            $AtuID = $pessoa['ID'];
            if ($AtuID == $ID_User) {
                $usserName = $pessoa['nome'];
                $usserEmail = $pessoa['Email'];
                $x = uniqid();
            }
        }
    }
    fclose($ArquivoUsers);

    // Verifica se o usuário foi encontrado e retorna o nome ou null caso contrário
    return $usserName !== null ? $usserName : "Usuário não encontrado";
}



