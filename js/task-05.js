const refs = {
    inputName: document.querySelector('#name-input'),
    outputName: document.querySelector('#name-output'),
}

refs.inputName.addEventListener('input', onInput)
function onInput(event) {
    if (event.currentTarget.value != "")
        return refs.outputName.textContent = event.currentTarget.value;
    refs.outputName.textContent = "Anonymous";
};
