const sketchContainer = document.querySelector("#sketch-container")

function promptUser() {
    return prompt("Input a number (less than 100)", 16);
}

function drawSquares(size = 16) {
    for (let i = 0; i < size; i++) {
        const squareRow = document.createElement('div');

        for (let i = 0; i < size; i++) {
            const newSquare = document.createElement('div');
            squareRow.appendChild(newSquare);
        }

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

drawSquares(16);