function fruits() {
  if (true) {
    var fruit1 = "Apple"; // function scope
    let fruit2 = "Kiwi"; // block scope
    const fruit3 = "Banana"; // block scope
    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit1);
}

fruits();

// todo lo que este dentro de {} es un bloque
// let y const solo tienen block scope , es decir que
// su alcance es solo de bloque
// var tiene function scope
