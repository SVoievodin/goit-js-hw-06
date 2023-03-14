const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i++) {
    let liEl = document.createElement('li');
    liEl.className = '.item';
  liEl.textContent = ingredients[i];
    ulEl.appendChild(liEl);
};

// console.log(ulEl);




