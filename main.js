const sketchContainer = document.querySelector("#sketch-container")

function drawSquares(size = 16) {
    for (let i = 0; i < size; i++) {
        const squareRow = document.createElement('div')

        for (let i = 0; i < size; i++) {
            const newSquare = document.createElement('div')
            squareRow.appendChild(newSquare)
        }

        sketchContainer.appendChild(squareRow)
    }
}

drawSquares();