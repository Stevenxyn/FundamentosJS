/*
try = intentar
catch = captura
finally = finalmente

*/

try{
  console.log("Aca se agrega el codigo a evaluar");
  noExistebb; //si el error esta aca autmaticamente salta y no lee el siguiente console.log nos envia al catch del error 

  console.log("Segundo mensaje del Try")
}catch(error){
  console.log("Si hay algun error aca se capturara el error surgido o lanzado en el try");
  console.log(error)//recordar que se debe colocar ver el error para saber cual es
}finally{
  console.log("el bloque finally se ejecuta siempre al final de un bloque Try-catch");
}


console.log("************************************************************")

try{
 let numero = "5";

 if(isNaN(numero)){ //isNaN para validar que sea un numero retorna true o false
    throw new Error("El caracter introducido no es un numero")
 }
  console.log(numero * numero)
}catch(error){
  console.log(`se produjo el siguiente error: ${error}`)
}

let numero2 = 12;

let validacion= (isNaN(numero2))
?`El dato ingresado es ${typeof numero2 + numero2}`
:`El dato ingresado es ${typeof numero2} y es el numero:  ${numero2}`;
//console.log(validacion)



// funcion para validar si es o no un numero mini programita :)
function validarDato (dato){
  if(isNaN(dato)) {
  console.log("El dato introducido no es un numero")
  }else{
  console.log(`El dato introducido si es un numero!`)
  }
}
//validarDato("1")