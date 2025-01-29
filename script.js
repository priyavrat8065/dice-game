"use strict";
let scoreBoard = document.querySelector("h1");
const randNumBet1And6 = () => Math.floor(Math.random() * 6) + 1;
const diceScore1 = randNumBet1And6();
const diceScore2 = randNumBet1And6();
console.log(diceScore1, diceScore2);
document
  .querySelector(".img1")
  .setAttribute("src", `./images/dice${diceScore1}.png`);
document
  .querySelector(".img2")
  .setAttribute("src", `./images/dice${diceScore2}.png`);

if (diceScore1 > diceScore2) {
  scoreBoard.innerHTML = "Player 1 won";
} else if (diceScore1 < diceScore2) {
  scoreBoard.innerHTML = "Player 2 won";
} else {
  scoreBoard.innerHTML = "Draw";
}
