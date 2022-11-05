function getComputerChoice() {
    const form = ["rock", "paper", "scissors"];
    return form[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    let lowerPlayerSelection = playerSelection.toLowerCase();
    if (lowerPlayerSelection === computerSelection) {
        return "It's a tie!";
    } else if (lowerPlayerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You Win! Rock beats Scissors";
        } else if (computerSelection === "paper") {
            return "You lose! Paper beats Rock";
        }
    } else if (lowerPlayerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You Win! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            return "You lose! Scissors beats Paper";
        }
    } else if (lowerPlayerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You Win! Scissors beats Paper";
        } else if (computerSelection === "rock") {
            return "You lose! Rock beats Scissors";
        }
    } 
}

const playerSelection = "RoCk";
const computerSelection = getComputerChoice();
console.log("Computer choice: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));