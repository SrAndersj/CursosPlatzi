// se itera sobre objetos enumerables
// un objeto tienen una propiedad y su valor

/*

for in ---> objetos 

propiedades = valor

array, string

item


// por cada propiedad en este objeto tal cosa 

for (varible in objeto) {
  codigo
}

*/

// El corchete indica que es objeto{}

const listaDeCompras = {
  manzana: 5,
  pera: 3,
  naranja: 2,
  uva: 1,
};

for (fruta in listaDeCompras) {
  console.log(fruta);
}

console.log("-----------");
for (fruta in listaDeCompras) {
  console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}

// el for of  falla porque el objeto no es iterable porque un objeto es enumerable
console.log("-----------");
for (fruta of listaDeCompras) {
  console.log(fruta);
}
