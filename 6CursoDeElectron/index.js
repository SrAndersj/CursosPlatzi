"use strict";

// el objeto app es el objeto principal de electron
// todo aplicativo es controlado por el objeto app
// permite controlar y responder los eventos

const { app, BrowserWindow } = require("electron");

console.dir(app);

app.on("ready", () => {
  let win = new BrowserWindow();

  win.on("closed", () => {
    win = null;
    app.quit();
  });
});

app.on("before-quit", () => {
  console.log("saliendo .............");
});
