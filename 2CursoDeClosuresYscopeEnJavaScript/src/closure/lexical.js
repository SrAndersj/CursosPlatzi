// las Closure
// Permiten acceder al ámbito de una función exterior
//  desde una función interior. En JavaScript,
// las clausuras se crean cada vez que una función
// es creada

// cuando tengo la funcion interna tengo un closure

const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  function parent() {
    // function interna
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() {
      console.log(inner, myNumber, myGlobal);
    }

    return child();
  }

  return parent();
}

myFunction();
