//Variables ES5
/* var nombre5 = 'Pablo';
console.log (nombre5);
var edad5 = 35;
nombre5 = 'Carlos'; 
console.log (nombre5); */


//Variables ES6

/* const nombre6 = 'Pedro';//variables de solo lectura
let edad = 28;//variables que puedes cambiar el valor
console.log (edad);
console.log (nombre6);

edad = 29;
console.log (edad);
 */

//Bloques y alcance de las variables que
/* let test; 

test = 10;
 function prueba(){

    let test;
     test = 15;// este test pertenece al que está dentro de la función
 }

 prueba(); 
 console.log (test);
*/

{
    const a = 3;
    let b = 4;

    console.log(a + b);//Dentro del bloque sí funciona
    var c = 5;
}
//console.log(a + b);//No va a funcionar por que están esas variables dentro del bloque
console.log(c);//Funciona por qué es variable declarada por ES5(antiguo)


//Template Strings
let nombre = 'Víctor';
let apellido = 'Rodríguez';
const nacimiento = 1989;
const ciudad = 'Madrid';
function calcularEdad(year){
    return 2021 - year;
}

//ES5
console.log (nombre + " " + apellido + ', nació en ' + ciudad 
            + ' y su edad es ' + calcularEdad(nacimiento) + " años");//Concatenación simple

//ES6
console.log(`${nombre} ${apellido}, nació en ${ciudad} y su edad es ${calcularEdad(nacimiento)} años`);//Template string