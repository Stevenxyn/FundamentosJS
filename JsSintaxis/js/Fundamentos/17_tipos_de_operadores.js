/*
Operadores
 + , - , * , / , %
 & = resto de la division

 */

 let a = 5/2; // da la division
 let b = 5%2; // da el residuo de la division

 console.log(a)
 console.log(b)

 /*
 Relacionales
> =mayor
< =menor
>=   =mayor que
<=    =menor que
==, igual igual
===,  comparacion de tipo de dato y valor
!=,
!==

buena practica usar las 3 === que es una buena practica
 */

console.log(10 == 10 )
console.log("7" === 7)
console.log(false === true)

/*Operadores de decremento*/
 let i = 1;

 //i = i + 2;  manera larga
 //console.log(i)
/*
i + =5;
i - =5;
i * =5;
i / =5;
*/
 i += 5; //manera pro

console.log(i)


/*
Operadores Logicos
! = Not  : Niega los valores de vedadero a falso y viseversa

|| = Or  Ó : Cuando tengo dos o mas condiciones con que una se cumpla es decir sea verdadera el OR validara

&& = And Y : Cuando tengo 2 o mas condiciones todas tienen que cumplirse para que and se valide*/


//Ejemplos ! Not
console.log(!true)
console.log(!false)
console.log(!true + true) //0 + 1 por que el true lo niega

//Ejemplos || Or
console.log((10 === 10) || (5 === "5") || (1 === "1"))

//Ejemplos && And
console.log((5 + 5 == 10) && (5 * 2 == 10))
console.log((5 + 5 == 10) && (-10 + 20 == 10))

 