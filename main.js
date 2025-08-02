const sketchContainer = document.querySelector("#sketch-container")

function promptUser() {
    return prompt("Input a number (less than 100)", 16);
}

function getRandomNumber(maxNumber = 255) {
    return Math.floor(Math.random() * maxNumber) + 1;
}

function hoverCallback(event) {
    const target = event.target
    if (target.classList.contains('square')) {
        target.style.backgroundColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`
    }
}

function drawSquares(size = 16) {
    for (let i = 0; i < size; i++) {
        const squareRow = document.createElement('div');

        for (let i = 0; i < size; i++) {
            const newSquare = document.createElement('div');
            newSquare.classList.add('square')
            squareRow.appendChild(newSquare);
        }

        squareRow.addEventListener('mouseover', hoverCallback)

        sketchContainer.appendChild(squareRow);
    }
}

function redrawSquares(size) {
    if (size === null) {
        return;
    }

    const parsedNumber = parseInt(size)
    if (isNaN(parsedNumber) || typeof(parsedNumber) != 'number' || parsedNumber > 100 || parsedNumber <= 0) {
        redrawSquares(promptUser());
    }

    sketchContainer.innerHTML = ""; // Clear all ChildNodes

    drawSquares(size);
}

function newGrid() {
    return redrawSquares(promptUser());
}

const newGridButton = document.querySelector('#new-grid')
newGridButton.addEventListener('click', newGrid);

drawSquares(16);