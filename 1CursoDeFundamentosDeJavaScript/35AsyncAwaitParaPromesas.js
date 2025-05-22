// https://rickandmortyapi.com/

// el then es lo que se ejecuta cuando la promesa es satisfactoria

// function fetchData() {
//   fetch("https://rickandmortyapi.com/api/character")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// }

// Async and await
//  await significa que espera que se resuelva la promesa anterior

async function fetchData() {
  try {
    let response = await fetch("https://rickandmortyapi.com/api/character");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
