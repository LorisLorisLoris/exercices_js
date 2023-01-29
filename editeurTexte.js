// ** mini éditeur de texte - addEventListener - keyup - innerHTML
// TODO 1: récupérer le textarea dans une variable monTxt
// TODO 2: récupérer la div dans une variable rendu
// TODO 3-1: sur monTxt on place un addEventListener qui surveille le clavier et qui exécute une fonction
// TODO 3-2: Dans cette fonction, au innerHTML de rendu on assigne la VALEUR contenue dans monTxt


var monTxt = document.querySelector("textarea");
var rendu = document.querySelector("div");

monTxt.addEventListener("keyup", function(){
    rendu.innerHTML = monTxt.value;
})