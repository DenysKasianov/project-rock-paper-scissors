let humanScore = 0;
let computerScore = 0;

let computerChoice;

let gameOver = false;

const rock = document.getElementById("rockImage");
const paper = document.getElementById("paperImage");
const scissors = document.getElementById("scissorsImage");

const parentDiv = document.getElementsByClassName("mainContainer");
const h3 = document.createElement("h3");
parentDiv[0].appendChild(h3);

const humanScoreDisplay = document.createElement("p");
humanScoreDisplay.textContent = "Human Score = " + humanScore;

parentDiv[0].appendChild(humanScoreDisplay);

const computerScoreDisplay = document.createElement("p");
computerScoreDisplay.textContent = "Computer Score = " + computerScore;
parentDiv[0].appendChild(computerScoreDisplay);

const gameOverDisplay = document.createElement("h2");
parentDiv[0].appendChild(gameOverDisplay);

const resetButton = document.createElement("button");
resetButton.textContent = "Reset the Game!";
parentDiv[0].appendChild(resetButton);
resetButton.style.display = "none";

rock.addEventListener("click", (event) => {
  onHumanPick("rock");
});

paper.addEventListener("click", (event) => {
  onHumanPick("paper");
});

scissors.addEventListener("click", (event) => {
  onHumanPick("scissors");
});

resetButton.addEventListener("click", (event) => {
  humanScore = 0;
  computerScore = 0;
  humanScoreDisplay.textContent = "Human Score = " + humanScore;
  computerScoreDisplay.textContent = "Computer Score = " + computerScore;
  gameOver = false;
  resetButton.style.display = "none";
  gameOverDisplay.style.display = "none";
});

function getComputerChoice() {
  let computerSelection = Math.floor(Math.random() * 100);
  if (computerSelection <= 33) {
    return (computerChoice = "rock");
  } else if (computerSelection >= 34 && computerSelection <= 66) {
    return (computerChoice = "paper");
  } else {
    return (computerChoice = "scissors");
  }
}

function endGame() {
  if (humanScore == 5) {
    gameOver = true;
    gameOverDisplay.textContent = "Game Over! You Win!";
    h3.style.display = "none";
    gameOverDisplay.style.display = "block";
    resetButton.style.display = "block";
    return;
  } else if (computerScore == 5) {
    gameOver = true;
    gameOverDisplay.textContent = "Game Over! You Lose!";
    h3.style.display = "none";
    gameOverDisplay.style.display = "block";
    resetButton.style.display = "block";
    return;
  }
}

function onHumanPick(humanChoice) {
  if (gameOver == true) {
    return;
  } else {
    getComputerChoice();
    if (humanChoice == "rock" && computerChoice == "scissors") {
      humanScore++;
      h3.textContent = "You Win! Rock beats Scissors";
      humanScoreDisplay.textContent = "Human Score = " + humanScore;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      humanScore++;
      h3.textContent = "You Win! Paper beats Rock";
      humanScoreDisplay.textContent = "Human Score = " + humanScore;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      humanScore++;
      h3.textContent = "You Win! Scissors beats Paper";
      humanScoreDisplay.textContent = "Human Score = " + humanScore;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
      computerScore++;
      h3.textContent = "You Lose! Paper beats Rock";
      computerScoreDisplay.textContent = "Computer Score = " + computerScore;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      computerScore++;
      h3.textContent = "You Lose! Scissors beats Paper";
      computerScoreDisplay.textContent = "Computer Score = " + computerScore;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      computerScore++;
      h3.textContent = "You Lose! Rock beats Scissors";
      computerScoreDisplay.textContent = "Computer Score = " + computerScore;
    } else h3.textContent = "Draw!";
    h3.style.display = "block";
  }
  endGame();
}
