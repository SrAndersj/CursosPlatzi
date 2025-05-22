// eXPLICAICON DE CADA TIPO DE ERROR
// https://http.cat/

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Error al obtener los datos:", error));
