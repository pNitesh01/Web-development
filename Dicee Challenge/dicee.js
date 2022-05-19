var firstNum = Math.floor(Math.random() * 6) + 1;
var secondNum = Math.floor(Math.random() * 6) + 1;

var firstImage = document.querySelector(".img1");
var secondImage = document.querySelector(".img2");
var winnerDisplay = document.querySelector("h1");

var winMessage;

if(firstNum === secondNum) {
    winMessage = "Draw!";
} else if(firstNum > secondNum) {
    winMessage = "🚩Player 1 Wins!"
} else {
    winMessage = "Player 2 Wins!🚩"
}

winnerDisplay.innerHTML = winMessage;

firstImage.src = "images/dice" + firstNum + ".png";
secondImage.src = "images/dice" + secondNum + ".png";

