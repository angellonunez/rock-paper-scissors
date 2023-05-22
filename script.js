let options = ['rock', 'paper', 'scissors']
let computerChoiceDisplay = document.getElementById('computer-choice');
let userChoiceDisplay = document.getElementById('player-choice');
let resultDisplay = document.getElementById('result');
let totalScorePlayer = document.getElementById('total-score-player');
let totalScoreComputer = document.getElementById('total-score-computer');
let finalResult = document.getElementById('final-result');
let possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;
let userScore = 0;
let computerScore = 0;

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = `Your Choice: ${userChoice}`
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    const randomOption = options[Math.floor(Math.random() * options.length)];
    computerChoice = randomOption;
    computerChoiceDisplay.innerHTML = `Computer Choice: ${computerChoice}`;
}

function getResult() {
    if (userChoice === computerChoice) {
        result = "Tie";
    } else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "scissors" && computerChoice === "paper") || (userChoice === "paper" && computerChoice === "rock")) {
        result = "You won this round!";
        userScore++;
    } else {
        result = "You lost this round!";
        computerScore++;
    }
    resultDisplay.innerHTML = result;
    totalScorePlayer.innerHTML = `Player Total Score: ${userScore}`;
    totalScoreComputer.innerHTML = `Player Total Score: ${computerScore}`;
    if (userScore === 5) {
        finalResult.innerHTML = 'YOU WON!';
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        let newGame = document.createElement('button');
        newGame.textContent = 'Play Again';
        newGame.classList.add('new-game')
        document.body.appendChild(newGame);
        newGame.addEventListener('click', () => {
            location.reload();
        })
    } else if (computerScore === 5) {
        finalResult.innerHTML = 'YOU LOST!';
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        let newGame = document.createElement('button');
        newGame.textContent = 'Play Again';
        newGame.classList.add('new-game')
        document.body.appendChild(newGame);
        newGame.addEventListener('click', () => {
            location.reload();
        })
    }
}