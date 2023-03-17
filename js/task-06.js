const inputRef = document.querySelector('#validation-input');
// console.log(inputRef.dataset.length);

function validate(event) {
    if (event.currentTarget.value.length === Number(inputRef.dataset.length))
        return inputRef.classList.add('valid') || inputRef.classList.remove('invalid');
    return inputRef.classList.add('invalid') || inputRef.classList.remove('valid');
   
    // console.log(event.currentTarget.value.length)
}
inputRef.addEventListener('blur', validate);






//* _________У мене працює нормально___________
// function validate(event) {
//     if (event.currentTarget.value.length != inputRef.dataset.length)
//         return inputRef.classList.add('invalid') || inputRef.classList.remove('valid');
//     inputRef.classList.replace('invalid', 'valid');
//     // console.log(event.currentTarget.value.length)
// }



// ______Варіант з "не більше 6"____
// function validate(event) {
//     if (event.currentTarget.value.length < inputRef.dataset.length)
//         return inputRef.classList.remove('invalid') || inputRef.classList.add('valid');
//     inputRef.classList.replace('valid', 'invalid');
//     // console.log(event.currentTarget.value.length)
// }
