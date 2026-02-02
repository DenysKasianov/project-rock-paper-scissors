let humanScore = 0;
let computerScore = 0;

let computerChoice;

const parentDiv = document.getElementsByClassName("mainContainer");
const h3 = document.createElement("h3");
parentDiv[0].appendChild(h3);

const humanScoreDisplay = document.createElement("p");
parentDiv[0].appendChild(humanScoreDisplay);

const computerScoreDisplay = document.createElement("p");
parentDiv[0].appendChild(computerScoreDisplay);

let rock = document
  .getElementById("rockImage")
  .addEventListener("click", (event) => {
    onHumanPick("rock");
  });

let paper = document
  .getElementById("paperImage")
  .addEventListener("click", (event) => {
    onHumanPick("paper");
  });

let scissors = document
  .getElementById("scissorsImage")
  .addEventListener("click", (event) => {
    onHumanPick("scissors");
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

function onHumanPick(humanChoice) {
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
}
