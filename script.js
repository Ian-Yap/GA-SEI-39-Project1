"use strict";

let question = [];
let answer = [];

const cardArray = [
  "cardRedSquare",
  "cardRedCircle",
  "cardRedTriangle",
  "cardBlueSquare",
  "cardBlueCircle",
  "cardBlueTriangle",
  "cardYellowSquare",
  "cardYellowCircle",
  "cardYellowTriangle",
];

const numCards = 5;
const displayTime = 5000;

const ansButtons = document.getElementsByClassName("ans-button");
const blanks = document.getElementsByClassName("blanks");

for (let i = 0; i < ansButtons.length; i++) {
  const button = ansButtons[i];
  const id = button.id;
  button.addEventListener("click", function (e) {
    console.log(this.id);
    const img = createImg(this.id);
    const index = answer.length;
    if (index < blanks.length) {
      blanks[index].appendChild(img);
      answer.push(this.id);
    }
  });
}

function startGame() {
  answer = [];
  question = generateQuestion();
  console.log("question", question);
  showImages(question);
  const timer = setTimeout(clearImages, displayTime);
  // clearTimeout(timer);
}

function clearImages() {
  for (let i = 0; i < blanks.length; i++) {
    blanks[i].innerHTML = "";
  }
  console.log("clear");
}

function showImages(images) {
  for (let i = 0; i < blanks.length; i++) {
    if (i < images.length) {
      const img = createImg(images[i]);
      blanks[i].innerHTML = "";
      blanks[i].appendChild(img);
    }
  }
}

function createImg(image) {
  const img = document.createElement("img");
  img.src = getImage(image);

  return img;
}

function checkAnswer() {
  if (answer.length < numCards) {
    alert("Not enough cards selected");
    return;
  }
  console.log("answer", answer);
  for (let i = 0; i < numCards; i++) {
    if (question[i] != answer[i]) {
      alert("Wrong! Answer is " + answer);
      return;
    }
  }
  alert("Correct!");
}

function generateQuestion() {
  let listOfCards = [];
  for (let i = 0; i < numCards; i++) {
    const randomCard = cardArray[Math.floor(Math.random() * cardArray.length)];
    listOfCards.push(randomCard);
  }
  return listOfCards;
}

function getImage(card) {
  switch (card) {
    case "cardRedSquare":
      return "images/redsquare.png";
    case "cardRedCircle":
      return "images/redcircle.png";
    case "cardRedTriangle":
      return "images/redtriangle.png";
    case "cardBlueSquare":
      return "images/bluesquare.png";
    case "cardBlueCircle":
      return "images/bluecircle.png";
    case "cardBlueTriangle":
      return "images/bluetriangle.png";
    case "cardYellowSquare":
      return "images/yellowsquare.png";
    case "cardYellowCircle":
      return "images/yellowcircle.png";
    case "cardYellowTriangle":
      return "images/yellowtriangle.png";
  }
}
