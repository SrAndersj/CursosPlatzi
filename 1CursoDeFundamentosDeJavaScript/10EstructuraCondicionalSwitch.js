// en switch solo validamos si

// switch(expresion) {
//   case valor1:
//     // cÃ³digo a ejecutar
//     break;
//   case valor2:
//     // cÃ³digo a ejecutar
//     break;
//   case valor1:
//     // cÃ³digo a ejecutar
//     break;
//   case valor2:
//     // cÃ³digo a ejecutar
//     break;
//   default:
//     // codigo
// }

let expr = "Naranjas";

switch (
  expr // ===
) {
  case "Naranjas":
    console.log("Las naranjas cuestan $20 el kilo");
    break;
  case "Manzanas":
    console.log("Las manzanas cuestan $43 el kilo");
    break;
  case "Platanos":
    console.log("El plÃ¡tano esta en $30 el kilo");
    break;
  case "Mangos":
  case "Papayas":
    console.log("Los mangos y las papayas cuestan $ 25 pesos el kilo");
    break;
  default:
    console.log(`Lo siento, no contamos con ${expr}`);
}

console.log("Â¿Hay algo mÃ¡s que desees?");
