let result = document.getElementById("result");

function appendToResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function calculate(operator) {
  if (operator === "%") {
    result.value = result.value / 100;
  } else if (operator === "=") {
    result.value = eval(result.value);
  } else {
    result.value += operator;
  }
}
