"use strict";

const sayingButton = document.querySelector(".js-sayings-button");
let sayingSection = document.getElementById("sayings-id");

const sayings = [
  "A buen hambre, no hay pan duro. <p class='saying__translation'><em>(Eso dicen, pero a ver quien se come un plato de lombarda cocida)</em></p>",

  "¡A buenas horas, mangas verdes! <p class='saying__translation'><em>(Traducción: Casi me hago viej@ esperando)</em></p>",

  "A caballo regalado no le mires el diente. <p class='saying__translation'><em>(¡Deja de ser tan quisquilloso!)</em></p>",

  "A grandes males, grandes remedios. <p class='saying__translation'><em>(¡Relaja!)</em></p>",

  "A la tercera va la vencida. <p class='saying__translation'><em>(Excepto cuando buscas las llaves perdidas por casa)</em></p>",

  "A lo hecho, pecho. <p class='saying__translation'><em>(Todas las acciones tienen consecuencias, ¡apechuga!)</em></p>",

  "A mal tiempo, buena cara. <p class='saying__translation'><em>(Tú sonrie y saluda siempre, así si un día matas a alguien nadie se lo esperará. Surprise, surprise!)</em></p>",

  "A más años, más desengaños. <p class='saying__translation'><em>(Uno se curte a base de hostias)</em></p>",

  " A nadie le amarga un dulce. <p class='saying__translation'><em>(Excepto a un diabético)</em></p>",

  "A otro perro con ese hueso. <p class='saying__translation'><em>(Traducción: No me cuentes milongas)</em></p>",

  "A palabras necias, oídos sordos. <p class='saying__translation'><em>(Traducción: No hagas ni puñetero caso)</em></p>",

  "A quien madruga, Dios le ayuda. <p class='saying__translation'><em>(Frase que te dice la abuela para que no remolones en la cama)</em></p>",

  " A todo se acostumbra uno, menos a no comer. <p class='saying__translation'><em>(¡So gocho!)</em></p>",

  "A donde las dan las toman. <p class='saying__translation'><em>(¡Venganza!)</em></p>",

  " Al pan, pan, y al vino, vino. <p class='saying__translation'><em>(¿Qué más quieres?)</em></p>",

  "Ande yo caliente y ríase la gente. <p class='saying__translation'><em>(Guiris con calcetines y chanclas)</em></p>",

  " Antes de hacer nada, consúltalo con la almohada. <p class='saying__translation'><em>(No actúes en caliente, nah bueno sale de eso)</em></p>",

  " Vísteme despacio que tengo prisa. <p class='saying__translation'><em>(Cuanta más prisa tienes más obstáculos se te presentan: te caes, pierdes el bus... Así que, take it easy, mejor que llegues sano y salvo)</em></p>"
];

function getRandomNumber(min, max) {
  const randomNumber = Math.round(Math.random() * (max - min));
  return randomNumber;
}

const sayingsGenerator = () => {
  const numberResult = getRandomNumber(0, 17);
  sayingSection.innerHTML = `<div class="saying__par"><strong>${
    sayings[numberResult]
  }</strong><div class="favorite__star">★</div></div>`;

  // const newContent = document.createElement("p");
  // const newSaying = document.createTextNode(sayings[numberResult]);
  // newContent.appendChild(newSaying);
  // sayingSection.appendChild(newContent);

  console.log(sayings[numberResult]);
};

sayingButton.addEventListener("click", sayingsGenerator);
