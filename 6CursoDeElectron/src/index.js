"use strict";

// el objeto app es el objeto principal de electron
// todo aplicativo es controlado por el objeto app
// permite controlar y responder los eventos

const { app, BrowserWindow } = require("electron");

console.dir(app);

app.on("ready", () => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    title: "hello world",
    center: true,

    show: false,
  });

  win.once("ready-to-show", () => {
    win.show();
  });

  win.on("move", () => {
    const position = win.getPosition();
    console.log(`la posicion es ${position}`);
  });

  win.on("closed", () => {
    win = null;
    app.quit();
  });

  win.loadURL(`file://${__dirname}/renderer/index.html`);
});

app.on("before-quit", () => {
  console.log("saliendo .............");
});
