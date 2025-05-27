console.log(nameOfDog);

var nameOfDog = "Elmo";

//hoisting quiere decir elevacion , vemos que al
// hacer log  da error proque la var esta declarada
// despues de hacer el log

// lo que hace el log es que eleva  nameOfDog
//  y pues esta undefined

var nameOfDog; // undefined
console.log(nameOfDog);

var nameOfDog = "Elmo";

// ------------------

nameOfDog();

function nameOfDog() {
  console.log(`el mejor perrito es ${elmo}`);
}

var elmo = "Elmito ";
