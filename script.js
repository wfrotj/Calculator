const calculator = (() => {
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
