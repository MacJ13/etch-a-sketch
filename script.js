const gridElement = document.querySelector('.grid');

const gridSizeButton = document.querySelector('.btn-grid');

const colorButton = document.querySelectorAll ('.btn-color');

function createGrid(size){
    gridElement.innerHTML = ''
    const number = size || 16;

    gridElement.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    gridElement.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    gridElement.style.gap = '1px';

    for(let i = 0; i< number*number; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gridElement.appendChild(cell);
    }
}

createGrid();