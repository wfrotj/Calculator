const numberButtons = document.querySelectorAll(".is-num");
const operatorButtons = document.querySelectorAll(".is-operator");
const clearButton = document.querySelector(".is-clear");
const largeDisplay = document.querySelector(".large-display");
const smallDisplay = document.querySelector(".small-display");
const btnEquals = document.querySelector(".is-equals");
const deleteBtn = document.querySelector("delete");

let currentInput = "";
let previousInput = "";
let operator = undefined;

function clear() {
  currentInput = "";
  previousInput = "";
  operator = undefined;
}

function updateDisplay() {
  if (currentInput === "" && largeDisplay.value === "") {
    largeDisplay.value = "";
  } else {
    largeDisplay.value = currentInput;
  }

  if (operator !== undefined) {
    smallDisplay.value = previousInput + operator;
  } else {
    smallDisplay.value = "";
  }
}

function chooseOperator(chosenOperator) {
  if (currentInput === "") return;
  if (previousInput !== "") compute();

  operator = chosenOperator;
  previousInput = currentInput;
  currentInput = "";
}

function appendNumber(number) {
  currentInput += number;
}

function compute() {
  let total = 0;
  const previousNumber = parseInt(previousInput);
  const currentNumber = parseInt(currentInput);

  switch (operator) {
    case "+":
      total = previousNumber + currentNumber;
      break;
    case "−":
      total = previousNumber - currentNumber;
      break;
    case "×":
      total = previousNumber * currentNumber;
      break;
    case "÷":
      total = previousNumber / currentNumber;
      break;
    default:
      return "";
  }

  currentInput = total;
  previousInput = "";
  operator = undefined;
}

numberButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (largeDisplay.value === "" && event.target.textContent === "0") return;

    appendNumber(event.target.textContent);
    updateDisplay();
  });
});

clearButton.addEventListener("click", () => {
  clear();
  updateDisplay();
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    chooseOperator(event.target.textContent);
    updateDisplay();
  });
});

btnEquals.addEventListener("click", () => {
  compute();
  updateDisplay();
});
