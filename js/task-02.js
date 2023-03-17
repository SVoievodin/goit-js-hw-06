const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector("#ingredients");
const listIngredients = []
function createList(list) {
  for (let i = 0; i < list.length; i++) {
    let liEl = document.createElement('li');
    liEl.className = 'item';
    liEl.textContent = list[i];
    listIngredients.push(liEl);
    // console.log(liEl)
    };
}
createList(ingredients)
ulEl.append(...listIngredients);

// console.log(listIngredients);
// ulEl.append(...list);

// console.log(ulEl);


// for (let i = 0; i < ingredients.length; i++) {
//   let liEl = document.createElement('li');
//   liEl.className = 'item';
//   liEl.textContent = ingredients[i];
//   ulEl.appendChild(liEl);
// };