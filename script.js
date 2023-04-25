let options = ['rock', 'paper', 'scissors']
let computerScore = 0;
let playerScore = 0;

let playRound = () => {

// getComputerChoice() is a function that allows you to get a random element from the array options. Math.random() is the most important function to get a pseudo-random number between 0 (inclusive) to 1 (exclusive), but Math.floor() is necessary because it rounds down and returns the largest integer smaller than or equal to the given number.
    let getComputerChoice = () => {
        return options[Math.floor(Math.random() * options.length)];
    }

    let getPlayerChoice = () => {
        let playerHand = prompt('Select your hand - Rock, paper or scissors?:');
        return playerHand;
    }

    let playerSelection = getPlayerChoice().toLowerCase();
    let computerSelection = getComputerChoice();
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        console.log('You Lose! Paper beats Rock');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        console.log('You Lose! Scissors beats Paper');
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        console.log('You Lose! Rock beats Scissors');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        console.log('You Won! Paper beats Rock');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        console.log('You Won! Scissors beats Paper');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        console.log('You Won! Rock beats Scissors');
    } else if (playerSelection === computerSelection) {
        console.log('Tie');
    } else {
        playRound();
    }
}

let game = () => {
    while (computerScore < 5 || playerScore < 5) {
        playRound();
        console.log(computerScore);
        console.log(playerScore);
        if (computerScore === 5) {
            return alert("Computer won!");
        } else if (playerScore === 5) {
            return alert("Player won!")
        }
    }
}

game();