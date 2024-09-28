var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var  ramdomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img") [0];

image1.setAttribute("src", ramdomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏳️ Jugador 1 gana";
}

if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Jugador 2 gana🏳️";
}

if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "🏳️  Empate  🏳️";
}