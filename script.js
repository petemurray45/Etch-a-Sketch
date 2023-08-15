const body = document.body


//functions for grid creationg
createGrid()
mouseOver()

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


function mouseOver(){
    const gridEvent = document.querySelector("gridPlate")
    console.log(gridEvent);
 
}