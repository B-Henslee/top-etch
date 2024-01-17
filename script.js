const sketchDivs = document.querySelector('.color-screen');
// Create a container div with the div-screen class
const divScreenContainer = document.createElement('div');
divScreenContainer.classList.add('div-screen');
// Append the container to the color-screen
sketchDivs.appendChild(divScreenContainer);
// Create 16x16 div elements and append them to the container
for (let i = 0; i < 256; i++) {
    const createdDiv = document.createElement('div');
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

const color = document.querySelector('#color');
color.addEventListener('click', () => {
    getColor();
});

const erase = document.querySelector('#eraser');
erase.addEventListener('click', () => {
    getEraser();
});