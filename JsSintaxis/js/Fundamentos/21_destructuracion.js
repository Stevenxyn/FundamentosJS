/*
Asignar a variables los datos que estan en arreglos o objetos
*/

let numeros = [1,2,3];
/*Manera no convencional*/

/* let uno = numeros[0],
     dos = numeros[1],
     tres = numeros[2];
     
console.log(`Arreglo normal: ${numeros}
                    Primer valor arreglo: ${uno}
                    Segundo valor arreglo: ${dos}
                    Trercer valor arreglo: ${tres}`)

console.log("Arreglo normal:" + numeros +"\n"+
                    "Primer valor arreglo:" + uno +"\n"+
                    "Segundo valor arreglo:" + dos +"\n"+
                    "Trercer valor arreglo: " + tres +"\n") */

/*Manera dinamica */
let [uno,dos,tres] = numeros;

console.log(`El numero del array posicion #1 es: ${0}
                    El numero del array posicion #2 es: ${1}
                    El numero del array posicion #3 es: ${2}`)


/*Manera dinamica*/

const persona =  {
  nombre: "ElPepe",
  apellido: "Eteshet",
  edad: 25
}

/* let {nombre, apellido, edad} = persona;

console.log(persona)
console.log(nombre, apellido,edad);
 */
