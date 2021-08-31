let array = [1,2,3,4,5,6,7,8,9,10,11,20,21,22,23]; 
//Forma incorrecta
console.log(Math.max(array))

console.log(Math.max(...array))
console.log(Math.min(...array))

//Sumarle restarle o demas al valor arrojado maximo del array

let array2 = [10,11,12,13,14,15,16,17,18,19,20]

console.log(Math.max(...array2) - 10)
console.log(Math.max(...array2) * 2)
console.log(Math.max(...array2) + 10)
console.log(Math.max(...array2) % 10)


