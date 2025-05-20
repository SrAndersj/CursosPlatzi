#!/bin/bash

CARPETA="../"
ARCHIVO_SALIDA="unido.js"

> "$ARCHIVO_SALIDA"  # limpiar archivo de salida

for archivo in $(ls -v "$CARPETA"/*.js); do
  echo "
  
  // # -------------" >> "$ARCHIVO_SALIDA"
  echo "// # $(basename "$archivo")" >> "$ARCHIVO_SALIDA"
  echo "// # -------------    
  
  
  
  " >> "$ARCHIVO_SALIDA"
  cat "$archivo" >> "$ARCHIVO_SALIDA"
  echo "" >> "$ARCHIVO_SALIDA"  # salto de línea extra
done


# Listar los archivos .js ordenados por número al inicio y concatenarlos


# ls -v "$CARPETA"/*.js | xargs cat >  unido.js 



# El símbolo | en bash se llama pipe (tubería) y sirve para pasar la salida (output) 
# de un comando como entrada (input) a otro comando.

# Primero, ls -v lista los archivos ordenados.

# Luego, con |, esa lista se envía a xargs cat, que lee esa lista y ejecuta cat para unir los archivos.