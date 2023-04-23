let options = ['rock', 'paper', 'scissors']

// getComputerChoice() is a function that allows you to get a random element from the array options. Math.random() is the most important function to get a pseudo-random number between 0 (inclusive) to 1 (exclusive), but Math.floor() is necessary because it rounds down and returns the largest integer smaller than or equal to the given number.

let getComputerChoice = () => {
    let computerHand = options[(Math.floor(Math.random() * options.length))];
    return computerHand;
}