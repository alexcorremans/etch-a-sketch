const container = document.querySelector('.container');

document.addEventListener('DOMContentLoaded', createGrid(16));

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearGrid);

const changeButton = document.querySelector('#change');
changeButton.addEventListener('click', promptDimension);

function createGrid(boxesPerSide) {
  // set CSS variable for each box's dimensions
  const length = 1/boxesPerSide * 100
  document.documentElement.style.setProperty('--length', length + '%');
  
  // add boxes to the page
  const boxCount = Math.pow(boxesPerSide, 2)
  for (let i = 0; i < boxCount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
  }

  // add hover effect
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => box.addEventListener('mouseenter', changeColor));
}

function changeColor() {
  this.classList.add('colored');
}

function clearGrid() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => box.classList.remove('colored'));
}

function deleteGrid() {
  clearGrid();
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function promptDimension() {
  const boxesPerSide = prompt("How many squares do you want per side?")
  deleteGrid();
  createGrid(boxesPerSide);
}

