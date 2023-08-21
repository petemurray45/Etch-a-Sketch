// DOM selectors

const container = document.querySelector('.container');
const maxWidth = 500;
const resizeBtn = document.getElementById('resize')



createGrid()


// event listeners

resizeBtn.addEventListener('click', () => {
    removeGrid()
    createGrid()
})



// functions

function sizePrompt(){
    size = prompt("What size would you like your grid? Please enter a number between 1-100")
    if (size >= 100) size = 100;
}

function createGrid (){
    sizePrompt()

    let gridRow;
    for (let i = 0; i < size; i++){
        gridRow = document.createElement('div')
        gridRow.classList.add('gridRow')
        gridRow.id = 'gridRow' + i;
        container.appendChild(gridRow)
        
        
        let roww = document.getElementById('gridRow' + i)

        for (let k = 0; k < size; k++){
            let gridBox = document.createElement('div')
            gridBox.classList.add('gridBox')
            gridBox.id = 'gridBox' + k;
            roww.appendChild(gridBox)
            
        }

    }

    let boxes = document.getElementsByClassName('gridBox')
    
    
    for (let j = 0; j < boxes.length; j++) {
        boxes[j].style.width = maxWidth/size + 'px';
        boxes[j].style.height = maxWidth/size + 'px';
    }

    const gridEvent = document.querySelectorAll('.gridBox')
    gridEvent.forEach(gridEvent => {
        gridEvent.addEventListener('mouseover', () => {
            gridEvent.style.backgroundColor = 'black';
            
        })
    })
    

}

function removeGrid (){
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
}


function changeColor(){
    let colors = ['red', 'yellow', 'blue', 'green', 'purple', 'black']
    let choice = colors[Math.floor(Math.random()*colors.length)]




    return choice;
}