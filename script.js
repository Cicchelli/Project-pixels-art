function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const ramdom = `rgb(${red}, ${green}, ${blue})`;
  return ramdom;
}

const colorBoxes = document.querySelectorAll('.color');

const generateRandomColorsButton = document.createElement('button');
generateRandomColorsButton.id = 'button-random-color';
generateRandomColorsButton.textContent = 'Cores aleatórias';
document.body.appendChild(generateRandomColorsButton);

generateRandomColorsButton.addEventListener('click', () => {
  console.log(generateRandomColor());
  const ramdomColor = [];
  for (let index = 1; index < colorBoxes.length; index += 1) {
    const ramdom = generateRandomColor();
    colorBoxes[index].style.backgroundColor = ramdom;
    ramdomColor.push(ramdom);
  }
  return ramdomColor;
});

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
