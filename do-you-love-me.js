function yes() {
  alert("Thank you!");
}

function no() {
  var height=window.innerHeight;
  var width=window.innerWidth;
  upArrowPressed();
  downArrowPressed();
  leftArrowPressed();
  rightArrowPressed();
}

function upArrowPressed() {
  var randomNumber=100*Math.random();
  var element = document.getElementById("noButton");
  element.style.top = parseInt(element.style.top)-parseInt(randomNumber)+'px';
}

function downArrowPressed() {
  var randomNumber=100*Math.random();
  var element = document.getElementById("noButton");
  element.style.top = parseInt(element.style.top)+parseInt(randomNumber)+'px';
}

function leftArrowPressed() {
  var randomNumber=100*Math.random();
  var element = document.getElementById("noButton");
  element.style.left = parseInt(element.style.left)-parseInt(randomNumber)+'px';
}

function rightArrowPressed() {
  var randomNumber=100*Math.random();
  var element = document.getElementById("noButton");
  element.style.left = parseInt(element.style.left) + parseInt(randomNumber) + 'px';
}
