// Capacidades que tienen las funciones al igual que otros objetos

// 1. Pasar funciones como argumentos -> callback

function a() {}
function b(a) {}
b(a);

// Retornar funciones

function a() {
  function b() {}
  return b;
}

// Asignar funciones a variables -> Expresion de funcion

const a = function () {};

// Tener propiedades y metodos

function a() {}
const obj = {};
a.call(obj);
// -------------------------------------------

function saludar() {
  console.log("Hola, mi nombre es " + this.nombre);
}

const persona = { nombre: "Ana" };

// Ejecutamos la función saludar usando el objeto persona como contexto
saludar.call(persona); // Esto mostrará: Hola, mi nombre es Ana

//   -----------------------------

// Anidar funciones -> Nested functions

function a() {
  function b() {
    function c() {}
    c();
  }
  b();
}
a();

// ¿Es posible almacenar funciones en objetos?
// a esto es a lo que se le conoce como metodo
const rocket = {
  name: "Falcon 9",
  launchMessage: function launchMessage() {
    console.log(" mensaje desde la funcion");
  },
};

rocket.launchMessage();

//Un método es una función que está guardada dentro de un objeto.
// Es como una acción o comportamiento que ese objeto puede hacer.
