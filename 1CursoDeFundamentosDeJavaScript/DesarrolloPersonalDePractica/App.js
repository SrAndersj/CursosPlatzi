//Dibujar en el canvas

const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");
// Aquí tomamos el elemento <canvas> del HTML por su id "miCanvas".

// Luego pedimos el contexto de dibujo 2D (ctx), que es el objeto con
//  el que vamos a pintar sobre el canvas.

let dibujando = false;
// Esta variable controla si el usuario está presionando el mouse
// para dibujar o no.

// Es true cuando está dibujando y false cuando no.

let currentStroke = []; // Guarda los puntos del trazo actual
let allStrokes = []; // Guarda todos los trazos

canvas.addEventListener("mousedown", (e) => {
  dibujando = true;
  currentStroke = [{ x: e.offsetX, y: e.offsetY }];

  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});

// Cuando el usuario presiona el botón del mouse (mousedown) sobre el
// canvas:

// Cambiamos dibujando a true para saber que ahora sí está dibujando.

// ctx.beginPath() inicia un nuevo camino para dibujar una línea nueva
// (importante para no conectar dibujos anteriores).

// ctx.moveTo(e.offsetX, e.offsetY) mueve el "pincel" a la posición
// actual del mouse sin dibujar nada todavía, preparando el punto de
// inicio del trazo.

canvas.addEventListener("mousemove", (e) => {
  if (dibujando) {
    currentStroke.push({ x: e.offsetX, y: e.offsetY }); // guardamos punto actual
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }
});

// Mientras el mouse se mueve (mousemove):

//     Primero verificamos si dibujando está en true. Si no,
//  salimos porque no se debe dibujar nada si no se está presionando
//  el botón.

//     ctx.lineTo(e.offsetX, e.offsetY) crea una línea desde el
// punto anterior hasta la posición actual del mouse.

//     ctx.stroke() dibuja esa línea en el canvas.

canvas.addEventListener("mouseup", () => {
  dibujando = false;
  allStrokes.push(currentStroke);
  ctx.beginPath(); // importante para romper conexión entre trazos
});

// ______________________________________________
// REPRODUCIR EL DIBUJO

function replay() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // limpia el canvas

  strokeIndex = 0;
  pointIndex = 0;
  drawStep();
}

let strokeIndex = 0;
let pointIndex = 0;

// strokeIndex para saber qué trazo (línea) vamos a dibujar.
// pointIndex para saber qué punto dentro de ese trazo estamos pintando.

function drawStep() {
  if (strokeIndex >= allStrokes.length) {
    return;
  }
  // Aquí se pregunta: ¿ya terminamos de dibujar todos los trazos que
  // tenemos guardados?

  // Si strokeIndex (el índice del trazo que estamos dibujando)
  // es igual o mayor que la cantidad total de trazos, significa
  // que no queda nada más que dibujar, así que la función termina
  // con return;

  const stroke = allStrokes[strokeIndex];
  // Aquí agarramos el trazo que vamos a dibujar ahora.

  // stroke es un array de puntos, cada punto tiene coordenadas x e y.

  if (pointIndex === 0) {
    ctx.beginPath();
    ctx.moveTo(stroke[0].x, stroke[0].y);
  }

  // pointIndex es un contador que indica qué punto dentro del trazo estamos dibujando.

  // Si es 0, quiere decir que estamos comenzando un nuevo trazo, entonces se inicia un nuevo camino con beginPath().

  // Se mueve el "pincel" del canvas a la posición del primer punto sin dibujar, para preparar el trazo.

  if (pointIndex < stroke.length) {
    const point = stroke[pointIndex];
    ctx.lineTo(point.x, point.y);
    ctx.stroke();

    pointIndex++;

    requestAnimationFrame(drawStep);

    // Mientras queden puntos por dibujar en el trazo (pointIndex < stroke.length):

    // Obtenemos el punto actual.

    // Dibujamos una línea desde el punto anterior hasta el actual con ctx.lineTo(point.x, point.y).

    // Pintamos la línea en el canvas con ctx.stroke().

    // Incrementamos pointIndex para pasar al siguiente punto.

    // Usamos requestAnimationFrame(drawStep) para llamar a drawStep otra vez en el siguiente frame, creando así la animación.
  } else {
    strokeIndex++;
    pointIndex = 0;
    drawStep();

    // Si ya no quedan puntos en el trazo actual:

    // Incrementamos strokeIndex para pasar al siguiente trazo.

    // Reiniciamos pointIndex a cero para empezar desde el principio del siguiente trazo.

    // Llamamos a drawStep para continuar la animación con el nuevo trazo.
  }
}

// ---------------------
//botones asignacion
document.getElementById("btnReplay").addEventListener("click", () => {
  replay();
});

document.getElementById("btnClear").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // limpia el canvas
  allStrokes = [];
  currentStroke = [];
});
