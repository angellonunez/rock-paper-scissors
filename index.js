let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

rock.addEventListener('click', function rockSelected() {
    let computerValues = ['Rock', 'Paper', 'Scissors']
    let computerResult = computerValues[Math.floor(Math.random() * computerValues.length)];
    if (computerResult == 'Rock') {
        return alert('You selected Rock and the computer selected ' + computerResult + '.\nIT IS A DRAW!');
    } else if (computerResult == 'Paper') {
        return alert('You selected Rock and the computer selected ' + computerResult + '.\nYOU LOSE!')
    } else {
        return alert('You selected Rock and the computer selected ' + computerResult + '.\nYOU WIN!');
    }
});
paper.addEventListener('click', function paperSelected() {
    let computerValues = ['Rock', 'Paper', 'Scissors']
    let computerResult = computerValues[Math.floor(Math.random() * computerValues.length)];
    if (computerResult == 'Rock') {
        return alert('You selected Paper and the computer selected ' + computerResult + '.\nYOU WIN!');
    } else if (computerResult == 'Paper') {
        return alert('You selected Paper and the computer selected ' + computerResult + '.\nIT IS A DRAW!')
    } else {
        return alert('You selected Paper and the computer selected ' + computerResult + '.\nYOU LOSE!');
    }
});
scissors.addEventListener('click', function playerSelection() {
    let computerValues = ['Rock', 'Paper', 'Scissors']
    let computerResult = computerValues[Math.floor(Math.random() * computerValues.length)];
    if (computerResult == 'Rock') {
        return alert('You selected Scissors and the computer selected ' + computerResult + '.\nYOU LOSE!');
    } else if (computerResult == 'Paper') {
        return alert('You selected Scissors and the computer selected ' + computerResult + '.\nYOU WIN!')
    } else {
        return alert('You selected Scissors and the computer selected ' + computerResult + '.\nIT IS A DRAW!');
    }
});