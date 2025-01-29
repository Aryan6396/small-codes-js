let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

let guesses = document.querySelector(".guesses");
let remaining = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");
let guessSubmit = document.querySelector(".guessSubmit");
let guessField = document.querySelector(".guessField");
let startOver = document.querySelector(".resultParas");

const p = document.createElement("p");
let guessCount = 1; // guessCount is the number of guesses the player has made. It is set to 1 because the player has made one guess already.

let previousGuesses = []; // previousGuesses is an array that will store the previous guesses of the player.
let playGame = true; // playGame is a boolean that will be used to control the flow of the game.

if (playGame) {
  guessSubmit.addEventListener("click", function(e){
    e.preventDefault();
    const guess = parseInt(guessField.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number.");
  } else if (guess < 1 || guess > 100) {
    alert("Please enter a number between 1 and 100.");
  } else {
    previousGuesses.push(guess);
    if (guessCount === 1) {
      guesses.textContent = " ";
    }
    guesses.textContent += guess + " ";
    checkGuess(guess);
  }
  guessCount++;
  guessField.value = "";
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    remaining.textContent = "Congratulations! You got it right!";
    remaining.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    remaining.textContent = "Game Over!";
    setGameOver();
  } else {
    remaining.textContent = "Wrong!";
    remaining.style.backgroundColor = "red";
    if (guess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (guess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }
}

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  startOver.style.display = "block";
  startOver.addEventListener("click", resetGame);
}   

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll(".resultParas p");
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }
  previousGuesses = [];
  playGame = true;
  remaining.style.backgroundColor = "white";
  randomNumber = parseInt(Math.random() * 100 + 1);
  console.log(randomNumber);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  startOver.style.display = "none";
}   


