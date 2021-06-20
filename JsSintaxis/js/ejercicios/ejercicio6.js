'use strict'

/*
  programa nos diga si es par o impar
  ventana prompt
  si no es valido pedir numeor

*/

var numero = parseInt(prompt("Introduce un numero",0));


while(isNaN(numero)){
  numbe = parseInt(prompt("Introduce un numero",0));
}
if(numero % 2 == 0){
  alert("es numero par");
}
else{
  alert("numero impar");
}