const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: [
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS",
  ],

  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  },
}; //OBJETO LITERAL

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
  // this.aprobarCurso = function (nuevoCursito) {
  //   this.cursosAprobados.push(nuevoCursito);
  // }
}
Student.prototype.aprobarCurso = function (nuevoCursito) {
  this.cursosAprobados.push(nuevoCursito);
};

const juanita = new Student("Juanita", 15, [
  "Curso de creación de videojuegos",
  "Curso Práctico de HTML y CSS",
]);

//clases

//prototipos con la sintexis clases

//cuando usamos {} dentro del constructor
//nos permite enviarla la info  con cosas faltantes
//solo senalando lo que ingresamos , y podemos dejar cosas
// por defecto como cursosAprobados = [] con array vacio

class Student2 {
  constructor({
    name,

    age,

    email,
    facebook,
    twitter,
    cursosAprobados = [],
  }) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    this.email = email;
    this.facebook = facebook;
    this.twitter = twitter;
  }

  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
}

const miguelito = new Student2({
  name: "Miguelito",
  age: 28,
  email: "miguelito@platzi.com",
});
