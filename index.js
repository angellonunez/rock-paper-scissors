// Set up variables.
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let xWin = document.getElementById('x-win');
let xTie = document.getElementById('x-tie');
let xLose = document.getElementById('x-lose');

// Logic -> Computer has 3 values, like your selection. Just one value is going to be randomly selected. There are 3 possible solutions: win, tie or lose.
rock.addEventListener('click', function rockSelected() {
    let computerValues = ['Rock', 'Paper', 'Scissors']
    let computerResult = computerValues[Math.floor(Math.random() * computerValues.length)];
    if (computerResult == 'Rock') {
        return document.getElementById("tie").style.display = "inline-block";
    } else if (computerResult == 'Paper') {
        return document.getElementById("lose").style.display = "inline-block";
    } else {
        return document.getElementById("win").style.display = "inline-block";
    }
});
paper.addEventListener('click', function paperSelected() {
    let computerValues = ['Rock', 'Paper', 'Scissors']
    let computerResult = computerValues[Math.floor(Math.random() * computerValues.length)];
    if (computerResult == 'Rock') {
        return document.getElementById("win").style.display = "inline-block";
    } else if (computerResult == 'Paper') {
        return document.getElementById("tie").style.display = "inline-block";
    } else {
        return document.getElementById("lose").style.display = "inline-block";
    }
});
scissors.addEventListener('click', function playerSelection() {
    let computerValues = ['Rock', 'Paper', 'Scissors']
    let computerResult = computerValues[Math.floor(Math.random() * computerValues.length)];
    if (computerResult == 'Rock') {
        return document.getElementById("lose").style.display = "inline-block";
    } else if (computerResult == 'Paper') {
        return document.getElementById("win").style.display = "inline-block";
    } else {
        return document.getElementById("tie").style.display = "inline-block";
    }
});

// X Close function. It is rudimentary, but it works.
xWin.addEventListener('click', function close() {
    window.location.reload();
})

xTie.addEventListener('click', function close() {
    window.location.reload();
})

xLose.addEventListener('click', function close() {
    window.location.reload();
})

document.addEventListener('keydown', function(event){
	if(event.key === "Escape" && document.getElementById("lose").style.display == "inline-block"){
		window.location.reload();
	}
});

document.addEventListener('keydown', function(event){
	if(event.key === "Escape" && document.getElementById("win").style.display == "inline-block"){
		window.location.reload();
	}
});

document.addEventListener('keydown', function(event){
	if(event.key === "Escape" && document.getElementById("tie").style.display == "inline-block"){
		window.location.reload();
	}
});