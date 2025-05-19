/*
 CLOSURE: funcion que tiene acceso a variables de un Ambito externo,
 incluso despuess de que esa funcionn haya terminado de ejecutarse.

 Ãmbito lexico: cada vez que se declara una funcionn,
 crea su propio Ambito lexico, y puede acceder a las variables
 dentro de ese Ambito y a las variables en Ambitos superiores.
*/

function outerFunction() {
  let outerVariable = "I am from outer function";

  function innterFunction() {
    console.log(outerVariable);
  }

  return innterFunction;
}

const closureExample = outerFunction();
closureExample();

function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counterA = createCounter();
counterA();
counterA();

const counterB = createCounter();
counterB();

function outer() {
  let message = "Hello, ";

  function inner(name) {
    console.log(message + name);
  }

  return inner;
}

const closureA = outer();
const closureB = outer();

closureA("Alice");
closureA("Bob");
