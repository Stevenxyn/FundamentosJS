/*
Let = da solo un uso medido dentro de un bloque
var = es una variable global que se ejecutara en todo el programa
*/

'use strict'

//Tipo de variable var

var numero = 21;
console.log(numero)//Doy salida en consola la variable global valor 21

if(true){ //analizar un if que siempre sera verdadero
   var numero = 18; // se da un nuevo valor a la variable dentro del if, y con el tipo de variable global 
   console.log(numero)  // valor 18
}

console.log(numero); //valor 18




//Tipo de variable let

var nombre = ("Lorena herrera");
console.log(nombre); //Dar salida a la variable ya inicializada Lorena herrera

if(true){ //analizar un if que siempre sera verdadero
  let nombre = ("Steven Lopez");
  console.log(nombre); // valor Steven lopez
}

console.log(nombre)
