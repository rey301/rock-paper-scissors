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

function newImage(imageName, selection) {        
    let newImage;
    
    if (document.querySelector(`.${imageName}`) !== null) {
        newImage = document.querySelector(`.${imageName}`);
        newImage.setAttribute('src', `./images/${selection}.png`);
    } else {
        newImage = document.createElement('img');
        newImage.classList.add(imageName);
        newImage.src = `./images/${selection}.png`;
        document.querySelector('.results').appendChild(newImage);
    }
}

const choices = document.querySelector('.choices').childNodes;
let chosen = false;

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        /* 
        using split function to get the first word
        as class contains 'hover-over' in the class list 
        */    
        const playerSelection = e.target.getAttribute('class').split(' ')[0];
        newImage('player-img', playerSelection);

        const computerSelection = getComputerChoice();
        newImage('comp-img', computerSelection);
        
        const result = document.querySelector('.result-text');
        result.textContent = playRound(playerSelection, computerSelection);
        console.log(result.textContent);
    });

    choice.addEventListener('mouseover', e => {
        choice.classList.toggle('hover-over');
    });

    choice.addEventListener('mouseleave', e => {
        e.target.classList.remove('hover-over')
    });
});