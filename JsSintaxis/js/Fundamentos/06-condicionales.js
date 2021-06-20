'use strict'
/* Operadores relacionales
Mayor: > 
Menor: <
Mayor o igual: >=
Menor o igual: <=
Igual: ==
Distinto: !=
*/

var nombre1 = "Steven";
var edad = 20;

//Condocionales dentro de los if

// if(edad >= 18){
//   console.log('Eres mayor de edad');

//   if(edad == 25){
//     console.log("Ya casi llegas a los 26 años");
//   }
//     if(edad <=20){
//       console.log("Ya seras mas adulto")
    
//   }
// }
// else{
//   console.log("Eres menor de edad");
// }


/*
Operadores logicos
AND (Y): &&
OR (O): ||
Negacion: !
*/

var nombre = "carlos";
if(nombre != "jose"){
  console.log("Tu nombre no es jose");
}




var numero = 20;
if (numero != edad ){
  console.log("No son numeros iguales");
}
else{
  console.log("Son iguales ambos numeros ")
}

var numero2 = 10;
if(numero <= 20  && numero2 >= 10){
  console.log("hay 10 numeros en medio")
}


var nombre2 = "lorena";

if(nombre == 'carlos' && nombre2 == 'lorena'){
  console.log("Son nombres")
}
else{
  console.log("no estan bien los nombres")
}





//validacion de usuario y contraseña

var usuario = prompt ("Nombre crear usuario: ")
var password = prompt ("Crea contraseña: ")

var validacion = prompt ("Ingresa usuario: ")
var validacionPassword = prompt ("ingresa tu contraseña")

if(validacion == usuario && password == validacionPassword){
  console.log( "Bienvenido " + usuario )
}
else{
  console.log("datos invalidos por favor revise contraseña o usuario" )
}