/*
Condicionales en JS


*/

let edad = 19;

// if(age > 17){
//   console.log("Eres mayor ")
// } else{
//  console.log("Eres menor")
// }

// if(age >=  18){
//   console.log("Eres mayor ")
// } else{
//  console.log("Eres menor")
// }

/*
Buenos dias: 6hrs - 11hrs
Buenas tardes: 12hrs - 18hrs
Buenas noches: 19 hrs - 23hrs
EstoyMimido: 0hrs - 5hrs
 */
let hora = 20;
if (hora >= 6 && hora <= 11) {
  console.log("Buenos dias!");
} else if (hora >= 12 && hora <= 18) {
  console.log("Buenas Tardes!");
} else if (hora >= 19 && hora <= 23) {
  console.log("Buenas Noches");
} else if (hora >= 0 && hora <= 5) {
  console.log("Estoy mimido");
} else {
  console.log("Digite hora valida");
}

/*
Operador ternario

(Condicion) ?  : falsa
? = verdadero
: = falso

funciona para if y else solo de dos por que si son mas seria mejor unificarlos con una funcion
*/

console.log("Operador ternario");

let eresMayor = edad >= 18 ? "Eres mayor" : "Eres menor";
console.log(eresMayor);

//Ejemplo 2

let dia = true;

let esDiaONoche = dia == true ? "Es de dia" : "Es de noche";
console.log(esDiaONoche);

/*
switch - case
domingo - 0
lunes - 1
martes - 2
miercoles - 3
jueves - 4
viernes - 5
sabado - 6
*/

//let queDiaEs = prompt ("Ingrese un numero") ;

let queDiaEs = 5;

 //queDiaEs = parseInt(queDiaEs) prompt toma valores en string hay que convertirlos a enteros
switch (queDiaEs) {
  case 0:
    console.log("Domingo de reposo");
    break;
  case 1:
    console.log("Lunes de trabajo");
    break;
  case 2:
    console.log("martes de trabajo");
    break;
  case 3:
    console.log("miercoles de trabajo");
    break;
  case 4:
    console.log("jueves de trabajo");
    break;
  case 5:
    console.log("viernes de trabajo");
    break;
  case 6:
    console.log("sabado de trabajo");
    break;

  default:
    console.log("Digite un valor valido");
    break;
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

/* for(let i =0; i < numeros.length; i++){
  console.log(numeros[i])//asi muestra el valor de la variable igualitom
  console.log(i)

} */

for (let i = 0; i < numeros.length; i++) {
  if (i === 7) {
    break;
  }
  //console.log(numeros[i])
}
50;
10;

// let pares = prompt("Ingrese un valor limite que quiera",[200] )

let pares = 5;
for (let i = 0; i <= pares; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

