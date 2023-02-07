const gridElement = document.querySelector('.grid');

const gridSizeButton = document.querySelector('.btn-grid');

const colorButton = document.querySelectorAll ('.btn-color');

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



// we create event listener to call changeGridsize()
gridSizeButton.addEventListener('click', changeGridSize);


createGrid();