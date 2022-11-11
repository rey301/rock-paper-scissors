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

let playerSelection = '';

const btns = document.querySelectorAll('button');
btns.forEach(button => {
    button.addEventListener('click', e => {
        playerSelection = e.target.getAttribute('class');
    });
});

// const rockBtn = document.querySelector('.rockButton');
// rockBtn.addEventListener('click', e => {
//     playerSelection = 'rock';
// });

const computerSelection = getComputerChoice();
// console.log("Computer choice: " + computerSelection);
// console.log(playRound(playerSelection, computerSelection));

// console.log(game());