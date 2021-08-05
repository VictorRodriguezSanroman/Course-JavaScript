// //console.log("¡Hola a todos!");

// /*********
// *
// Declarando una variable
// *
// *******/
// //String
// var primerNombre = 'Víctor';
// console.log(primerNombre);

// //Numérica

// var edad = 32;
// var sueldo = 1250.50 + ' €';

// console.log("Sueldo: " + sueldo);

// //Boolean

// var tieneTrabajo = true;

// //Undifined

// var puestoDeTrabajo;//No está definida por que no tiene nada, solo está declarada

// console.log(puestoDeTrabajo);


// /****
//  * 
//  * Conversión de tipos
//  */

// var sexo, esSoltero;//Las variables pueden ser mutadas una variable que originalmente es númerica puede pasar a ser tipo String

// sexo = 'Hombre';
// esSoltero = false;
// console.log("Su nombre es " + primerNombre + ". Tiene " + edad + " años. Sexo: " + sexo + ". ¿Es soltero? " + esSoltero);



//  /**
//   * 
//   * Operadores - Matemáticos (+, -, *, /)
//   */

//  var numero1, numero2, suma, resta, multiplicacion, division;

//  numero1 = 10;
//  numero2 = 5;

//  suma = numero1 + numero2;
//  resta = numero1 - numero2;
//  multiplicacion = numero1 * numero2;
//  division = numero1 / numero2;

//  console.log('La suma entre ' + numero1 + ' y ' + numero2 + ' es igual a ' + suma);
//  console.log('La resta entre ' + numero1 + ' y ' + numero2 + ' es igual a ' + resta);
//  console.log('La multiplicación entre ' + numero1 + ' y ' + numero2 + ' es igual a ' + multiplicacion);
//  console.log('La división entre ' + numero1 + ' y ' + numero2 + ' es igual a ' + division);

//  //Operadores lógicos (<,>,==,!=)

//  var igualdad = numero1 != numero2;
//  console.log(igualdad);

//  //Operador typeof

//  console.log(typeof numero1);//Evalua el tipo de dato de una variable

//  //Operadores Unarios Aritméticos
//  //++ Incremento
//  //-- Decremento

//  numero1++;
//  numero2--;

//  suma = numero1 + numero2;
//  resta = numero1 - numero2;
//  multiplicacion = numero1 * numero2;
//  division = numero1 / numero2;

//  console.log('La suma entre ' + numero1 + ' y ' + numero2 + ' es igual a ' + suma);
//  console.log('La resta entre ' + numero1 + ' y ' + numero2 + ' es igual a ' + resta);
//  console.log('La multiplicación entre ' + numero1 + ' y ' + numero2 + ' es igual a ' + multiplicacion);
//  console.log('La división entre ' + numero1 + ' y ' + numero2 + ' es igual a ' + division);

//  // Operadores de asignación

//  numero1 += numero2; 
//  numero1 -= numero2;
//  numero1 *= numero2;
//  numero1 /= numero2;

//Ejercicio de codificación.
//A partir de los siguientes datos:

var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoCarlos = 89;
var alturaCarlos = 1.75;

/**Utilizar la siguiente fórmula para calcular el IMC de Luis y de Carlos,
 * IMC es igual al peso dividido entre la altura al cuadrado, luego comparar e indicar si el IMC
 * de Carlos es superior al de Luis
 */

//Solución

var imcLuis = pesoLuis / (alturaLuis * alturaLuis);
var imcCarlos = pesoCarlos / (alturaCarlos * alturaCarlos);

console.log("El IMC de Luis es: " + imcLuis);
console.log("El IMC de Carlos es: " + imcCarlos);

var comparacion = imcLuis == imcCarlos;
var superior = imcCarlos > imcLuis;

console.log("¿Son los IMC iguales? " + comparacion);
console.log("¿ES el IMC de Carlos superior al de Luis? " + superior);

