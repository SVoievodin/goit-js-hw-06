const valueEl = document.querySelector('#value');
const incrEl = document.querySelector('[data-action="increment"]');
const decrEl = document.querySelector('[data-action="decrement"]');

const counter = {
    value: 0,
    incrFn() { this.value += 1 },
    decrFn() { this.value -= 1 },
}

incrEl.addEventListener('click', () => {
    counter.incrFn();
    valueEl.textContent = counter.value;
    console.log(counter.value);
});

decrEl.addEventListener('click', () => {
    counter.decrFn();
    valueEl.textContent = counter.value;
    console.log(counter.value);
});

