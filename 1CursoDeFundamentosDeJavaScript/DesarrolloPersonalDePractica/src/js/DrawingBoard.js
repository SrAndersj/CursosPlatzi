export default class DrawingBoard {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.dibujando = false; //controla si esta dibujando
    this.currentStroke = []; //guarda los puntos del trazo actual
    this.allStrokes = []; //guarda todos los trazos guardados
  }

  startDrawing(event) {
    this.dibujando = true;
    this.currentStroke = [{ x: e.offsetX, y: e.offsetY }];

    this.ctx.beginPath();
    this.ctx.moveTo(e.offsetX, e.offsetY);
  }

  addPoint(event) {
    if (!this.dibujando) return; // el ! = si No estas dibujando no hagas nada

    this.currentStroke.push({ x: event.offsetX, y: event.offsetY });
    this.ctx.lineTo(event.offsetX, event.offsetY);
    this.ctx.stroke();
  }

  stopDrawing() {
    this.dibujando = false;
    this.allStrokes.push(this.currentStroke);
    this.ctx.beginPath(); //romper la conexión entre trazos
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.allStrokes = [];
    this.currentStroke = [];
  }

  getAllStrokes() {
    return this.allStrokes;
  }
}
