const userInput = document.querySelector("#guessField");
const submitBtn = document.querySelector("#guessSubmit");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const loworHi = document.querySelector(".loworHi");
const resultParas = document.querySelector(".resultParas");
const difficultySelect = document.querySelector("#difficulty");

const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");
const gameOverSound = document.getElementById("gameOverSound");

let randNum;
let maxNumber = parseInt(difficultySelect.value);
let prevGuesses = [];
let numGuesses = 1;
let playGame = true;

// Set initial random number
resetGameRange();

difficultySelect.addEventListener("change", () => {
  maxNumber = parseInt(difficultySelect.value);
  newGame();
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const guess = parseInt(userInput.value);
  if (playGame) validGuess(guess);
});

function resetGameRange() {
  randNum = Math.floor(Math.random() * maxNumber) + 1;
}

function validGuess(guess) {
  if (isNaN(guess)) {
    alert("Enter a valid number");
  } else if (guess < 1 || guess > maxNumber) {
    alert(`Number must be between 1 and ${maxNumber}`);
  } else {
    prevGuesses.push(guess);
    if (numGuesses === 10) {
      displayGuess(guess);
      gameOverSound.play();
      displayMessage(`Game Over! Number was ${randNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randNum) {
    correctSound.play();
    displayMessage("🎉 Correct! You won!");
    endGame();
  } else if (guess < randNum) {
    wrongSound.play();
    displayMessage("📉 Too low!");
  } else {
    wrongSound.play();
    displayMessage("📈 Too high!");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guesses.textContent += `${guess} `;
  lastResult.textContent = 10 - numGuesses;
  numGuesses++;
}

function displayMessage(msg) {
  loworHi.textContent = msg;
  loworHi.classList.add("fade-in");
}

function endGame() {
  userInput.disabled = true;
  submitBtn.disabled = true;
  playGame = false;

  const newGameBtn = document.createElement("button");
  newGameBtn.textContent = "Start New Game";
  newGameBtn.classList.add("guessSubmit");
  resultParas.appendChild(newGameBtn);

  newGameBtn.addEventListener("click", newGame);
}

function newGame() {
  prevGuesses = [];
  numGuesses = 1;
  userInput.disabled = false;
  submitBtn.disabled = false;
  guesses.textContent = "";
  lastResult.textContent = "10";
  loworHi.textContent = "";
  resetGameRange();
  playGame = true;
  const newGameBtn = document.querySelector(".guessSubmit:last-of-type");
  if (newGameBtn) newGameBtn.remove();
}
