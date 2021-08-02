let operacion = parseInt(
  prompt(
    "Elije la operacion: \n1 suma \n2 resta \n3 multiplicacion \n4 division \n5 numero par \n6 numero inpar"
  )
);

switch (operacion) {
  case 1:
    let s1 = parseInt(prompt("Ingresa primer numero a sumar: "));
    let s2 = parseInt(prompt("Ingresa segundo numero a sumar: "));
    alert(`La suma total es de: ${s1 + s2}`);
    break;
  case 2:
    let r1 = parseInt(prompt("Ingresa primer numero a restar: "));
    let r2 = parseInt(prompt("Ingresa segundo numero a restar: "));
    alert(`La resta es de: ${r1 + r2}`);
    break;
  case 3:
    let m1 = parseInt(prompt("Ingresa primer numero a multiplicar: "));
    let m2 = parseInt(prompt("Ingresa segundo numero a multiplicar: "));
    alert(`La multiplicacion es: ${m1 + m2}`);
    break;
  case 4:
    let d1 = parseInt(prompt("Ingresa primer numero a multiplicar: "));
    let d2 = parseInt(prompt("Ingresa segundo numero a multiplicar: "));
    alert(`La multiplicacion es: ${d1 + d2}`);
    break;
  case 5:
    let limite = parseInt(prompt("Ingresa el limite que quieres "));
    for (let i = 0; i < parseInt(limite); i++) {
      if (i % 2 === 0) document.write(`Pares son: ${i}<br>`);
    }
    break;
  case 6:
    let inpar = parseInt(prompt("Ingrese el limite que quieres: "));
    for (let i = 1; i < inpar; i++) {
      if (i % 2 === 0) document.write(`Inpares son: ${++i}<br>`);
    }
    break;
  default:
    alert("Digite una operacion valida");
    break;
}
