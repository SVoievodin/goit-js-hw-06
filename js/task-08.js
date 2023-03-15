
const form = document.querySelector('.login-form');

form.addEventListener('submit', onLogin);
console.log(form)

function onLogin(event) {
    event.preventDefault();  // не перезавантажує сторінку

    const dataFromForm = {
        email: event.currentTarget.elements.email.value,
        password: event.currentTarget.elements.password.value,
    }

    if (dataFromForm.email === "" || dataFromForm.password === "") {
        return alert("Будь ласка, заповніть всі поля форми");
    }

    console.log(dataFromForm);
    event.currentTarget.reset();
}


//* const formData = new FormData(event.currentTarget); //збір для відправки даних на сервер (об’єкт з всіма заповненими інпутами (назва: значення))

//!Виконано без elements
// function onLogin(event) {
//     event.preventDefault();  // не перезавантажує сторінку
//     const {
//         elements: { email, password }
//     } = event.currentTarget;

//     if (email.value === "" || password.value === "") {
//         return alert("Будь ласка, заповніть всі поля форми");
//     }

//     console.log(`Login: ${email.value}, Password: ${password.value}`);
//     event.currentTarget.reset();

// }