/*
Se denomina objeto literal al objeto cuyas propiedades están declaradas textualmente en el código. Los objetos pueden almacenar métodos en su interior. Para acceder a las propiedades de un objeto dentro de un método es necesario usar la palabra reservada this por scope de las variables
*/


let nombrePerro = "Tomy";

let mascota = "Spencer";
let edad = 2;

/*Forma antigua*/
const animal = {
  nombre:mascota,
  edad:edad,
  maullar: function (){
    console.log("MIUAAAAA!!!")
  },
  raza:"criolla"
}
/* console.log(animal)
animal.maullar() */


/*Nuema implementacion mas dinamica*/
const perro = {
  nombrePerro,
  edad:5,
  ladrar(){console.log("guaooo guaoooo!!")},
  color:"marron"
}

/* console.log(perro)
perro.ladrar()
animal.maullar() */




