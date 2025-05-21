// const persona = {
// nombre: "Diego",
// apellido: "De Granda"
// }

// el this hace referencia a este objeto
// por convencion la funcion constructora la primera palabra
// esta en mayuscula

function Persona(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
}

//  ahora para construir objetos a partir de esta funcion
// se crea con instancias

const persona1 = new Persona("juan", "Perez", 30);

console.log(persona1);

const persona2 = new Persona("Ana", "Garcia", 25);
console.log(persona2);

// Una instancia es un objeto concreto que se crea a partir de
// una función constructora (o clase). Cada instancia tiene sus
// propios valores para nombre, apellido y edad.

// en JavaScript, cada función constructora tiene un prototipo
// (prototype). El prototipo es un objeto donde puedes poner
// propiedades o métodos que todas las instancias creadas con
// esa función van a compartir.
Persona.prototype.telefono = "555-555-5555";

persona1.nacionalidad = "Mexicana";

Persona.prototype.saludar = function () {
  console.log(`hola, mi nombre es ${this.nombre}`);
};

persona1.saludar();
