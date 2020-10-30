var defaultValue = 0;
var currentResult = defaultValue;
// logEnteries

var logEnteries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteAnswer(operator, resultBefore, calcNumber) {
  var calculationDescription = `${resultBefore}  ${operator}  ${calcNumber}`;
  outputResult(currentResult, calculationDescription);
}

function writeLog(operator, prevResult, number, finalResult) {
  var logentry = {
    operator: operator,
    prevResult: prevResult,
    number: number,
    finalResult: finalResult,
  };

  logEnteries.push(logentry);
  console.log(logEnteries);
  //
}

//writelog create logentery object

// ADD + - / *

function Add() {
  var enteredNumber = getUserInput();
  var initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteAnswer("+", initialResult, enteredNumber);

  writeLog("Add", initialResult, enteredNumber, currentResult);
}

// SUB

function Sub() {
  var enteredNumber = getUserInput();
  var initialResult = currentResult;

  currentResult = currentResult - enteredNumber;
  createAndWriteAnswer("-", initialResult, enteredNumber);
  writeLog("sub", initialResult, enteredNumber, currentResult);
}

addition.addEventListener("click", Add);
subtraction.addEventListener("click", Sub);

addition.addEventListener("click", clearField);
subtraction.addEventListener("click", clearField);

function clearField() {
  userInput.value = null;
}
