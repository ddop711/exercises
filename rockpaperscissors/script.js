"use strict";
let computerensValg;
let brugerensValg;

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

const loseText = document.querySelector("#lose");
const winText = document.querySelector("#win");
const drawText = document.querySelector("#draw");

rockBtn.addEventListener("click", rockClicked);
function rockClicked() {
  //   console.log("ROCK CLICKED");
  brugerensValg = "rock";
  træfferValg();
}

paperBtn.addEventListener("click", paperClicked);
function paperClicked() {
  //   console.log("PAPER CLICKED");
  brugerensValg = "paper";
  træfferValg();
}
scissorsBtn.addEventListener("click", scissorsClicked);
function scissorsClicked() {
  //   console.log("SCISSOR CLICKED");
  brugerensValg = "scissors";
  træfferValg();
}

function træfferValg() {
  skjulResultat();

  const muligheder = ["rock", "paper", "scissors"];
  const tilfaeldigtTal = Math.floor(Math.random() * 3);
  computerensValg = muligheder[tilfaeldigtTal];
  nedtaelling();
}

function nedtaelling() {
  player1.classList.add("shake");
  player2.classList.add("shake");
  player1.addEventListener("animationend", visValg);
}

function visValg() {
  player1.classList.remove("shake", "rock", "paper", "scissors");
  player1.classList.add(brugerensValg);
  player2.classList.remove("shake", "rock", "paper", "scissors");
  player2.classList.add(computerensValg);
  afgoerResultat();
}

function afgoerResultat() {
  if (brugerensValg === computerensValg) {
    drawText.classList.remove("hidden");
  } else if ((brugerensValg === "rock" && computerensValg === "scissors") || (brugerensValg === "paper" && computerensValg === "rock") || (brugerensValg === "scissors" && computerensValg === "paper")) {
    winText.classList.remove("hidden");
  } else {
    loseText.classList.remove("hidden");
  }
}

function skjulResultat() {
  loseText.classList.add("hidden");
  winText.classList.add("hidden");
  drawText.classList.add("hidden");
}
