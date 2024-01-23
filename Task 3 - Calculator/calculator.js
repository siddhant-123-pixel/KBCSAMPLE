document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let result = 0;
  
    function clearDisplay() {
      currentInput = '';
      operator = '';
      display.value = '';
    }
  
    function calculate() {
      const num = parseFloat(currentInput);
      if (operator === '+') {
        result += num;
      } else if (operator === '-') {
        result -= num;
      } else if (operator === '*') {
        result *= num;
      } else if (operator === '/') {
        result /= num;
      } else {
        result = num;
      }
      display.value = result;
      currentInput = '';
    }
  
    document.querySelectorAll('.number').forEach(function (button) {
      button.addEventListener('click', function () {
        currentInput += button.innerText;
        display.value = currentInput;
      });
    });
  
    document.querySelectorAll('.operator').forEach(function (button) {
      button.addEventListener('click', function () {
        if (currentInput !== '') {
          calculate();
        }
        operator = button.innerText;
      });
    });
  
    document.getElementById('equals').addEventListener('click', function () {
      if (currentInput !== '') {
        calculate();
      }
    });
  
    document.getElementById('clear').addEventListener('click', function () {
      clearDisplay();
    });
  
    document.getElementById('decimal').addEventListener('click', function () {
      if (currentInput.indexOf('.') === -1) {
        currentInput += '.';
        display.value = currentInput;
      }
    });
  });
  