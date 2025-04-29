// 1. Tipo entero y decimal
const entero = 42;
const decimal = 3.14;
console.log(typeof entero, typeof decimal);

// 2. NotaciÃ³n cientÃ­fica
const cientifico = 5e3;

// 3. Infinitos y NaN
const infinito = Infinity;
const noEsUnNumero = NaN;

// Operaciones aritmÃ©ticas

// 1. Suma, Resta, MutiplicaciÃ³n y DivisiÃ³n
const suma = 3 + 4;
const resta = 4 - 4;
const mutiplicacion = 4 * 7;
const division = 16 / 2;

// 2. Modulo y Exponenciacialn
const modulo = 15 % 8;
const exponenciacion = 2 ** 3;

// Precision
const resultado = 0.1 + 0.2; //cuidado esas sumas de este lenguaje son poco precisas , esto da 0.30000000000000004  jajaja
console.log(resultado);
console.log(resultado.toFixed(1)); // numero decimales
console.log(resultado === 0.3); // comprueba si es igual a

// Operaciones Avanzadas
const raizCuadrada = Math.sqrt(16);
const valorAbsoluto = Math.abs(-7);
const aleatorio = Math.random();
console.log(raizCuadrada);
console.log(valorAbsoluto);
console.log(aleatorio);
