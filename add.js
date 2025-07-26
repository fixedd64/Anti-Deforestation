const increaseBtn = document.getElementById("increaseTextBtn");
const decreaseBtn = document.getElementById("decreaseTextBtn");
let fontSize = 16;

increaseBtn.addEventListener("click", () => {
    fontSize += 2;
    document.body.style.fontSize = fontSize + "px";
});

decreaseBtn.addEventListener("click", () => {
    fontSize = Math.max(12, fontSize - 2);
    document.body.style.fontSize = fontSize + "px";
});

const themeBtn = document.getElementById("themeBtn");
let darkMode = false;

themeBtn.addEventListener("click", () => {
    darkMode = !darkMode;

    document.documentElement.style.setProperty(
        "--bg-color",
        darkMode ? "#1b1b1b" : "#ffffff"
    );
    document.documentElement.style.setProperty(
        "--text-color",
        darkMode ? "#ffffff" : "#1b1b1b" 
    );
    document.documentElement.style.setProperty(
    "--header-color",
    darkMode ? "#2e7d32" : "#00C896" 
    );
});

const form = document.querySelector(".feedback-form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const value = document.getElementById('response').value.trim();
    if (value) {
        alert("Дякуємо за ваш відгук!");
        form.reset();
    } else {
        alert("Будь ласка, введіть відгук.");
    }
});