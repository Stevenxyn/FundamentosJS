/*
  Tipos de datos suma,resta,division,multiplicacion,resto

  var n1 = 5;
  var n2 = 10;

  suma
  n1 + n2  = 15

  resta
  n1 - n2 = 5

  multiplicacion
  n1 * n2 = 25

  division 

  n1 / n2 = 0   0,5

  resto
  n1 % n2 = 5



*/
'use strict'


var numero1 = 5;
var numero2 = 5

console.log("El valor del primero numero es: " + numero1 + // salto de linea con \n
            "\n El valor del segundo numero es: " + numero2)

//Suma
var suma = numero1 + numero2; 
console.log("La suma es: " + suma);


//Resta
var resta = numero1 - numero2;
console.log("La resta es :" + resta);

//multiplicacion
var multiplicacion = numero1 * numero2;
console.log("La multiplicacion es: " + multiplicacion);

//division
var division = numero1 / numero2;
console.log("La division es: " + division);

//resto
var resto = numero1 % numero2;
console.log("El resto es: " + resto);

// boleano
var verdaderoOFalso = true; 
console.log(verdaderoOFalso)


//funcion Number(); convierte variables   Strings a numeros
//Esta Number
      //parseInt
      //parseFloat

var numeroFalso = "12"; //String
console.log(numeroFalso + numero1) // concatena el 12 con el 5 queda 125
console.log(Number(numeroFalso)+numero1);//convierte el numero falso a un numero entero queda 17


//Convertir numeros enteros a Strings
console.log(String(numero1)+5) // no los suma solo los concatena


//saber el tipo de dato
var nombre = "Steven";
var precio = 12.4715;

console.log(typeof numero1)
console.log(typeof nombre)
console.log(typeof precio)
