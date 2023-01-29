// ** addEventListener - capter un évènement "click" - coord x - coord y
// TODO 1: sur document, placer un addEventListener qui écoute le "click" et éxecute une fonction qui a unEvent en paramètre
// TODO 2: Dans cette fonction on console log unEvent 
// TODO 3: à partir du console log retrouver les propriétés de unEvent qui correspondent au coordonnées du click
// TODO 4: Tjrs dans la Fonction dans addEventListener, dans une variable monImg, créer une img html
// TODO 5: Ensuite, modifier l'attribut src de monImg (url de l'img au choix)
// TODO 6: sur monImg, modifier dans style, la position en "absolute"
// TODO 7: sur monImg, modifier dans style, le left, on assigne la coordonnées x du click
// TODO 8: sur monImg, modifier dans style, le top, on assigne la coordonnées y du click
// TODO 9: placer monImg dans la page



document.addEventListener("click", function(unEvent){
    var oldImg = document.querySelector("img");
    if (oldImg) {
      oldImg.remove();
    }
    console.log(unEvent);
    var monImg = document.createElement('img');
    monImg.src = "https://cdn.football365.fr/wp-content/uploads/se/2023/01/Zidane-1-670x370.jpg";
    monImg.style.position = "absolute";

// centrer l'image au pointer dès le premier click avec onload
    monImg.onload = function() {
        var imageWidth = monImg.naturalWidth;
        var imageHeight = monImg.naturalHeight;
// centrer l'image au pointer en récupérant les dimensions et /2       
        monImg.style.left = (unEvent.clientX - imageWidth / 2) + "px";
        monImg.style.top = (unEvent.clientY  - imageHeight / 2) + "px";
    
        document.body.appendChild(monImg);
      };
    // var imageWidth = monImg.naturalWidth;
    // var imageHeight = monImg.naturalHeight;
    // monImg.style.left = (unEvent.clientX - imageWidth / 2) + "px";
    // monImg.style.top = (unEvent.clientY - imageHeight / 2) + "px";
    // document.body.appendChild(monImg);
})