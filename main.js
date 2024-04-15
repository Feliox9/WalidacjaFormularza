const userName = document.querySelector('#username');
const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const sendButton = document.querySelector('.send');
const resetButton = document.querySelector('.reset');

function showOrHideErrorMessage(input, message) {
    const box = input.parentElement;
    const errorMessage = box.querySelector('.Error');
    errorMessage.textContent = message;

}

function checkPasswords(password1, password2) {
    if (password1.value !== password2.value) {
        showOrHideErrorMessage(password2, 'Hasła są różne');
    } else {
        showOrHideErrorMessage(password2, '');
    }
}

function checkInputLength(input, minValue) {
    if (input.value.length < minValue) {
        showOrHideErrorMessage(input, `Pole powinno zawierać minimum ${minValue} znaków`);
    } else {
        showOrHideErrorMessage(input, '');
    }
}

function checkEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!(regex.test(email.value))) {
        showOrHideErrorMessage(email, 'Adres email nieprawidłowy');
    } else {
        showOrHideErrorMessage(email, '');
    }
}

function clearFormAndErrors() {
    userName.value = '';
    password1.value = '';
    password2.value = '';
    email.value = '';

    showOrHideErrorMessage(userName, '');
    showOrHideErrorMessage(password1, '');
    showOrHideErrorMessage(password2, '');
    showOrHideErrorMessage(email, '');
}

function checkPasswordComplexity(password1, password2) {
    let passwords = [password1, password2];
    passwords.forEach(password => {
        let hasLowerCase = /[a-z]/.test(password.value);
        let hasUpperCase = /[A-Z]/.test(password.value);
        let hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password.value);

        if (!hasLowerCase || !hasUpperCase || !hasSpecialChar) {
            showOrHideErrorMessage(password, 'Hasło powinno zawierać przynajmniej jedną małą literę, jedną dużą literę i jeden znak specjalny');
        } else {
            showOrHideErrorMessage(password, '');
        }
    });
}

resetButton.addEventListener('click', e => {
    e.preventDefault();
    clearFormAndErrors();
})

sendButton.addEventListener('click', e => {
    e.preventDefault();
    checkPasswords(password1, password2);
    checkInputLength(userName, 5);
    checkInputLength(password1, 8);
    checkPasswordComplexity(password1, password2);
    checkEmail(email);
})
//Zadania do dokończenia: napisać funkcję, która wyczyści pola formularzy i błędy w paragrafach
//zadania na 3.5: napisać funkcję, która sprawdza, czy w haśle jest znak specjalny, wielka i mała litera