// variables

var a; // declarando
var b = "b"; // declaramos / asignamos
b = "bb"; // reasignacion
var a = "aa"; // redeclaracion

// Global Scope, instanciadas en el objeto window
var fruit = "Apple"; // global
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = "Colombia"; // global, si no se declara automaticamente es global

  console.log(country);
}

countries();
console.log(country);
