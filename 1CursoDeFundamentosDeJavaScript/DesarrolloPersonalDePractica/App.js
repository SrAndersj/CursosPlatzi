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

canvas.addEventListener("mousedown", (e) => {
  dibujando = true;
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
});
