// la propiedad prototipo solo existe en funciones de objetos

// existe en clases o funciones constructoras
// solo estos dos dan prototipos

class Animal {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }
  emitirSonido() {
    console.log("El animal emite un sonido");
  }
}

//  usamos el extend para heredar

class Perro extends Animal {
  constructor(nombre, tipo, raza) {
    super(nombre, tipo);
    this.raza = raza;
  }

  emitirSonido() {
    console.log("El perro ladra");
  }
  correr() {
    console.log(`${this.nombre} corre alegremente `);
  }
}

const perro = new Perro("firulais", "perro", "pastor aleman");

console.log(perro);

perro.correr();
perro.emitirSonido();
