// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions

//Funcion anonima

const saludo = function() {
  console.log("Hola")
}
saludo()

//arrow function

/* const despedida = () =>console.log("adios")

const sumar = function (a,b){
  return a + b;
}
console.log(sumar(5,5))

const resta2 =  function (b,v){
  return b - v;
} */

//Con parametros en los () podemos quitarlos cuando si hay parametros
const saludame = nombre => console.log(`Bienvenido ${nombre}`);
saludame("ElPepe")

// con parametros
const resta = (x,y) => x-y;
console.log(resta(5,6))


/* const funcionDeVariasLineas = () =>{
  console.log("Uno")
  console.log("Dos")
  console.log("Tres")
}
funcionDeVariasLineas() */


const numeros = [1,2,3,4,5,6,7,8,9];

numeros.forEach((elemento,posicion) =>console.log(` ${elemento} posicion  ${posicion}`))

const miGato ={
  nombre:"Spencer",
  edad: 2.5,
  raza:"Criollo",
  sonido: function maullar() {
    console.log("MIAUUU")},
  comida:"purina"
}

console.log(miGato)

//JON DICE NO USAR UNA ARROW FUNCTION EN OBJETOS :) NO ES UNA BUENA PRACTICA USAR LAS NORMALES!!


