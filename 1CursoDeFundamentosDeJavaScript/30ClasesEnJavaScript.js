// sugar syntax es una forma mas facil de crear
// objetos

// una clase es un molde o plantilla para crear
// nuevos objetos, es como una funcion constructora pero con
// sintaxis distinta

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    console.log(`hola, mi nombre es ${this.nombre}`);
  }
}

const persona1 = new Persona("Juan", 30);

persona1.saludar();
