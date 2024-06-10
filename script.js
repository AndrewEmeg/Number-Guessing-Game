"use strict";

// Establishes the secret number and score.
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

// Listens for the click event on the check button.
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input.
  if (!guess) {
    displayMessage("⛔ No Number!");

    // When user gets it correctly
  } else if (guess === secretNumber) {
    displayMessage("🥳 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector("header").style.backgroundColor = "#60b347";
    document.querySelector("main").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    let highScore = Number(document.querySelector(".highscore").textContent);
    if (score > highScore) {
      document.querySelector(".highscore").textContent = score;
    }

    // When the guess is wrong.
  } else if (guess !== secretNumber) {
    score--;
    if (score === 0) {
      displayMessage("😭 You lost the game!");
    } else {
      displayMessage(guess > secretNumber ? "😟 Too High!" : "😔 Too Low!");
    }
    document.querySelector(".score").textContent = score;
  }

  //   // When the guess is too high.
  // } else if (guess > secretNumber) {
  //   score--;
  //   if (score === 0) {
  //     document.querySelector('.message').textContent = '😭 You lost the game!';
  //   } else {
  //     document.querySelector('.message').textContent = '😟 Too High!';
  //   }
  //   document.querySelector('.score').textContent = score;

  //   // When the guess is too low.
  // } else {
  //   score--;
  //   if (score === 0) {
  //     document.querySelector('.message').textContent = '😭 You lost the game!';
  //   } else {
  //     document.querySelector('.message').textContent = '😔 Too Low!';
  //   }
  //   document.querySelector('.score').textContent = score;
  // }
});

// Listens for the click event on the 'again' button and resets the whole game.
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
});
