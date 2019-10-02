module.exports = function multiply(first, second) {
  let production = [];
  let firstNumber = first.split("").reverse();
  let secondNumber = second.split("").reverse();
  for (let i = 0; i < firstNumber.length; i++) {
    for (let j = 0; j < secondNumber.length; j++) {
      let sum = firstNumber[i] * secondNumber[j];
      production[i + j] = production[i + j] ? production[i + j] + sum : sum;
    }
  }
  for (let i = 0; i < production.length; i++) {
    let number = production[i] % 10;
    let transfer = Math.floor(production[i] / 10);
    production[i] = number;

    if (production[i + 1]) production[i + 1] += transfer;
    else if (transfer != 0) production[i + 1] = transfer;
  }
  let result = production.reverse().join("");
  return result;
};
