let nombre = "Carlos Steven Lopez";
let apellido = 'Steven';
let saludo = new String("Bienvenido");

console.log("Longitud de nombre: " + nombre.length +
  "\nLongitud apellido: " + apellido.length +
  "\nLongitud Saludo: " + saludo.length)


  /*
  length > Longitud
  toUpperCase() > Pone en mayusculas
  toLowerCase() > Pone minusculas
  includes > verifica si esta incluido 
  trim() > elimina los espacios de mas 
  split() > separa y organiza ejemplo un arreglo dependiendo que se pone espacios o ,
  
  */

  const USUARIO = prompt ("Ingresa tu nombre: ") ;
  const CLAVE = prompt("Ingresa tu edad: ");

  //Ingreso

 let verificarUsuario = prompt ("Ingresa tu nombre antes mencionado: ");
 let verificarClave = prompt ("Ingresa tu edad antes mencionada: ")

 if((verificarUsuario == USUARIO) && (verificarClave == CLAVE)){
   alert(" Bienvenido: " + USUARIO + "\nClave: " + CLAVE)
 }
 else{
   alert("usuario incorrecto")
 }

 let texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo repellat commodi voluptatem impedit exercitationem neque dolor ducimus ad quam, possimus sint mollitia delectus harum deleniti voluptates pariatur quas? Unde, quos!";

 console.log(texto.split(" "))

 
 

 

 