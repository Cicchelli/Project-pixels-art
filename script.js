function generateRandomColorRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
function generateRandomColor() {
  const colorPalette = document.querySelectorAll('.color');
  const createColor = [];
  for (let index = 1; index < colorPalette.length; index += 1) {
    const rgb = (generateRandomColorRGB());
    colorPalette[index].style.backgroundColor = rgb;
    createColor.push(rgb);
  }
  localStorage.setItem('colorPalette', JSON.stringify(createColor));
  return createColor;
}
// Req 4
const createRandomButton = () => {
  const generateRandomColorsButton = document.createElement('button');
  generateRandomColorsButton.textContent = 'Cores aleatórias';
  generateRandomColorsButton.id = 'button-random-color';
  generateRandomColorsButton.addEventListener('click', generateRandomColor);
  document.body.appendChild(generateRandomColorsButton);
};
// Req 5
const select = document.querySelectorAll('.color');
function restoreLocalStorage() {
  const restoreLocal = localStorage.getItem('colorPalette');
  const restoreStandart = JSON.parse(restoreLocal);
  if (!restoreLocal) {
    generateRandomColor();
  } else {
    for (let index = 1; index < select.length; index += 1) {
      select[index].style.backgroundColor = restoreStandart[index - 1];
    }
  }
}
// Req 6
const square = () => {
  for (let i = 0; i < 5; i += 1) {
    const createBoard = document.createElement('body');
    createBoard.setAttribute('id', 'pixel-board');
    document.body.appendChild(createBoard);
    for (index = 0; index < 5; index += 1) {
      const createPixels = document.createElement('body');
      createPixels.classList.add('pixel');
      createBoard.appendChild(createPixels);
      createPixels.style.backgroundColor = 'white';
    }
  }
};
square();


window.onload = () => {
  restoreLocalStorage();
  createRandomButton();
};
