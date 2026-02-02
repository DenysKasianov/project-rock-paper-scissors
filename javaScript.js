let humanScore = 0;
let computerScore = 0;

let humanSelection;
let computerSelection;

// Create a new function named getComputerChoice
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 100) + 1;
  if (computerChoice <= 33) {
    return (computerChoice = "rock");
  } else if (computerChoice >= 34 && computerChoice <= 66) {
    return (computerChoice = "paper");
  } else {
    return (computerChoice = "scissors");
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Type your choice - 'rock', 'paper' or 'scissors'");
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
    return console.log("You Win! Rock beats Scissors");
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    return console.log("You Win! Paper beats Rock");
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
    return console.log("You Win! Scissors beats Paper");
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore++;
    return console.log("Computer Won! Paper beats Rock");
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
    return console.log("Computer Won! Scissors beats Paper");
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore++;
    return console.log("Computer Won! Rock beats Scissors");
  } else if (humanChoice == "rock" && computerChoice == "rock") {
    return console.log("Draw!");
  } else if (humanChoice == "paper" && computerChoice == "paper") {
    return console.log("Draw!");
  } else if (humanChoice == "scissors" && computerChoice == "scissors") {
    return console.log("Draw!");
  }
}

function getSelection() {
  humanSelection = getHumanChoice().toLowerCase();
  computerSelection = getComputerChoice();
}

function getScore() {
  console.log("Human score: " + humanScore);
  console.log("Computer score: " + computerScore);
}

function playGame() {
  getSelection();
  playRound(humanSelection, computerSelection);
  getScore();
  getSelection();
  playRound(humanSelection, computerSelection);
  getScore();
  getSelection();
  playRound(humanSelection, computerSelection);
  getScore();
  getSelection();
  playRound(humanSelection, computerSelection);
  getScore();
  getSelection();
  playRound(humanSelection, computerSelection);
  getScore();
}

// playGame();
