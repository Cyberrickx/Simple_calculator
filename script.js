let add = document.getElementById("addBtn");
let sub = document.getElementById("subBtn");
let mul = document.getElementById("mulBtn");
let div = document.getElementById("divBtn");
let display = document.getElementById("countLabel");

function getValues() {
  const x = Number(document.getElementById("num1").value);
  const y = Number(document.getElementById("num2").value);
  return [x, y];
}

function calculator(operations) {
  let [x, y] = getValues();
  switch (operations) {
    case "add":
      display.textContent = x + y;
      break;
    case "sub":
      display.textContent = x - y;
      break;
    case "mul":
      display.textContent = x * y;
      break;
    case "div":
      if (y == 0) {
      window.alert("Cannot divide with 0");
      }
      else {
      display.textContent = x / y;
      }
      break;
    default:
      window.alert("Invaild Operation");
  }
}

add.addEventListener("click", () => calculator("add"));
sub.addEventListener("click", () => calculator("sub"));
mul.addEventListener("click", () => calculator("mul"));
div.addEventListener("click", () => calculator("div"));
