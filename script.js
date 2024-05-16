const arrayRPS = ["rock", "paper", "scissors"];
const rock = arrayRPS[0];
const paper = arrayRPS[1];
const scissors = arrayRPS[2];

//Defining humanChoice and computerChoice
//let computerChoice;
//let humanChoice;

//Creating functions for the player and computer's choice.
function getComputerChoice() {
    let computerChoice = arrayRPS[(Math.floor(Math.random() * arrayRPS.length))];
    return computerChoice;
}
console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt("Please type one of the follwoing options: ", "rock, paper, scissors");
    return humanChoice;
}
console.log(getHumanChoice());


// Global scope variables.
let humanScore = 0;
let computerScore = 0;



//Creating playRound function.

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    if (humanSelection.toLowerCase() === computerSelection) {
        return("It's a tie.");
    }
    else if (humanSelection === "rock" && computerSelection === "scissors") {
        return("You win!  Rock beats scissors.");
    }
    else if (humanSelection === "rock" && computerSelection === "paper") {
        return("You lose!  Paper beats rock.");
    }
    else if (humanSelection === "paper" && computerSelection === "rock") {
        return("You win!  Paper beats rock.");
    }
    else if (humanSelection === "paper" && computerSelection === "scissors") {
        return("You lose!  Scissors beats paper.");
    }
    else if (humanSelection === "scissors" && computerSelection === "paper") {
        return("You win!  Scissors beats paper.");
    }
    else if (humanSelection === "scissors" && computerSelection === "rock") {
        return("You lose!  Rock beats scissors.");
    }
}



