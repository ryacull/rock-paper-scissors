let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const arrayCompChoice = ["rock", "paper", "scissors"];
    const computerChoice = Math.floor(Math.random() * arrayCompChoice.length);
    return arrayCompChoice[computerChoice];
}


function getHumanChoice() {
    let humanChoice;
    humanChoice = prompt("Rock?  Paper?  Or scissors?");
    return humanChoice;
}


function playGame(playRound) {
    
    
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            return console.log("It's a tie!");
        }
        else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore =+ 1;
            return console.log("You lose!  Paper beats rock.");
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore =+ 1;
            return console.log("You win!  Rock beats scissors.");
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore =+1;
            return console.log("You win!  Paper beats rock.");
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore =+1;
            return console.log("You lose!  Scissors beats paper.");
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore =+1;
            return console.log("You lose!  Rock beats scissors.");
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore =+1;
            return console.log("You win!  Scissors beats paper.");
        }
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}

//playGame();
for (var i = 0; i < 5; i++) {
    playGame();
}


