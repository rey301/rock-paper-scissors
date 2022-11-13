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
            return "You Win! \n You chose: Rock \n CPU chose: Paper";
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

const choices = document.querySelector('.choices').childNodes;
let chosen = false;

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        /* 
        *
        using split function to get the first word
        as class contains 'hover-over' in the class list 
        */    
        const playerSelection = e.target.getAttribute('class').split(' ')[0];
        const computerSelection = getComputerChoice();

        console.log(computerSelection);
        
        // let notChosen = document.querySelectorAll(
        //     `.choices > img:not(.${playerSelection})`
        //     );
        
        // notChosen.forEach(item => item.remove()); // remove all items from the
        //                                           // page except chosen one
                                                  
        const result = document.querySelector('.result');
        result.textContent = playRound(playerSelection, computerSelection);
    });

    choice.addEventListener('mouseover', e => {
        choice.classList.toggle('hover-over');
    });

    choice.addEventListener('mouseleave', e => {
        e.target.classList.remove('hover-over')
    });
});