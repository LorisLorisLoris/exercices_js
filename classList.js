// ** addEventListener - classList.add() - classList.remove() - classList.toggle()
// En CSS on crée une classe maCouleur (vous modifiez ce que vous voulez)
// TODO 1: récupérer le titre dans une variable leTitre
// TODO 2: récupérer tous les liens dans une variable lesLiens
// TODO 3-1: Sur le 1er lien placer un addEventListener qui écoute le "click" et éxecute une fonction
// TODO 3-2: Dans cette fonction on ajoute la classe "maCouleur" sur titre
// TODO 4-1: Sur le 2e lien placer un addEventListener qui écoute le "click" et éxecute une fonction
// TODO 4-2: Dans cette fonction on supprime la classe "maCouleur" sur titre
// TODO 4-1: Sur le 3e lien placer un addEventListener qui écoute le "click" et éxecute une fonction
// TODO 4-2: Dans cette fonction on toggle la classe "maCouleur" sur titre

var leTitre = document.querySelector('#monTitre');
var lesLiens = document.querySelectorAll("a");

lesLiens[0].addEventListener("click", function(){
    leTitre.classList.add("maCouleur");
})

lesLiens[1].addEventListener("click", function(){
    leTitre.classList.remove("maCouleur");
})

lesLiens[2].addEventListener("click", function(){
    leTitre.classList.toggle("maCouleur");
})

