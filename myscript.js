// generates the computer's choice 
function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * 3)]
}

// plays a single round
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

// updates scores and images
function updateScore(selection, user, score) {        
    const scoreDiv = document.querySelector(`.${user}-score`);
    scoreDiv.textContent = score;
    
    const newImage = document.querySelector(`.${user}-img`);
    newImage.setAttribute('src', `./images/${selection}.png`);
}

// returns true if game has ended, false otherwise
function checkScores() {
    if (playerScore === 5 || compScore === 5) {  
        if (playerScore === 5) {
            resultText.textContent = "You Won! Congrats!";
        } else {
            resultText.textContent = "You Lost! Better luck next time...";
        }
        document.querySelector('.results').appendChild(resultText);
        document.querySelector('.results').appendChild(resetBtn);
        return true;
    } else {
        return false;
    }
}

// initial scores and round
let round = 0;
let playerScore = 0;
let compScore = 0;

const playerScoreText = document.createElement('div');
playerScoreText.classList.add(`player-score`);
playerScoreText.textContent = playerScore;
document.querySelector('.player').appendChild(playerScoreText);

const compScoreText = document.createElement('div');
compScoreText.classList.add(`comp-score`);
compScoreText.textContent = compScore;
document.querySelector('.comp').appendChild(compScoreText);

// initial images
const playerImage = document.createElement('img');
playerImage.classList.add(`player-img`);
playerImage.src = `./images/rock.png`;
document.querySelector('.player').appendChild(playerImage);

const compImage = document.createElement('img');
compImage.classList.add(`comp-img`);
compImage.src = `./images/rock.png`;
document.querySelector('.comp').appendChild(compImage);

// result text and button to be revealed after game ends
const resultText = document.createElement('div');
resultText.classList.add('result-text');

const resetBtn = document.createElement('button');
resetBtn.classList.add('reset-button');
resetBtn.textContent = 'Play Again?';

resetBtn.addEventListener('click', e => {
    window.location.reload();
});

const choicesChildren = document.querySelector('.choices').childNodes;
choicesChildren.forEach(choice => {
    choice.addEventListener('mouseover', e => {
        if (!checkScores()) {
            e.target.classList.add('hover-over');
        }
    });

    choice.addEventListener('mouseleave', e => {
        e.target.classList.remove('hover-over');
    });
    
    choice.addEventListener('click', e => {
        if (!checkScores()) {
            /* 
            *  using split function to get the first word
            *  as class contains 'hover-over' in the class list          
            */    
            const playerSelection = e.target.getAttribute('class')
            .split(' ')[0];

            const computerSelection = getComputerChoice(); 

            result = playRound(playerSelection, computerSelection);

            // update scores
            if (result === 'player') {
                playerScore += 1;
            } else if (result === 'comp') {
                compScore += 1;
            } 

            updateScore(playerSelection, 'player', playerScore); 
            updateScore(computerSelection, 'comp', compScore);

            // update round number
            round += 1;
            roundText = document.querySelector('.round');
            roundText.textContent = `Round: ${round}`;

            checkScores();
        }
    });
});