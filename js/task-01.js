const categoriesEl = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesEl.children.length}`);

const itemsEl = categoriesEl.querySelectorAll(".item");
// console.log(itemsEl);

itemsEl.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.childElementCount}`);
});


