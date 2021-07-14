/*
Una funcion puede o no recibir parametros
y puede o no valores
son un tipo de dato funciones flechas 
*/

//Funcion declaradas 
function miPrimeraFuncion(){
  console.log("Uno")
  console.log("Dos")
  return "Hasta aca se lee la funcion lo de abajo se ignora si hay mas returns"
  console.log("Tres")
  return "holaa"
}
//miPrimeraFuncion() Siempre recordar poner () para llamarla


 function segundaFuncionDevuelveValor(){
  console.log("Uno")
  console.log("Dos")
  console.log("Tres")
  return "Funcion devolviendo una cadena";
 }
//let valorFuncion = segundaFuncionDevuelveValor();
//console.log(segundaFuncionDevuelveValor )  de esta manera la funcion retorna el valor de return si se hace directo imprime la funcion toda




//funciones con valores
//Tambein se puede inicializar las variables de la funcion
function saludo (nombre ,edad){
console.log(`hola mi nombre es ${nombre} y tengo ${edad} años`)
}



//function adios(nombre ="NOMBRE_EJEMPLO",edad = 33) INICIALIZARLAS

function adios(nombre,edad){
  console.log(`hasta luego ${nombre} recuerda que tengo ${edad} años!`)
}
 
//adios("steven",21); //asi se colocan datos a la funcion teniendo en cuenta el orden


//ORDEN FUNCIONES

//Funciones declaradas VS Expresadas

  //funcionDeclarada()

function funcionDeclarada(){
  console.log("Esto es una prueba de la funcion declarada, puede invocarse en cualquier parte del codigo incluso antes de la funcion sea declarada")
}

    //funcionDeclarada()


//Funciones anonimas, funciones expresadas que se le asignan como valor a una variable si se invocan estas funciones antes de su deficion JS si dara error

funcionExpresada()

const funcionExpresada = function(){
  console.log("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt, quisquam minus et voluptatibus ipsam.")
}

funcionExpresada()
