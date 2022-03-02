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

/* {
    const a = 3;
    let b = 4;

    console.log(a + b);//Dentro del bloque sí funciona
    var c = 5;
}
//console.log(a + b);//No va a funcionar por que están esas variables dentro del bloque
console.log(c);//Funciona por qué es variable declarada por ES5(antiguo)
 */

//Template Strings
/*
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
 */

//Funciones de cadenas ES6
/* 
let nombreCompleto = `${nombre} ${apellido}`;
console.log (nombreCompleto);

console.log (`${nombre} `.repeat(5));
console.log (nombreCompleto.includes('Víc'));//dará verdadero o falso si aparece dentro de la cadena
console.log (nombreCompleto.startsWith('V'));//dará verdadero o falso si aparece el inicio igual .endsWith para el final */


//Funciones flecha --> arrow functions

/* const years = [2000, 2005, 2008, 2012];

//ES5
var age5 = years.map(function(age){
    return 2021 - age;
});
console.log(age5);

//ES6
let age6 = years.map(el => 2021 - el);
console.log (age6);

age6 = years.map((el, index) => `Edad ${index + 1}: ${2021 -el}`);//Función de flecha en una sola línea
console.log (age6);

age6 = years.map(//Función de flecha en varias líneas
    (el, index) => {
        const currentYear = new Date().getFullYear();
        const age = currentYear - el;
        return `Edad ${index + 1}: ${age}`;
    }
); */
/* console.log (age6);

const squareOf = function(num){
    return num * num;
}; */

//Para convertirlo en una función de tipo flecha
//const squareOf = (num)/**número que pasamos por parámetro*/ => num * num/**Código a ejecutar*/;

/* console.log (squareOf(5));

//ejemplo 2
const peoples = [
    {
        name: 'Víctor',
        age: 32
    },
    {
        name: 'Susana',
        age: 29
    },
    {
        name: 'Lucas',
        age: 2
    },
    {
        name: 'Cleo',
        age: 6
    }

];

//Función normal
const under20 = peoples.filter(function (peoples){
    return peoples.age < 20;
}); 
console.log (under20);

//Función tipo flecha
 const beyond20 = peoples.filter((peoples) => peoples.age > 20);
console.log (beyond20); */

/**********Destructuración - Destrucción - Destructuring *****************/

//ES5
/* var data = ['Víctor', 32];

//var name = data[0];
//var age = data[1];

//ES6
//Ejemplo 1
var [name, age] = ['Susana', 29];
 
console.log(name);
console.log(age);

//Ejemplo 2
const people = {
    Name: 'Cleo',
    Age: 6
};

const {Name, Age} = people;
console.log(Name);
console.log(Age);

const {Name: n, Age: a} = people;//Alias
console.log(n);
console.log(a);

const calLegalAge = (year) => {
    const age = new Date().getFullYear() - year;
    const beyond = age >= 18 ? true : false;
    return [age, beyond];
}

const [age2, beyond] = calLegalAge(1989);
console.log(age2);
console.log(`Es mayor de edad: ${beyond}`); */

/******************* MAPS ************************/

/* const data = new Map();

data.set('name','Víctor');
data.set('age', 32);
data.set('email', 'victor@email.com');
data.set('movil',612345678);

//data.clear();//Limpiar mapa
//data.delete(4);//Borra un elemento del mapa
//console.log(data.get('name'));
//console.log(data.size)

//Recorrer el mapa

data.forEach((value, key) => {
    console.log(`${key}: ${value}`);
})
 */
/**************** Operadores de propagación - Spread Operator ******************/

var sum = function (a, b, c ,d){
    return a + b + c + d;
}

var op1 = sum (10, 20 , 30, 40);
console.log (op1);

var values = [10, 20, 30, 40];
const op2 = sum(...values);//Spread Operator
console.log (op2);

const hhrr = ['Lucas', 'Cleo','Pablo'];
const accounting = ['Víctor','Susana','María'];

const company = [...hhrr, ...accounting];
console.log (company);

