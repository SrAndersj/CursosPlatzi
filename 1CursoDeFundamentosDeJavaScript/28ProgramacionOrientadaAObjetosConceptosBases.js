/*

estructura de datos

key / value 

objeto {
  propiedad: valor, 
  propiedad: valor, 
  propiedad: valor 
  Metodos()
}

*/

const persona = {
  nombre: "John",
  edad: 30,
  direccion: {
    calle: "Av Insurgentre 187",
    ciudad: "CDMX",
  },
  saludar() {
    console.log(`hola, mi nombre es ${persona.nombre}`);
  },
};
