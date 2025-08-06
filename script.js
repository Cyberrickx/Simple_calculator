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
function addValues() {
  const [x, y] = getValues();
  display.textContent = x + y;
}
function subValues() {
  const [x, y] = getValues();
  display.textContent = x - y;
}
function mulValues() {
  const [x, y] = getValues();
  display.textContent = x * y;
}
function divValues() {
  const [x, y] = getValues();
  if (y == 0) {
    window.alert("Cannot divide with 0");
  } else {
    display.textContent = x / y;
  }
}

add.onclick = addValues;
sub.onclick = subValues;
mul.onclick = mulValues;
div.onclick = divValues;