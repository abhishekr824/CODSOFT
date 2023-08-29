let currentInput = '';
let currentOperator = '';
let firstOperand = '';
let display = document.getElementById('display');

function clearDisplay() {
  currentInput = '';
  currentOperator = '';
  firstOperand = '';
  display.textContent = '0';
}

function appendNumber(number) {
  currentInput += number;
  display.textContent = currentInput;
}

function appendOperator(operator) {
  if (currentOperator === '') {
    firstOperand = currentInput;
    currentInput = '';
    currentOperator = operator;
  }
}

function calculate() {
  let result;
  switch (currentOperator) {
    case '+':
      result = parseFloat(firstOperand) + parseFloat(currentInput);
      break;
    case '-':
      result = parseFloat(firstOperand) - parseFloat(currentInput);
      break;
    case '*':
      result = parseFloat(firstOperand) * parseFloat(currentInput);
      break;
    case '/':
      result = parseFloat(firstOperand) / parseFloat(currentInput);
      break;
    default:
      return;
  }
  display.textContent = result;
  currentInput = result;
  currentOperator = '';
  firstOperand = '';
}

clearDisplay();
