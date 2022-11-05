function getComputerChoice() {
    const form = ["rock", "paper", "scissors"];
    return form[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    let playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You Win! Rock beats Scissors";
        } else if (computerSelection === "paper") {
            return "You lose! Paper beats Rock";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You Win! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            return "You lose! Scissors beats Paper";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You Win! Scissors beats Paper";
        } else if (computerSelection === "rock") {
            return "You lose! Rock beats Scissors";
        }
    } else {
        return "It's a tie!";
    }
}