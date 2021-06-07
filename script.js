let number = 0
let number2 = 0
let number3 = 0
let go = 0

document.getElementById('button').addEventListener('click', calculate)
document.getElementById('input1').addEventListener('click', color)
document.getElementById('input2').addEventListener('click', color1)
document.getElementById('input3').addEventListener('click', color2)

function calculate () {
  document.getElementById('input3').style.backgroundColor = "white";
  document.getElementById('input2').style.backgroundColor = "white"; /* Sets your background color to white */
  document.getElementById('input1').style.backgroundColor = "white";
  number = document.getElementById('input1').value
  number2 = document.getElementById('input2').value // Gets the values of all 3 inputs
  number3 = document.getElementById('input3').value
  number = parseInt(number)
  number2 = parseInt(number2) // Makes the values numbers
  number3 = parseInt(number3)
  go = (number + number2) / 2 * number3 // Calculates the answer
  document.getElementById('answer').innerHTML = go // Shows the answer
}

function color () {
  document.getElementById('input1').style.backgroundColor = "lightblue"; // Sets color for when boxes are clicked
  document.getElementById('input2').style.backgroundColor = "white";
  document.getElementById('input3').style.backgroundColor = "white";
}

function color1 () {
  document.getElementById('input2').style.backgroundColor = "lightblue"; // Sets color for when boxes are clicked
  document.getElementById('input1').style.backgroundColor = "white";
  document.getElementById('input3').style.backgroundColor = "white";
}

function color2 () {
  document.getElementById('input3').style.backgroundColor = "lightblue"; // Sets color for when boxes are clicked
  document.getElementById('input2').style.backgroundColor = "white";
  document.getElementById('input1').style.backgroundColor = "white";
}
