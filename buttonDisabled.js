// ** addEventListener - "keyup" - disabled - true - false - value - length
// TODO 1: récupérer le textarea dans une variable txt
// TODO 2: récupérer le button dans une variable btn
// TODO 3-1: Sur txt placer un addEventListener qui écoute les touches clavier et éxecute une fonction
// TODO 3-2: Dans cette fonction, si ce qu'on tape dans l'input dépasse 5 caractères alors on désactive le button


var txt = document.querySelector("textarea");
var btn = document.querySelector("button");

// txt.addEventListener("keyup", txtlength);

// function txtlength(){
//     if (txt.value.length > 5) {
//         btn.disabled = true;
//     } else {
//         btn.disabled = false;
//     }
// } 


txt.addEventListener("keyup", function(){
    if (txt.value.length > 5) {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
})





