"use strict";

// Importa los módulos necesarios de Electron
// app: controla el ciclo de vida de la aplicación
// BrowserWindow: crea y gestiona ventanas de la aplicación
const { app, BrowserWindow } = require("electron");

// Muestra en consola las propiedades del objeto app (útil para depuración)
console.dir(app);

// Evento que se dispara cuando la aplicación está lista para iniciar
app.on("ready", () => {
  // Crea una nueva ventana del navegador
  let win = new BrowserWindow();

  // Evento que se dispara cuando la ventana se cierra
  win.on("closed", () => {
    // Libera la referencia a la ventana para limpiar memoria
    win = null;
    // Cierra la aplicación cuando se cierra la ventana principal
    app.quit();
  });
});

// Evento que se dispara justo antes de que la aplicación cierre
app.on("before-quit", () => {
  console.log("Saliendo de la aplicación...");
});
