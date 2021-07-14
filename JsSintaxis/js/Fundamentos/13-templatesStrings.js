// alt + 96 acento grabe 

let nombre = "Steven";
let apellido = "Lopez"

//Interpolacion de variables
let union =`Hola mi nombre es ${nombre} y mi apellido es ${apellido}.`
console.log(union)

//Sin interpolacion se ve mas desordenado y no deja ponerlo como interpolacion
let estacionesSin = "<ul><li>Verano</li><li>Otoño</li><li>Invierno</li></ul>"
console.log(estacionesSin)

//Interpolacion
let estaciones = `<ul>
<li>Verano</li>
<li>Otoño</li>
<li>Invierno</li>
</ul>`
console.log(estaciones)

let fraseUno = "Hola bienvenido"
let fraseDos = "carlos steven lopez"
 
let union2 = `Con gusto me ${fraseUno} señor ${fraseDos} que pases un excelente dia bb`
console.log(typeof union2)


