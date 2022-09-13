"use strict";

const cardRedSquare = document.createElement("img");
cardRedSquare.src = "images/redsquare.png";
document.body.appendChild(cardRedSquare);

const cardRedCircle = document.createElement("img");
cardRedCircle.src = "images/redcircle.png";
document.body.appendChild(cardRedCircle);

const cardRedTriangle = document.createElement("img");
cardRedTriangle.src = "images/redtriangle.png";
document.body.appendChild(cardRedTriangle);

const cardBlueSquare = document.createElement("img");
cardBlueSquare.src = "images/bluesquare.png";
document.body.appendChild(cardBlueSquare);

const cardBlueCircle = document.createElement("img");
cardBlueCircle.src = "images/bluecircle.png";
document.body.appendChild(cardBlueCircle);

const cardBlueTriangle = document.createElement("img");
cardBlueTriangle.src = "images/bluetriangle.png";
document.body.appendChild(cardBlueTriangle);

const cardYellowSquare = document.createElement("img");
cardYellowSquare.src = "images/yellowsquare.png";
document.body.appendChild(cardYellowSquare);

const cardYellowCircle = document.createElement("img");
cardYellowCircle.src = "images/yellowcircle.png";
document.body.appendChild(cardYellowCircle);

const cardYellowTriangle = document.createElement("img");
cardYellowTriangle.src = "images/yellowtriangle.png";
document.body.appendChild(cardYellowTriangle);

const cardArray = [
  cardRedSquare,
  cardRedCircle,
  cardRedTriangle,
  cardBlueSquare,
  cardBlueCircle,
  cardBlueTriangle,
  cardYellowSquare,
  cardYellowCircle,
  cardYellowTriangle,
];

function randomShapeColor() {
  let randomPosition = shapeColor[Math.floor(Math.random() * 9)];
  console.log(randomPosition);
}

// const cardArray = [
//   {
//     name: "redSquare",
//     img: "images/redsquare.png",
//   },
//   {
//     name: "redCircle",
//     img: "images/redcircle.png",
//   },
//   {
//     name: "redTriangle",
//     img: "images/redtriangle.png",
//   },
//   {
//     name: "blueSquare",
//     img: "images/bluesquare.png",
//   },
//   {
//     name: "blueCircle",
//     img: "images/bluecircle.png",
//   },
//   {
//     name: "blueTriangle",
//     img: "images/blueTriangle.png",
//   },
//   {
//     name: "yellowSquare",
//     img: "images/yellowsquare.png",
//   },
//   {
//     name: "yellowCircle",
//     img: "images/yellowcircle.png",
//   },
//   {
//     name: "yellowTriangle",
//     img: "images/yellowtriangle.png",
//   },
// ];

const questionDisplay = document.querySelector("#question");

function createQuestion() {
  for (let i = 0; i < 5; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/yellowtriangle.png");
    card.setAttribute("data-id", i);
    questionDisplay.appendChild(card);
  }
}

createQuestion();

// const questionRow = [];

// const answerRow = [];

// const verifyAnswerRow = [];

// function initialiseGame() {
//   document.querySelector("#");
// }

// const squares = document.querySelectorAll(".square");

function showShapeColor() {
  let timerId = null;
  timerId = setInterval(randomShapeColor, 5000);
}
