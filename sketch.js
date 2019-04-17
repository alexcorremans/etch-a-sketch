// create boxes

const container = document.querySelector('.container');
const boxesPerSide = 16
const boxCount = Math.pow(boxesPerSide, 2)

for (let i = 0; i < boxCount; i++) {
  const box = document.createElement('div');
  box.classList.add('box');
  container.appendChild(box);
}

// add hover effect

function changeColor() {
  this.classList.add('colored');
}

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => box.addEventListener('mouseenter', changeColor));

// clear grid

function clearGrid() {
  boxes.forEach(box => box.classList.remove('colored'));
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearGrid);

// change dimensions

