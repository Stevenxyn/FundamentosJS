let contador = 0;

// antes de empezar a ejecutar la condicion se debe de cumplir
// while( contador < 10){
//   console.log("Numero while es: " +contador)
//   contador ++;
// }

//aca siempre se ejecutara todo el bloque ya que la evaluacion de la condicion esta al final
// do{
//   console.log("Numero do while es: " +contador)
//   contador++;
// }while(contador < 11)


/* ciclo for mas usado ue los dos antes mencionados

partes del for:
for ( let index = 0;  index < array.length;  index++) {
  const element = array[index];
}
 
for( inicializacion de la variable; condicion; decremento o incremento){
  las lineas de codigo que ejecuta el for
  las lineas de codigo que ejecuta el for
  las lineas de codigo que ejecuta el for
}
*/

for(let i = 1; i < 11; i++){
  console.log("For: " +i)
}

let arrayNumeros = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < arrayNumeros.length; i++) {
  console.log("El array es: " + arrayNumeros[i])
}

//Programa que me cuente del 1 al 100

for(let i = 1; i <=100;i++){
 document.write(`El numero es:${i} <br>`)
}

const elPepe = {
  nombre: "pepe",
  edad: 12,
  sexo: "hombre",
  pais:"colombia"
}


// forin es un loop que permite recorrer los objetos
for (const key in elPepe) {
 //console.log(key) key serian las propiedades del objeto, y arroja las propiedades sin valores

 console.log(`Propiedades ${key} values: ${elPepe[key]}`) //tener en cuenta que en el for in los objetos se deben colocar con [] no puntos
}


//for of
for (const key in arrayNumeros) {
// console.log(key)
}

let cadenas = "hola mundo!"
for (const caracter of cadenas) {
  console.log(caracter)
}

/* for in variante del ciclo for que permite recorrer cada una de las propiedades

for or poder recorrer cada uno de los elementos que sea 

iterable = que se pueda partir en pequeños elementos que cada caracter se puede recorrer*/ 

 

