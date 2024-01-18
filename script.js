const sketchDivs = document.querySelector('.color-screen');
// Create a container div with the div-screen class
const divScreenContainer = document.createElement('div');
divScreenContainer.classList.add('div-screen');
// Append the container to the color-screen
sketchDivs.appendChild(divScreenContainer);

for (let i = 0; i < 16 * 16; i++) {
    const createdDiv = document.createElement('div');
    createdDiv.style.flex = `0 0 ${100/16}%`;
    createdDiv.style.aspectRatio = `1/1`;
    divScreenContainer.appendChild(createdDiv);
}



function getColor(){
    //logic for the "paintbrush" effect instead of just mouse over
    const container = document.querySelector('.div-screen');
    let isMouseDown = false;
    
    container.addEventListener('mousedown', (event) => {
        isMouseDown = true;
        paintDiv(event.target);
    });
    
    document.addEventListener('mouseup', () => {
        isMouseDown = false;
    });
    
    document.addEventListener('mousemove', (event) => {
        if (isMouseDown === true) {
            paintDiv(event.target);
        }
    });
    
    function paintDiv(target) {
        if (target.matches('.div-screen > div')) {
            target.classList.add('colored');
        }
    }
}

function getEraser(){
    const container = document.querySelector('.div-screen');
    let isMouseDown = false;
    
    container.addEventListener ('mousedown', (event) => {
        isMouseDown = true;
        eraseDiv(event.target);
    });

    document.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    document.addEventListener('mousemove', (event) => {
        if (isMouseDown === true) {
            eraseDiv(event.target);
        }
    });

    function eraseDiv(target) {
        if (target.matches('.div-screen > div')) {
            target.classList.remove('colored');
        }
    }
}

function clearAll(){
    const divs = document.querySelectorAll('.div-screen > div')
    divs.forEach(div => {
        div.classList.remove('colored');
    })
}

function getGridSize() {
    // Prompt the user for the new grid size
    let newSize = prompt("Enter Grid Size:");
    
    // Validate input and set the limit to 100
    newSize = Math.min(Math.max(parseInt(newSize) || 16, 1), 100);

    // Calculate the new size for each grid square
    const squareSize = 600 / newSize;

    // Clear the existing grid
    divScreenContainer.innerHTML = '';

    // Create a new grid with the specified size
    for (let i = 0; i < newSize * newSize; i++) {
        const createdDiv = document.createElement('div');
        createdDiv.style.flex = `0 0 ${100 / newSize}%`;
        createdDiv.style.aspectRatio = `1 / 1`;
        divScreenContainer.appendChild(createdDiv);
    }
}

const color = document.querySelector('#color');
    color.addEventListener('click', () => {
        getColor();
    });

const erase = document.querySelector('#eraser');
    erase.addEventListener('click', () => {
        getEraser();
    });

const clear = document.querySelector('#clear');
    clear.addEventListener('click', () =>{
        clearAll();
    });

const gridSize=document.querySelector('#grid-size');
    gridSize.addEventListener('click', () => {
        getGridSize();
    })