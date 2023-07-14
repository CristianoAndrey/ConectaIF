var VisAtu = 0;

$(".Item").hide();
$("#Bola_d_volei").show();

function Mostra_item(item){
    $(".Item").each(function(indexInArray) { 
  
        if(item == indexInArray){
            $(".Item:eq("+indexInArray+")").show();
        } else {
            $(".Item:eq("+indexInArray+")").hide();
            
        }
        
    });
}

function Prox(){   

    if ((VisAtu + 1) == 3){
        VisAtu = 0;
    } else{
        VisAtu ++;
    }

    Mostra_item(VisAtu);
}
    
function Ant(){
    if ((VisAtu - 1) < 0){
        VisAtu = 2;
    } else {
        VisAtu --;
    }

    Mostra_item(VisAtu);
}

function  logar(){
    window.location.href = "../Cadastro_Login/login.php";
}