// explicit type casting
const string = "42";
const integer = parseInt(string);

console.log(integer);
console.log(typeof integer);

const stringFloat = "3.15";
const float = parseFloat(stringFloat);

console.log(integer);
console.log(typeof integer);

const binary = "1010";
const decimal = parseInt(binary, 2);

console.log(decimal);

console.log(typeof decimal);

// Implicit type casting

const sum = "5" + 3;
console.log(sum); //aqui concateno NO SUMO

const SUMwITHBOOLEAN = "3" + true;

console.log(SUMwITHBOOLEAN);

// en que casos concatena y en que casos suma ?

const sumBOlean = 2 + true;
console.log(sumBOlean);

const stringV = "10";
const numverV = 10;
const booleanV = true;

console.log(stringV + stringV);
console.log(stringV + numverV);
console.log(stringV + booleanV);

console.log("------");

console.log(numverV + stringV);
console.log(numverV + numverV);
console.log(numverV + booleanV);

console.log("------");

console.log(booleanV + stringV);
console.log(booleanV + numverV);
console.log(booleanV + booleanV);
