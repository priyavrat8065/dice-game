"use strict";
let scoreBoard = document.querySelector("h1");
const playBtn = document.querySelectorAll(".button")[0];
const resetBtn = document.querySelectorAll(".button")[1];
const randNumBet1And6 = () => Math.floor(Math.random() * 6) + 1;

playBtn.addEventListener("click", function () {
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
});

resetBtn.addEventListener('click', function(){
  document
    .querySelector(".img1")
    .setAttribute("src", ``);
  document
    .querySelector(".img2")
    .setAttribute("src", ``);
    scoreBoard.textContent = 'Click Play';
})
