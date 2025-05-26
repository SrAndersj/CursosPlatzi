function greeting() {
  let userName = "Ana";
  console.log(userName);

  if (userName === "Ana") {
    console.log(`Hello ${userName}!`);
  }
}

greeting();
console.log(userName); // userName no es global por eso falla

// a este scope se le llama scope de funcion
// que es el alcance de las variables en la funcion
