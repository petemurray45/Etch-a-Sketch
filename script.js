// functions


const container = document.querySelector('.container');
const resize = document.querySelector('.reSize');
const maxWidth = 500;





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
        gridRow.classList.add('gridRow')
        gridRow.id = 'gridRow' + i;
        container.appendChild(gridRow)
        
        
        let roww = document.getElementById('gridRow' + i)

        for (let k = 0; k < size; k++){
            let gridBox = document.createElement('div')
            gridBox.classList.add('gridBox')
            gridBox.id = 'gridBox' + k;
            gridBox.addEventListener('mouseover', changeColor)
            roww.appendChild(gridBox)
            
        }

    }

    let boxes = document.getElementsByClassName('gridBox')
    
    
    for (let j = 0; j < boxes.length; j++) {
        boxes[j].style.width = maxWidth/size + 'px';
        boxes[j].style.height = maxWidth/size + 'px';
    }


    

    

}


function changeColor(e){
    
    let colors = ['red', 'white', 'blue']

    let choice = colors[Math.floor(Math.random() * colors.length)];

    Object.assign(e.target.style, {
        backgroundColor : choice
    })











}