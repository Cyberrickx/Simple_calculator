// const clear = document.getElementById("clear");
// const plusMinus = document.getElementById("plus-minus");
// const percent = document.getElementById("percent");
// const divide = document.getElementById("divide");
// const seven = document.getElementById("seven");
// const eight = document.getElementById("eight");
// const nine = document.getElementById("nine");
// const multiply = document.getElementById("multiply");
// const four = document.getElementById("four");
// const five = document.getElementById("five");
// const six = document.getElementById("six");
// const subtract = document.getElementById("subtract");
// const one = document.getElementById("one");
// const two = document.getElementById("two");
// const three = document.getElementById("three");
// const add = document.getElementById("add");
// const zero = document.getElementById("zero");
// const decimal = document.getElementById("decimal");
// const equals = document.getElementById("equals");
const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}


function calculate() {
    try {
      display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error"
    }
}

