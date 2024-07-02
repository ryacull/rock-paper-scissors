const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}



function playGame() {   

    function checkWinner(humanSelection, computerSelection) {
        if (humanSelection === computerSelection) {
            return "tie";
        }
        else if (
            (humanSelection === "rock" && computerSelection === "scissors") ||
            (humanSelection === "scissors" && computerSelection === "paper") ||
            (humanSelection === "paper" && computerSelection === "rock")
        ){
            return "human";
        }
        else {
            return "computer";
        }
    }
    
    function playRound(humanSelection, computerSelection) {
        const result = checkWinner(humanSelection, computerSelection);
        if (result === "tie") {
            return "It's a tie!";
        }
        else if (result === "human") {
            return `You win!  ${humanSelection} beats ${computerSelection}.`;
        }
        else {
            return `You lose!  ${computerSelection} beats ${humanSelection}.`;  
        }
    }
    
    function getHumanChoice() {
        let validatedInput = false;
        while(validatedInput == false) {
            const humanChoice = prompt("Rock; paper; scissors?");
            if (humanChoice == null) {
                continue;
            }
            const hChoiceLower = humanChoice.toLowerCase();
            if (options.includes(hChoiceLower)) {
                return hChoiceLower;
            }
        }
    } 
    
    let humanScore = 0;
    let computerScore = 0;
    console.log("Welcome to RPS!");
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log("------------------------");
        if (checkWinner(humanSelection, computerSelection) === "human") {
            humanScore++;
        }
        else if (checkWinner(humanSelection, computerSelection) === "computer") {
            computerScore++;
        }
    }
    
    console.log("Game over!  Refresh to play again.")
    if (humanScore < computerScore) {
        console.log("Computer wins!");
    }
    else if (humanScore > computerScore) {
        console.log("Human wins!");
    }
    else {
        console.log("It's a tie...");
    }
}

playGame();