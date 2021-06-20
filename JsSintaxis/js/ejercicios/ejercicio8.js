'use strict'

/*
  Hacer una calculadora: pida dos numeros por pantalla
  - si metemos un numero mal nos pida  que lo pongamos de nuevo
  - mostrar en el cuerpo de la pagina en una alerta y por consola el resultado
  de 
  Sumar
  Restar
  Multiplicar
  Dividir
  esas dos cifras

*/


var numero1 = parseInt(prompt("Ingrese primer numero: ",0));
var numero2 = parseInt(prompt("Ingrese segundo numero: ",0));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
  numero1 = parseInt(prompt("Ingrese primer numero: ",0))
  numero2 = parseInt(prompt("Ingrese segundo numero: ",0));
}

var resultado = "La suma es: " + (numero1 + numero2) + "<hr>" +
                "La resta es: " + (numero1 - numero2) + "<hr>"+
                "La multiplicacion es: " + (numero1 * numero2) + "<hr>"+
                "La divicion es: " + (numero1 / numero2) + "<hr>"


 var resultadoCMD = "La suma es: " + (numero1 + numero2) + "\n" +
                "La resta es: " + (numero1 - numero2) + "\n"+
                "La multiplicacion es: " + (numero1 * numero2) + "\n"+
                "La divicion es: " + (numero1 / numero2) + "\n"

document.write(resultado)

alert(resultadoCMD)
console.log(resultadoCMD)
