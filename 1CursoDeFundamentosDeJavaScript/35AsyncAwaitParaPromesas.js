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

// Que pasaria si tuvieramos que hacer mas de una peticion ?

const urls = [
  "https://rickandmortyapi.com/api/character",
  "https://rickandmortyapi.com/api/episode",
  "https://rickandmortyapi.com/api/location",
];

async function fetchNewData() {
  try {
    for await (let url of urls) {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
}
