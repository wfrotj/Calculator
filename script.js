/*const calculator = (() => {
  const add = (a, b) => a + b;
  const minus = (a, b) => a - b;
  const times = (a, b) => a * b;
  const divide = (a, b) => a / b;

  return { add, minus, times, divide };
})();

const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let head = document.getElementById("head");
    head.textContent = button.innerText;
  });
});
*/

const numberButtons = document.querySelectorAll(".is-num");
const largeDisplay = document.querySelector(".large-display");
const operatorsButton = document.querySelectorAll(".operators");
const clearButton = document.querySelector(".clear");
const smallDisplay = document.querySelector(".small-display");
const resetButton = document.querySelector(".reset");
let currentInput = "";
let previousInput = "";

numberButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    currentInput += event.target.textContent;
    largeDisplay.textContent = currentInput;
  });
});

clearButton.addEventListener("click", () => {
  currentInput = "";
  largeDisplay.textContent = currentInput;
});
resetButton.addEventListener("click", () => {
  currentInput = "";
  largeDisplay.textContent = currentInput;
  previousInput = "";
  smallDisplay.textContent = previousInput;
});
operatorsButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    smallDisplay.textContent += largeDisplay.textContent + button.innerHTML;
    currentInput = "";
    largeDisplay.textContent = currentInput;
  });
});

function clearInputs() {
  currentInput = "";
}
