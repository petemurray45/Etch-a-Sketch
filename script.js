// functions


const container = document.querySelector('.container');
const resize = document.querySelector('.reSize');
const maxWidth = 600;

createGrid()


function sizePrompt(){
    size = prompt("What size would you like your grid? Please enter a number between 1-100")
    if (size >= 100) size = 100;
}

function createGrid (){
    sizePrompt()

    let gridRow;
    for (let i = 0; i < size; i++){
        gridRow = document.createElement('div')
        gridRow.className = 'gridRow'
        gridRow.id = 'gridRow' + i;
        container.appendChild(gridRow)
        
        
        let roww = document.getElementById('gridRow' + i)

        for (let k = 0; k < size; k++){
            gridBox = document.createElement('div')
            gridBox.className = 'gridBox'
            gridBox.id = 'gridBox' + k;
            roww.appendChild(gridBox)
        }

    }

    let boxes = document.getElementsByClassName('gridBox')
    for (let j = 0; j < boxes.length; j++) {
        boxes[k].style.width = maxWidth/size + 'px';
        boxes[k].style.height = maxWidth/size + 'px';
    }

    
}

