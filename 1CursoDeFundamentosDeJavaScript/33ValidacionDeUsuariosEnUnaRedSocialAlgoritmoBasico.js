/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contrasena
2. El sistema debe ser capaz de validar si el usuario y contrasena ingresados por el usuario existen en la base de datos
3. Si el usuario y contrasena son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contrasena son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/

const usersDatabase = [
  {
    username: "andres",
    password: "123",
  },
  {
    username: "caro",
    password: "456",
  },
  {
    username: "mariana",
    password: "789",
  },
];

const usersTimeline = [
  {
    username: "Estefany",
    timeline: "Me encata Javascript!",
  },
  {
    username: "Oscar",
    timeline: "Bebeloper es lo mejor!",
  },
  {
    username: "Mariana",
    timeline: "A mi me gusta mas el cafe que el te",
  },
  {
    username: "Andres",
    timeline: "Yo hoy no quiero trabajar",
  },
];

const username = prompt("Ingrese su usuario");
const password = prompt("Ingrese su contrasena");

function usuarioExistente(username, password) {
  for (let i = 0; i < usersDatabase.length; i++) {
    if (
      usersDatabase[i].username === username &&
      usersDatabase[i].password === password
    ) {
      console.log("Usuario encontrado");
      break; //es para que se detenga el bucle
    } else {
      console.log("Usuario no encontrado");
    }
  }
}

usuarioExistente(username, password);
