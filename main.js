const sketchContainer = document.querySelector("#sketch-container")

for (let i = 0; i < 16; i++) {
    const squareRow = document.createElement('div')

    for (let i = 0; i < 16; i++) {
        const newSquare = document.createElement('div')
        squareRow.appendChild(newSquare)
    }
   
    sketchContainer.appendChild(squareRow)
}