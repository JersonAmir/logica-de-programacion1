const prompt = require('prompt-sync')();


let num1 = parseFloat(prompt("Ingresa el primer número: "));
let num2 = parseFloat(prompt("Ingresa el segundo número: "));
let num3 = parseFloat(prompt("Ingresa el tercer número: "));



function ordenarNumeros(num1, num2, num3) {

  let mayor;
  let centro;
  let menor;
  
 
  if (num1 >= num2 && num1 >= num3) {
    mayor = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;
  } else {
    mayor = num3;
  }

  if (num1 <= num2 && num1 <= num3) {
    menor = num1;
  } else if (num2 <= num1 && num2 <= num3) {
    menor = num2;
  } else {
    menor = num3;
  }

  
  if (num1 !== mayor && num1 !== menor) {
    centro = num1;
  } else if (num2 !== mayor && num2 !== menor) {
    centro = num2;
  } else {
    centro = num3;
  }
  
  return {
    mayor,
    centro,
    menor,
    ordenMayorAMenor: [mayor, centro, menor],
    ordenMenorAMayor: [menor, centro, mayor],
  };
}

const resultado = ordenarNumeros(num1, num2, num3);

console.log(resultado);