// ** requestAnimationFrame() - function - offSet / client Height width - left - top
// TODO 1: récupérer le titre h1 dans une variable elTitro
// TODO 2: récupérer la div dans une variable leCadre
// TODO 3: Stocker la propriété clientHeight de leCadre dans une variable hauteurCadre
// TODO 4: Stocker la propriété clientWidth de leCadre dans une variable largeurCadre
// TODO 5: modifier dans le style de elTitro la position en "relative"
// TODO 6: créer une variable positionTop et une variable positionLeft à 0
// TODO 7: créer une variable vitesseVerticale et une variable vitesseHorizontale à -2
// TODO 8: créer une fonction monAnim()
// TODO 8-2: Dans monAnim(), SI positionTop égal 0 alors on multiplie vitesseVerticale par elle même -1

// TODO 8-3: SINON SI positionTop égal hauteurCadre moins le offSetHeight de elTitro alors on multiplie vitesseVerticale par elle même -1

// TODO 8-4: SI positionLeft égal 0 alors on multiplie vitesseHorizontale par elle même -1

// TODO 8-5: SINON SI positionLeft égal largeurCadre moins le offSetWidth de elTitro alors on multiplie vitesseHorizontale par elle même -1

// TODO 9: Ensuite dans positionTop on cumule la vitesseVerticale

// TODO 10: Dans positionLeft on cumule la vitesseHorizontale

// TODO 11: Dans le style de elTitro on assigne à top, la positionTop en "px"

// TODO 12: Dans le style de elTitro on assigne à left, la positionLeft en "px"

// TODO 13: on appelle la fonction requestAnimationFrame() en lui passant en param monAnim
// TODO 14: en dehors de la fonction monAnim(), on appelle la fonction requestAnimationFrame() en lui passant en param monAnim pour créer une boucle infinie


var elTitro = document.querySelector("h1");
var leCadre = document.querySelector("div");
var hauteurCadre = leCadre.clientHeight;
var largeurCadre = leCadre.clientWidth;

elTitro.style.position="relative";

var positionTop = 0;
var positionLeft = 0;
var vitesseVerticale = -2;
var vitesseHorizontale = -2;

function monAnim(){
    if (positionTop === 0){
        vitesseVerticale *= -1;
    } else if (positionTop === hauteurCadre - elTitro.offsetHeight){
        vitesseVerticale *= -1;
    }
    
    if (positionLeft === 0){
        vitesseHorizontale *= -1;
    } else if (positionLeft === largeurCadre - elTitro.offsetWidth){
        vitesseHorizontale *= -1;
    }

    positionTop += vitesseVerticale;
    positionLeft += vitesseHorizontale;
    elTitro.style.top = positionTop + "px";
    elTitro.style.left = positionLeft + "px";
    requestAnimationFrame(monAnim);
}

requestAnimationFrame(monAnim);

