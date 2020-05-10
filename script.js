const successMsg = document.querySelectorAll("div")[2];
const failMsg = document.querySelectorAll("div")[3];
const subButton = document.getElementById("subBtn");
const resetButton = document.getElementById("resetBtn");
const startDate = document.getElementById("startdt");
const endDate = document.getElementById("endDt");
const welcomeMsg = document.getElementById("helloMsg");

const submitTimesheet = () => {
    successMsg.classList.remove("hide-success");
    resetButton.disabled = true;
}

const setCurrentDate = (date) => date.toISOString().substring(0, 10);

let userName = prompt("whats your User Name?");
//welcomeMsg.innerText = "Hello, " + userName + "!";
welcomeMsg.textContent = `Hello, ${userName}!`

subButton.addEventListener("click", submitTimesheet);

var currentDate = new Date();
startDate.value = setCurrentDate(currentDate);


