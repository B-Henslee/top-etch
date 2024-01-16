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

const divs = document.querySelectorAll('.div-screen > div')
    divs.forEach(div => {
        div.addEventListener('mouseenter', () => {
            div.classList.add('colored');
        })
    })