import DrawingBoard from "./DrawingBoard.js";

const canvas = document.getElementById("miCanvas");
const btnReplay = document.getElementById("btnReplay");
const btnClear = document.getElementById("btnClear");

const drawingBoard = new DrawingBoard(canvas);

canvas.addEventListener("mousedown", (e) => {
  drawingBoard.startDrawing(e);
});

canvas.addEventListener("mousemove", (e) => {
  drawingBoard.addPoint(e);
});

canvas.addEventListener("mouseup", () => {
  drawingBoard.stopDrawing();
});

canvas.addEventListener("mouseleave", () => {
  drawingBoard.stopDrawing();
});

btnClear.addEventListener("click", () => {
  drawingBoard.clear();
});
