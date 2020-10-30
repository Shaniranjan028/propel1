var userInput = document.getElementById("input-number");
var addition = document.getElementById("btn-add");
var subtraction = document.getElementById("btn-subtract");

var currentCalculation = document.getElementById("current-calculation");
var currentResultOutput = document.getElementById("current-result");

function outputResult(result, text) {
  currentCalculation.textContent = text;
  currentResultOutput.textContent = result;
}
