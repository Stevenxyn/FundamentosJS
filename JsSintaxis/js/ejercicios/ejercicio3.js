'use strict'

/*
  hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/


var numero1 = parseInt(prompt("Ingresa primer numero: "));
var numero2 = parseInt(prompt("Ingresa segundo numero: "));

document.write("<h1>Desde el  " + numero1 + " hasta el " + numero2 + "</h1>");

for(var i = numero1; i <= numero2; i++){
  document.write(i + "<hr>");

  //document.write("\n" + (i * 2));   ESTO ES PARA TABLAS DE MULTIPLICAR :D
}
