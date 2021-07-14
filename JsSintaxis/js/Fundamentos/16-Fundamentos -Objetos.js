//Un Objeto es una coleccion de valores

//Dentro de un objeto las variables se van a llamar atributos/propiedades y a las funciones se les llaman metodos

const persona = {
nombre: "ElPepe",
apellido: "eteshet",
edad: 75,
estadoCivil:false,
pasatiempos: ["cantar","comer","dormir"],
contacto: {
  email: "eteshetpepe75@gmail.com",
  telefono: 123456789,
  twitter: "@Elpepe75"
},

saludo: function(){
  console.log("Hola que tal :)")
},

decirMiNombre: function(){
console.log(`Hola me llamo ${this.nombre} mi apellido ${this.apellido} y tengo ${this.edad}
contactame en ${this.contacto.twitter} y puedes llamarme a ${this.contacto.telefono}`)
}
}

console.log(persona)

//para imprimir los valores que yo quiera es igual que los arrays pero en lugar del [] es con .

console.log(persona.contacto) 
console.log(persona.edad)
console.log(persona.nombre, persona.apellido)// imprimir varias propiedades de un objeto

console.log(persona.pasatiempos[1])// aca imprimo por consola un atributo del objeto dentro de un array
console.log(persona.pasatiempos[1][4])// imprime comer del array pasatiempo y la letra que elija en el segundo array del console

console.log("*******************ARRAYS************************")

console.log(persona.pasatiempos[0][0])
console.log(persona.pasatiempos[0][1])
console.log(persona.pasatiempos[0][2])
console.log(persona.pasatiempos[0][3])
console.log(persona.pasatiempos[0][4])
console.log(persona.pasatiempos[0][5])

console.log("*******************OBJETOS************************")

console.log(persona.contacto.twitter)// trae el twitter
console.log(persona.contacto.email[0])//trae las letras que elija con el array
console.log(persona.contacto.telefono)


//Funcion dentro del objeto persona
persona.saludo()

persona.decirMiNombre()

console.log(Object.keys(persona))

console.log(Object.values(persona))

console.log(persona.hasOwnProperty("contacto")) // me trae a ver que nombre de propiedades si existe o no
