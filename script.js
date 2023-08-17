
// body structure
const body = document.body
const header = document.createElement('div')
header.classList.add('header')
body.appendChild(header)
const pageContainer = document.createElement("div")
pageContainer.classList.add("pageContainer")
body.appendChild(pageContainer)


// CSS 

header.innerText = 'Etch-A-Sketch Game'



// play procedure 


createGrid()
placeEvent()



//functions for grid creation


function createGrid(){

    
    const container = document.createElement("div");
    pageContainer.appendChild(container);
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

// screen prompt upon load setting the grid size

// button at the top of the page that allows user to retart