// // prompt("Вкажіть своє імя?")

// // confirm("Ви впевнені, що хочете видалити цей файл?")

// // console.log("Hello")

// // const name = 'Іван'

// // const lastname = 'Сірко'

// // let a = 25;

// // let b = 35;

// // const sum = a + b;

// // console.log(sum)

// // let name = 'Богдан';

// // let text = 'hello '

// // console.log(text + name)

// // let first_num = +prompt("Назвіть перше число")

// // let second_num = +prompt("Назвіть друге число")

// // let adding = first_num + second_num;

// // console.log(adding)

// // let name = prompt('What is your name')

// // alert('Hello '+ name)

// // function sumNumbers(a, b) {
//     // return a + b;
// // }

// // console.log(sumNumbers(2, 3));

// // console.log(sumNumbers(10, 20));

// // function helloUser(name) {
//     // console.log('Hello, ' + name + '!');
// // }

// // helloUser('Mary')

// // function sqNumber(number) {
//     // return number * number
// // }

// // console.log(sqNumber(4));

// // function sumNumbers(a, b) {
//     // return a + b;
// // }

// // console.log(sumNumbers(5,7));

// // function sayHello() {
//     // alert('Hello, world!')
// // }

// // function welcomeMessage() {
//     // alert('Web downloaded')
// // }

// // function keyDown() {
//     // console.log('button pressed');
// // }

// // function keyUp() {
//     // console.log('button released')
// // }

// // function showValue(input) {
//     // alert('you entered: ' + input.value)
// // }

// // const resultMessage = document.getElementById('resultMessage');
// // let attempts = 0;
// // let randomNumber = 0;
// // function generateRandomNumber(min, max) {
// //     randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
// //     console.log("Згенероване випадкове число:", randomNumber);
// // }
// // generateRandomNumber(1, 100);

// // // let alert('Тут буде результат перевірки введеного числа') = checkGuess();

// // function checkGuess() {
// //     const userGuess=parseInt(document.getElementById('guessField').value);
// // let resultMessage = document.getElementById('resultMessage')


// // // let randomNumber = 0

// // attempts++;
// // if (userGuess < randomNumber) {
// //     resultMessage.textContent = "Замало. Спробуйте ще!";
// //     resultMessage.style.color = "red";
// // }

// // else if (userGuess > randomNumber) {
// //     resultMessage.textContent = "Забагато. Спробуйте ще!";
// //     resultMessage.style.color = "red";
// // }

// // else {
// //     resultMessage.textContent = "Вітаю! Ви вгадали число! Кількість спроб:" + " " + attempts;
// //     resultMessage.style.color = "green";
// // }
// // }

// // function restartGame() {
// //     attempts = 0;
// //     generateRandomNumber(1, 100);
// //     document.getElementById('guessField').value = '';
// //     document.getElementById('guessField').disabled = false;
// //     document.getElementById('resultMessage').textContent = '';
// // }

// // document.getElementById('restartBtn').addEventListener('click', restartGame);

// // window.onresize = function() {
// // console.log("Нова ширина вікна: " + window.innerWidth + "px");
// // console.log("Нова висота вікна: " + window.innerHeight + "px");
// // };

// // function updateStyle()

// // function updateTitle() {
// //     const width = window.innerWidth;

// //     if (width < 576) {
// //     document.title = "Космос у кишені 🌌";
// //     } else if (width >= 576 && width < 992) {
// //     document.title = "Досліджуй Всесвіт 🚀";
// //     } else {
// //     document.title = "Найбільша таємниця — Космос 🪐";
// //     }
// // }

// // updateTitle();

// window.addEventListener("resize", updateTitle);

// let users =[]
// const form = document.getElementById('registrationForm');
// const userList = document.getElementById('userList');
// form.onsubmit = function(event) {
//     event.preventDafault();
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const newUser = {
//         name: name,
//         email: email,
//         password: password
//     };
//     users.push(newUser);
//     form.reset();
//     console.log(users)
//     updateUserList();
// };
// function updateUserList() {
//     userList.innerHTML = '';
//     for (let i = 0; i < users.length; i++) {
//         const user = users[i];
//         const listItem = document.createElement('li');
//         listItem.textContent  = user.name + " " + user.email;
//         userList.appendChild(listItem)
//     }
// };

// let users = [];
// const form = document.getElementById('registrationForm');
// const userList = document.getElementById('userList');
// form.onsubmit = function(event) {
// event.preventDefault();
// const name = document.getElementById('name').value;
// const email = document.getElementById('email').value;
// const password = document.getElementById('password').value;
// const newUser = {
// name: name,
// email: email,
// password: password
// };
// users.push(newUser);
// form.reset();
// console.log(users)
// updateUserList();
// };
// function updateUserList() {
// userList.innerHTML = '';
// for (let i = 0; i < users.length; i++) {
// const user = users[i];
// const listItem = document.createElement('li');
// listItem.textContent = user.name + " " + user.email;
// userList.appendChild(listItem);
// }
// };

// function isValidName(name) {
//     if (!isValidName(name)) {
//     alert('В імені має бути не менше 2 символів!');
//     return name.lenght > 2;
// }
    
    
// }

// function isValidPassword(password) {
//     if (isValidPassword(password)) {
//     alert('Пароль повинен бути щонайменше 6 символів');
//     return password.lenght >= 6;
// }
    
// }





// let taskInput = document.getElementById('taskInput');
// let addTaskBtn = document.getElementById('addTaskBtn');
// let taskList = document.getElementById('taskList');
// addTaskBtn.onclick = function () {
// let task = taskInput.value;
// let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
// tasks.push(task);
// localStorage.setItem('tasks', JSON.stringify(tasks));
// addTaskToDOM(task);
// taskInput.value = '';
// };
// function addTaskToDOM(task) {
// let li = document.createElement('li');
// li.innerHTML = task ;
// taskList.appendChild(li);
// let deleteButton = document.createElement('button');
// deleteButton.textContent = 'Видалити';

// deleteButton.onclick=function () {
// removeTask(li, task);
// };
// li.appendChild(deleteButton);
// taskList.appendChild(li);
// }
// function removeTask(li, task) {
// let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
// for (let i = 0; i < tasks.length; i++) {
// if (tasks[i] === task) {
// tasks.splice(i, 1);
// break;
// }
// }
// localStorage.setItem('tasks', JSON.stringify(tasks));
// li.remove();
// }
// window.onload = function () {
// let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
// for (let i = 0; i < tasks.length; i++) {
// addTaskToDOM(tasks[i]);
// }
// };

// Добавив "||" тому що показувало червоним в 213 і 233рр.

// const car = document.getElementById("car")
// let leftPosition = 0;

// function moveCar() {
//     leftPosition += 5;
//     car.style.left = leftPosition + "px";
//     requestAnimationFrame(moveCar);
// }
// requestAnimationFrame(moveCar);

// let startButton = getElementById('startButton');
// let box = getElementById('box')

// startButton.onclick=function() {
//     box.style.animation = 'move 2s'
//     setTimeout(function() {
//         box.style.animation ="";
//     }, 2000);
// }


// const startButton = document.getElementById('startButton')
// const box = document.getElementById('box')

// startButton.addEventListener("click", () => {
//     box.style.transform = "translateX(300px) scale(1.5)"
//     box.style.backgroundColor = "blue";
    
//     setTimeout(() => {
//         box.style.transform ="translateX(0) scale(1)";
//         box.style.backgroundColor = "green";
//     }, 2000);
// });




