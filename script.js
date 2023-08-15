const body = document.body


// play procedure 

createGrid()
placeEvent()



//functions for grid creation


function createGrid(){
    const container = document.createElement("div");
    body.appendChild(container);
    container.classList.add("container");
    const gridPlate = document.createElement("div");
    gridPlate.classList.add("gridPlate");
    container.appendChild(gridPlate);
    let clonedTile;
    for (let i = 0; i < 16*16-1; i++) {
        clonedTile = gridPlate.cloneNode();
        container.appendChild(clonedTile);
    
    }
}

function placeEvent() {
    let allTiles = document.querySelectorAll('.gridPlate');
    allTiles.forEach(element => {
        element.addEventListener('mouseover', changeColor)
    })
}

function changeColor() {
    this.classList.add('plateHovered')
}


// event listeners