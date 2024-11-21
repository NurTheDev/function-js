function sum(num1 = 0, num2 = 0, num3 = 0, num4 = 0) {
  return num1 + num2 + num3 + num4;
}

function subtract(num1, num2, num3, num4) {
  return num1 - num2 - num3 - num4;
}

function multiply(num1, num2, num3, num4) {
  return num1 * num2 * num3 * num4;
}

function divide(num1, num2, num3, num4) {
  return num1 / num2 / num3 / num4;
}

function modulo(num1, num2, num3, num4) {
  return ((num1 % num2) % num3) % num4;
}

function exponential(num1, num2, num3, num4) {
  return num1 ** (num2 ** (num3 ** num4));
}
const userInput1 = parseInt(prompt("Enter the first number:"));
const userInput2 = parseInt(prompt("Enter the second number:"));
const userInput3 = parseInt(prompt("Enter the third number:"));
const userInput4 = parseInt(prompt("Enter the fourth number:"));
sumResult = sum(userInput1, userInput2, userInput3, userInput4);
subtractResult = subtract(userInput1, userInput2, userInput3, userInput4);
multiplyResult = multiply(userInput1, userInput2, userInput3, userInput4);
divideResult = divide(userInput1, userInput2, userInput3, userInput4);
moduloResult = modulo(userInput1, userInput2, userInput3, userInput4);
exponentialResult = exponential(userInput1, userInput2, userInput3, userInput4);
let array = [
  sumResult,
  subtractResult,
  multiplyResult,
  divideResult,
  moduloResult,
  exponentialResult,
];
for (let i = 0; i < array.length; i++) {
  if (sumResult === array[i]) {
    document.getElementById(
      "output"
    ).innerHTML += `total sum is = ${array[i]} <br />`;
  } else if (multiplyResult === array[i]) {
    document.getElementById(
      "output"
    ).innerHTML += `total multiplication is = ${array[i]} <br />`;
  } else if (subtractResult === array[i]) {
    document.getElementById(
      "output"
    ).innerHTML += `total subtract is = ${array[i]} <br />`;
  } else if (divideResult === array[i]) {
    document.getElementById(
      "output"
    ).innerHTML += `total division is = ${array[i]} <br />`;
  } else if (moduloResult === array[i]) {
    document.getElementById(
      "output"
    ).innerHTML += `total modulo is = ${array[i]} <br />`;
  } else if (exponentialResult === array[i]) {
    document.getElementById(
      "output"
    ).innerHTML += `total exponential is = ${array[i]} <br />`;
  }
}
