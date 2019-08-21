"use strict";

const sayingButton = document.querySelector(".js-sayings-button");
let sayingSection = document.getElementById("sayings-id");

const sayings = [
  "A buen hambre, no hay pan duro. (Eso dicen, pero a ver quien se come un plato de lombarda cocida)",

  "¡A buenas horas, mangas verdes! (Traducción: Casi me hago viej@ esperando)",

  "A caballo regalado no le mires el diente. (¡Deja de ser tan quisquilloso!)",

  "A grandes males, grandes remedios. (¡Relaja!)",
  "A la tercera va la vencida. (Excepto cuando buscas las llaves perdidas por casa)",

  "A lo hecho, pecho. (Todas las acciones tienen consecuencias, ¡apechuga!)",

  "A mal tiempo, buena cara. (Tú sonrie y saluda siempre, así si un día matas a alguien nadie se lo esperará. Surprise, surprise!)",

  "A más años, más desengaños. (Uno se curte a base de hostias)",

  " A nadie le amarga un dulce. (Excepto a un diabético)",

  "A otro perro con ese hueso. (Traducción: No me cuentes milongas)",

  "A palabras necias, oídos sordos. (Traducción: No hagas ni puñetero caso)",

  "A quien madruga, Dios le ayuda. (Frase que te dice la abuela para que no remolones en la cama)",

  " A todo se acostumbra uno, menos a no comer. (¡So gocho!)",
  "A donde las dan las toman. (¡Venganza!)",

  " Al pan, pan, y al vino, vino. (¿Qué más quieres?)",
  "Ande yo caliente y ríase la gente. (Guiris con calcetines y chanclas)",
  " Antes de hacer nada, consúltalo con la almohada. (No actúes en caliente, nah bueno sale de eso)",
  " Vísteme despacio que tengo prisa. (Cuanta más prisa tienes más obstáculos se te presentan: te caes, pierdes el bus... Así que, take it easy, mejor que llegues sano y salvo)"
];

function getRandomNumber(min, max) {
  const randomNumber = Math.round(Math.random() * (max - min));
  return randomNumber;
}

const sayingsGenerator = () => {
  const numberResult = getRandomNumber(0, 17);
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
