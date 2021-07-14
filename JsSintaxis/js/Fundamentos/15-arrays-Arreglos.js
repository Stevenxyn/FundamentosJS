//maneras de deckarar arreglos SIEMPRE EMPIEZAN POR 0

const a = [];

let b = [1, "carlos", 12.12, ["a", "b", "c", "MAINCRA"]];
console.log(b);
console.log(b.length); //longitud con length

console.log(b[1]); //Asi imprimo el valor que yo quiera
console.log(b[2]);

console.log(b[3]); //Asi se llama un arreglo pero si quiero lo que hay dentro de un arreglo es:
console.log(b[3][3]);
console.log(b[3][2]);

const c = Array.of("C", "A", "R", "L", "O", "S", 21);

//console.log(c);

// aca se crean 10 pocisiones y las lleno el valor de esas posiciones con false
const d = Array(10).fill(false);

const ejemplo = Array(50).fill(1500);
//console.log(ejemplo);



//agregar y eliminar elementos de un arreglo

const arregloPrueba = ["A" , "B" , "C", "D"];
console.log(arregloPrueba)

arregloPrueba.push("E" , "F" , "G") //AGREGA UN ELEMENTO
console.log(arregloPrueba)


arregloPrueba.pop()//ELIMINA EL ULTIMO ELEMENTO
console.log(arregloPrueba)

arregloPrueba.shift()//ELIMINA EL PRIMER ELEMENTO
console.log(arregloPrueba)


arregloPrueba.forEach(function(elemento,index){ //elemento es cada elemento valga la rebundancia del arreglo, el index es la enumeracion la longitud de cada uno de los elementos
console.log(`<li id="${index}">${elemento}</li>`)
document.write(`<li id="${index}">${elemento}</li>`)
})
