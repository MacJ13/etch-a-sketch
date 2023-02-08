const gridElement = document.querySelector('.grid');

const gridSizeButton = document.querySelector('.btn-grid');

const colorButton = document.querySelectorAll ('.btn-col');

let colorOption;

function createGrid(size){
    // clear our grid
    gridElement.innerHTML = ''
    

    // set the number of columns and rows
    // in our grid
    const number = size || 16;

    // calculate how many space we need for our cells
    // in grid system
    gridElement.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    gridElement.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    gridElement.style.gap = '1px';

    // loop over the size of grid
    for(let i = 0; i<(number*number); i++){
        // create cell element
        const cell = document.createElement('div');
        cell.classList.add('cell');

        // add create cell element to grid 
        gridElement.appendChild(cell);
    }
}

// change number of square size in the grid
function changeGridSize(){
    // we declare variable and assign prompt
    const size = +prompt('Type size of square per side \n(not greater than 60):');
    
    // if value is too high we set to 60 forexample
    if(size > 60 || size <= 0) {
        alert('You give wrong size!! Please try again');
        return;
    }

    //pass the variable to createGrid();
    createGrid(size);

}

function getColorOption(e){
    // we get from button color element value from data- attribute
    const data = e.target.getAttribute('data-btn');

    // assign to global variable 'colorOption'
    colorOption = data;
}

function drawGrid(e){
    if(!e.target.classList.contains('cell')) return;

    const cellElement = e.target;

    if(colorOption === 'rgb') {
        cellElement.style.backgroundColor = getRandomColor();
    }

    else {
        // change square background color to black
        cellElement.style.backgroundColor = 'rgb(0, 0, 0)';
    }
}

function getRandomColor(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`;
}

// with this button we can choose size of grid squares
gridSizeButton.addEventListener('click', changeGridSize);

// we create event listener to choose what color we want to draw on grid
colorButton.forEach(button => button.addEventListener('click', getColorOption));

//event draw on the grid squares
gridElement.addEventListener('mouseover', drawGrid);


createGrid();