const btnGen = document.querySelector('button.change-color');
const txtGen = document.querySelector('span.color');
const body = document.querySelector('body');

btnGen.addEventListener('click', colorationFn)

function colorationFn() {
  txtGen.textContent = `${getRandomHexColor()}`;
  body.style.backgroundColor = `${getRandomHexColor()}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

