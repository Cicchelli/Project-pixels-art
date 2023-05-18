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
  for (let index = 1; index < colorBoxes.length; index += 1) {
    const ramdom = generateRandomColor();
    colorBoxes[index].style.backgroundColor = ramdom;
  }
});
