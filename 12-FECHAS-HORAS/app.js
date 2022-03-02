//Utilización de objeto date
var fecha = new Date();//Establecemos la fecha y hora actual
console.log(fecha.toString());

const fecha1 = new Date("December 17, 1995 06:20:00");//Establecemos el tiempo que queramos
console.log(fecha1.toString());

//Obteniendo año, mes y día
console.log(`Año actual: ${fecha.getFullYear()}`);
console.log(`Mes actual: ${fecha.getMonth() + 1}`);
console.log(`Día Actual: ${fecha.getDate()}`);
console.log(`Día Actual: ${fecha.getDay()}`);//Día de la semana

console.log(`Hora: ${fecha.getHours()}`);
console.log(`Minutos: ${fecha.getMinutes()}`);
console.log(`Segundos; ${fecha.getSeconds()}`);


var inicio = new Date(0);
console.log(inicio); //1 de enero de 1970 + zona horaria ( en mi caso +1:00 GMT)
const timestamp = fecha.getTime();
console.log(timestamp.toString()); //Segundos desde el inicio 1970 hasta ahora

/* 
EJERCICIO
 Comparador de dos fechas.
 Crear dos objetos Date, uno con una fecha cualquiera y el siguiente
 con la fecha actual, luego comparar ambos valores,
 visualizar cual es la fecha menor a la otra.
  */

 let fechaEjer = new Date(2017, 03, 01);
 let fechaActual = new Date();

 (fechaEjer.getTime() < fechaActual.getTime()) ? console.log(`${fechaEjer.toDateString()} es menor a ${fechaActual.toDateString()}`) : console.log(`${fechaEjer.toDateString()} es mayor a ${fechaActual.toDateString()}`);
 

