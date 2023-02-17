var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

// For 1st dice

if (randomNumber1 == "1") {
  document.getElementById("image1").src = "images/dice1.png";
} else if (randomNumber1 == "2") {
  document.getElementById("image1").src = "images/dice2.png";
} else if (randomNumber1 == "3") {
  document.getElementById("image1").src = "images/dice3.png";
} else if (randomNumber1 == "4") {
  document.getElementById("image1").src = "images/dice4.png";
} else if (randomNumber1 == "5") {
  document.getElementById("image1").src = "images/dice5.png";
}

// for 2nd dice

if (randomNumber2 == "1") {
  document.getElementById("image2").src = "images/dice1.png";
} else if (randomNumber2 == "2") {
  document.getElementById("image2").src = "images/dice2.png";
} else if (randomNumber2 == "3") {
  document.getElementById("image2").src = "images/dice3.png";
} else if (randomNumber2 == "4") {
  document.getElementById("image2").src = "images/dice4.png";
} else if (randomNumber2 == "5") {
  document.getElementById("image2").src = "images/dice5.png";
}

if (randomNumber2 > randomNumber1) {
  document.getElementById("win-player").innerHTML = "<b>2</b>";
} else if (randomNumber1 == randomNumber2) {
  document.getElementById("win-player").innerHTML = "<b>1 & 2 Both</b>";
}
