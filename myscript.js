function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    let lowerPlayerSelection = playerSelection.toLowerCase();
    if (lowerPlayerSelection === computerSelection) {
        return 'tie';
    } else if (lowerPlayerSelection === "rock") {
        if (computerSelection === "scissors") {
            return 'player';
        } else if (computerSelection === "paper") {
            return 'comp';
        }
    } else if (lowerPlayerSelection === "paper") {
        if (computerSelection === "rock") {
            return 'player';
        } else if (computerSelection === "scissors") {
            return 'comp';
        }
    } else if (lowerPlayerSelection === "scissors") {
        if (computerSelection === "paper") {
            return 'player';
        } else if (computerSelection === "rock") {
            return 'comp';
        }
    } 
}

function newResult(imageName, selection, user, score) {        
    let newImage;
    let scoreText;

    if (document.querySelector(`.${imageName}`) !== null) {
        scoreText = document.querySelector(`.${user}Score`);
        scoreText.textContent = score;

        newImage = document.querySelector(`.${imageName}`);
        newImage.setAttribute('src', `./images/${selection}.png`);
    } else {
        scoreText = document.createElement('div');
        scoreText.classList.add(`${user}Score`);
        scoreText.textContent = score;
        document.querySelector(`.${user}`).appendChild(scoreText);

        newImage = document.createElement('img');
        newImage.classList.add(imageName);
        newImage.src = `./images/${selection}.png`;
        document.querySelector(`.${user}`).appendChild(newImage);
    }
}

const choices = document.querySelector('.choices').childNodes;
let playerScore = 0;
let compScore = 0;
let round = 0;

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        /* 
        using split function to get the first word
        as class contains 'hover-over' in the class list 
        */    
        const playerSelection = e.target.getAttribute('class').split(' ')[0];
       
        const computerSelection = getComputerChoice(); 
        
        result = playRound(playerSelection, computerSelection);

        if (result === 'player') {
            playerScore += 1;
        } else if (result === 'comp') {
            compScore += 1;
        } 

        newResult('player-img', playerSelection, 'player', playerScore);
        newResult('comp-img', computerSelection, 'comp', compScore);

        round += 1;
        roundText = document.querySelector('.round');
        roundText.textContent = `Round: ${round}`;
    });

    choice.addEventListener('mouseover', e => {
        choice.classList.toggle('hover-over');
    });

    choice.addEventListener('mouseleave', e => {
        e.target.classList.remove('hover-over')
    });
});