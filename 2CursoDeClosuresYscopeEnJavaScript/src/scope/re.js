var firstName; // Undefined
firstName = "Oscar";
console.log(firstName);

var lastName = "David"; // declarar / asignar
lastName = "Ana"; // reasignar
console.log(lastName);

var secondName = "David"; // declarando / asignando
var secondName = "Ana"; // reasignado
console.log(secondName);

// Let                 //let NO permite redeclarar ,
// let permite reasignar
let fruit = "Apple"; // declara y asignar
fruit = "Kiwi"; // reasignar
console.log(fruit);

let fruit = "Banana"; // NO permite redeclarar
console.log(fruit);

// const    // const no permite reasignar ni redeclarar
const animal = "dog"; // declara y asigna

// animal = 'cat'; // reasignado no permitido
const animal = "Snake";
console.log(animal);

//si se le hace un push a un const si se
// puede usar metodos
//  sobre el arreglo

const vehicles = [];
vehicles.push("carrito");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);
