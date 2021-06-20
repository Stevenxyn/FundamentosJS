'use strict'

/*
Programa que pida dos numeros, nos diga cual es mayor cual es menor y si son iguales
PLUS: Validar si no son numeros volver a pedir los datos
*/

var numero1 = parseInt(prompt("Digite el primer numero: ",0)); // Se piden los datos al usuario
var numero2 = parseInt(prompt("Digite el segundo numero: ",0));

while (numero1 <= 0 || numero2 <=0 || isNaN(numero1,numero2)) {  // este bucle while verifica que los valores que se pongan sean numeros 
  numero1 = parseInt(prompt("Digite el primer numero: ",0));
  numero2 = parseInt(prompt("Digite el segundo numero: ",0));
}
 
if(numero1 == numero2){ // se hace la validacion si son iguales
  alert("SON IGUALES");
}
else if (numero1 > numero2){ // validacion si el numero1 es mayor que numero 2
  alert("EL NUMERO MAYOR ES: " + numero1);
  alert("EL NUMERO MENOR ES: " + numero2);
}
else if (numero2 > numero1){ // validacion si el numero2 es mayor que numero 2
  alert("EL NUMERO MAYOR ES: " + numero2);
  alert("EL NUMERO MENOR ES: " + numero1);
}
else{
  alert("INTRODUCE NUMEROS CORRECTOS") //
}





