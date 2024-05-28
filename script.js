function getComputerChoice() {
    const arrayRPS = ["rock", "paper", "scissors"];
    const rock = arrayRPS[0];
    const paper = arrayRPS[1];
    const scissors = arrayRPS[2];

    let computerChoice = arrayRPS[(Math.floor(Math.random() * arrayRPS.length))]; 
    return computerChoice;
}
console.log(getComputerChoice());  //Comment this when code is more functional

function getHumanChoice() {
    let humanChoice = prompt("Please type one of the following options: ", "rock, paper, scissors");
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock") {
        return humanChoice;
    }
    else if (humanChoice === "paper") {
        return humanChoice;
    }
    else if (humanChoice === "scissors") {
        return humanChoice;
    }
    else {
        return "try entering 'rock', 'paper' or 'scissors'!";
    }
}
console.log(getHumanChoice());  //Comment this when code is more functional

// Keeping score, per round.
let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    humanChoice = true;
    computerChoice = false;


    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore + 1;
        return "You lose!  Paper beats rock.";
    }

    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore + 1;
        return "You win!  Rock beats scissors.";
    }

    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore + 1;
        return "You win!  Paper beats rock.";
    }

    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore + 1;
        return "You lose!  Scissors beats paper.";
    }

    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore + 1;
        return "You lose!  Rock beats scissors.";
    }

    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore + 1;
        return "You win!  Scissors beats paper.";
    }

    else {
        return "It's a tie!";
    }
}

console.log(playRound());


