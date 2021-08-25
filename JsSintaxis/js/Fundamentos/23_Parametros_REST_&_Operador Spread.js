/*
Los parámetros rest son usados para crear funciones que acepten cualquier número de argumentos. El operador spread es usado para pasar un array a funciones que normalmente requieren una lista de muchos argumentos.

rest son valores que probablemente podrian ingresar de asiga como ...nombreVariable
*/

//callback es una funcion que se pasa a otra funcion como un argumento se que invoca dentro de la funcion externa para completar una rutina o accion


/*REST*/
function sumar (a,b,...c){
  let r = a+b;
  c.forEach(function(n){ //aca asigno el total de numeros que se ingresen para irlos sumando
    r += n
  });
  return r;
}

/* console.log(sumar(1,2))
console.log(sumar(1,2,3))
console.log(sumar(1,2,3,4))
console.log(sumar(1,2,3,4,5))
console.log(sumar(1,2,3,4,5,6))
console.log(sumar(1,2,3,4,5,6,7)) */


/*OPERADOR SPREAD*/

const arr1 =[1,2,3,4,5];
  arr2 = [6,7,8,9,0];

  console.log(arr1,arr2)

  //crear arreglo apartir de los dos anteriores


  const arrUnificado = arr1.concat(arr2)
  console.log(arrUnificado)
  
  //crear arreglo apartir de los anteriores con spead operador
  const arrUnificado2 = [...arr2, ...arr1];
  console.log(arrUnificado2);

  
// esto arregla los arreglos cuando estan en desorden
 console.log (arrUnificado2.sort()); 


