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
  const randomNumber = Math.round(Math.random() * (max - min));
  return randomNumber;
}

let newSaying = "";
const sayingsGenerator = () => {
  const numberResult = getRandomNumber(0, 4);
  sayingSection.innerHTML = `<p class="saying__par"><em>${
    sayings[numberResult]
  }</em></p>`;

  // const newContent = document.createElement("p");
  // const newSaying = document.createTextNode(sayings[numberResult]);
  // newContent.appendChild(newSaying);
  // sayingSection.appendChild(newContent);

  console.log(sayings[numberResult]);
};

sayingButton.addEventListener("click", sayingsGenerator);
