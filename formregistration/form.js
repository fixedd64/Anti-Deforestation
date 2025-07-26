// let users = [];

// const form = document.getElementById('registrationForm');
// const userList = document.getElementById('userList');

// form.onsubmit = function(event) {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     // Перевірка валідності
//     if (!isValidName(name) || !isValidPassword(password)) {
//         return;
//     }

//     const newUser = {
//         name: name,
//         email: email,
//         password: password
//     };

//     users.push(newUser);
//     form.reset();
//     updateUserList();
//     console.log(users);
// };

// function updateUserList() {
//     userList.innerHTML = '';
//     for (let i = 0; i < users.length; i++) {
//         const user = users[i];
//         const listItem = document.createElement('li');
//         listItem.textContent = 
// user.name
//     + ' ' + 
// user.email
// ;
//         userList.appendChild(listItem);
//     }
// }

// function isValidName(name) {
//     if (name.length < 3) {
//         alert('Імʼя має бути не менше 2 символів!');
//         return false;
//     }
//     return true;
// }

// function isValidPassword(password) {
//     if (password.length < 6) {
//         alert('Пароль повинен бути щонайменше 6 символів');
//         return false;
//     }
//     return true;
// } 

const form = document.getElementById('registrationForm');

const MIN_NAME_LENGTH = 3;
const  MIN_PASSWORD_LENGTH = 6;
const EMAIL_PATTERN =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.onsubmit = function (event) {
event.preventDefault();
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
if (name.length < MIN_NAME_LENGTH) {
alert("Ім'я повинне містити не менше " + MIN_NAME_LENGTH + " символів.");
return;
}

if (!EMAIL_PATTERN.test(email)) {
alert("Введіть коректний email-адрес.");
return;
}

if (password.length < MIN_PASSWORD_LENGTH) {
alert("Пароль повинен бути довжиною мінімум " + MIN_PASSWORD_LENGTH + " символів.");
return;
}
alert("Форма успішно відправлена!");
form.reset();
};