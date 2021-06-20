'use strict'

//Switch

var edad = 20; 
var imprime = "";

switch(edad){
  case 18:
    imprime = "ahora eres mayor de edad";
    break;
  case 10:
    imprime = "Eres puberto";
    break;
  case 20:
    imprime = "Entras al 2do piso";
    break;
  case 30:
    imprime = "Entras al 3ter piso";
    break;
  default:
    imprime = "Tu edad no esta disponible";
} 
console.log(imprime);
