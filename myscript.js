function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    let lowerPlayerSelection = playerSelection.toLowerCase();
    if (lowerPlayerSelection === computerSelection) {
        return "It's a tie!";
    } else if (lowerPlayerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You Win! Rock beats Scissors";
        } else if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock";
        }
    } else if (lowerPlayerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You Win! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            return "You Lose! Scissors beats Paper";
        }
    } else if (lowerPlayerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You Win! Scissors beats Paper";
        } else if (computerSelection === "rock") {
            return "You Lose! Rock beats Scissors";
        }
    } 
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt('Choose either Rock, Paper, or Scissors');
        let roundResult = playRound(playerSelection, getComputerChoice());

        console.log(roundResult);

        if (roundResult[4] === 'W') {
            playerScore++;
        } else if (roundResult[4] === 'L') {
            computerScore++;
        } 
    }

    let results = "Player Score - " + playerScore + ':' + computerScore + 
                  " - Computer Score";  

    if (playerScore > computerScore) {
        return "You Win! Results: " + results;
    } else if (playerScore < computerScore) {
        return "You Lose! Results: " + results;
    } else {
        return "It's a tie! Results: " + results;
    }
}

const playerSelection = "RoCk";
const computerSelection = getComputerChoice();
// console.log("Computer choice: " + computerSelection);
// console.log(playRound(playerSelection, computerSelection));

console.log(game());