
const control = document.querySelector('#controls');
const input = document.querySelector('input');
const createBtb = control.children[1];
const destroyBtn = control.children[2];
const boxes = document.querySelector('#boxes')

// console.log(control);
// console.log(input);
// console.log(createBtb);
// console.log(destroyBtn);

createBtb.addEventListener('click', createFn);
destroyBtn.addEventListener('click', () => boxes.innerHTML = '');

function createFn() {
  boxes.innerHTML = '';
  for (let i = 0; i < input.value; i++) {
    const box = document.createElement('div');

    if (i === 0) {
      box.style.width = '30px';
      box.style.height = '30px';
    } else {
      const prevBox = boxes.children[i - 1];
      const prevWidth = parseInt(prevBox.style.width);
      const prevHeight = parseInt(prevBox.style.height);
      box.style.width = `${prevWidth + 10}px`;
      box.style.height = `${prevHeight + 10}px`;
    }
    box.style.display = 'inline-block';
    box.style.border = '1px solid';
    box.style.borderRadius = '5px';
    box.style.borderColor = 'black';
    box.style.margin = '3px';
    box.style.textAlign = 'center';
    box.textContent = [i + 1];
    box.style.backgroundColor = `${getRandomHexColor()}`;

    boxes.appendChild(box);
    // console.log(box)
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
