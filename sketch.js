const container = document.querySelector('.container');

document.addEventListener('DOMContentLoaded', createGrid(16));

const colorInput = document.querySelector('#color');
colorInput.addEventListener('change', changeColor);

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearGrid);

const changeButton = document.querySelector('#change');
changeButton.addEventListener('click', changeDimension);

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
  boxes.forEach(box => box.addEventListener('mouseenter', fillColor));
  boxes.forEach(box => box.addEventListener('touchstart', fillColor));
}

function fillColor() {
  this.classList.add('colored');
}

function changeColor() {
  document.documentElement.style.setProperty('--color', this.value);
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

function changeDimension() {
  let input = prompt("How many squares do you want per side (max 100)?")
  while (!input || Math.abs(parseInt(input)) > 100) {
    console.log(input);
    input = prompt("Please choose a number of squares below 100:");
  }
  const boxesPerSide = Math.abs(parseInt(input));
  deleteGrid();
  createGrid(boxesPerSide);
}

