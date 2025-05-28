class LearningPath {
  constructor(name, courses = []) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new LearningPath({
  name: "Escuela de Web",
  courses: [
    "Curso de HTML y CSS",
    "Curso de JavaScript",
    "Curso de React",
    "Curso de Node.js",
  ],
});

const escuelaData = new LearningPath({
  name: "Escuela de Data",
  courses: [
    "Curso de HTML y CSS",
    "Curso de JavaScript",
    "Curso de React",
    "Curso de Node.js",
  ],
});

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.cursosAprendiendo = { learningPaths };
  }
}

const juan2 = new Student({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
});

const miguelito2 = new Student({
  name: "Miguelito",
  username: "miguelito_feliz",
  email: "miguelito@juanito.com",
  instagram: "miguelito_feliz",
});

const andrea2 = new Student({
  name: "Andrea",
  username: "andrea",
  email: "andrea@andrea.com",
  twitter: "andrea",
  learningPaths: escuelaWeb,
});
