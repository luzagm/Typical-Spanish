"use strict";

const sayingButton = document.querySelector(".js-sayings-button");
let sayingSection = document.getElementById("sayings-id");

const sayings = [
  "A buen entendedor, pocas palabras bastan",
  "A buen hambre, no hay pan duro",
  "A buenas horas, mangas verdes!",
  "A caballo regalado no le mires el diente",
  "A cada cerdo le llega su San Martín"
];

function getRandomNumber(min, max) {
  const randomNumber = Math.round(Math.random() * (max - min) + min);
  return randomNumber;
}

const sayingsGenerator = () => {
  const numberResult = getRandomNumber(0, 4);
  // sayingSection.innerHTML = sayings[numberResult];

  sayingSection = document.createTextNode(sayings[numberResult]);
  //   const newContent = document.createElement("p");
  //   const newSaying = document.createTextNode(`${sayings[numberResult]}`);
  //   newContent.appendChild(newSaying);
  //   sayingSection.appendChild(newContent);

  console.log(sayings[numberResult]);
};

sayingButton.addEventListener("click", sayingsGenerator);
