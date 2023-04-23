let options = ['rock', 'paper', 'scissors']

// getComputerChoice() is a function that allows you to get a random element from the array options. Math.random() is the most important function to get a pseudo-random number between 0 (inclusive) to 1 (exclusive), but Math.floor() is necessary because it rounds down and returns the largest integer smaller than or equal to the given number.

let getComputerChoice = () => {
    let computerHand = options[(Math.floor(Math.random() * options.length))];
    return computerHand;
}

let playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lose! Scissors beats Paper'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Rock beats Scissors'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Won! Paper beats Rock'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Won! Scissors beats Paper'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Won! Rock beats Scissors'
    } else {
        return 'Tie';
    }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));