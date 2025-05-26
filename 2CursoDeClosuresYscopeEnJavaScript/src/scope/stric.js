// si usamos "use strict" no se puede
// asignar variables sin declararlas

"use strict";
pi = 3.1416;
console.log(pi);

function myFunction() {
  return (pi = 3.1416);
}

console.log(myFunction());
