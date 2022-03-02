/**
 * Arrays en JavaScript
 */
/* 
var nombre =['Pablo', 'Carlos', 'Ana', 'Teresa'];//Forma de declarar una Array
var vegetales =new Array('Tomate','Lechuga','Zanahoria');//Segunda forma de declarar un a array

console.log (nombre[1]);
console.log (nombre[2]);
console.log (vegetales[1]);

//Se pueden actualizar

nombre[1] = 'José';
vegetales[2] = 'Nabo';

console.log (nombre[1]);
console.log (vegetales[2]);

console.log(nombre.length);//Número de componentes dentro de una array
 */

/**************
 * Operaciones con Arrays
 */

/* 
var frutas = ['Pera', 'Manzana','Uva','Sandía'];
//console.log (frutas);
/* 
for( var i = 0; i < frutas.length; i++){//Recorremos una array
    console.log (frutas[i]);
} 

/* frutas.forEach(function(elemento, indice, array){
    console.log (elemento, indice + 1);
})//más utilizado para recorrer una array 

frutas.push('naranja');//Agregar un elemento al final de la array */

/* frutas.unshift('fresa');//Agregar al principio

frutas.pop();//Elimina el último elemento de la matriz
frutas.shift();//Elimina el primero

var pos = frutas.indexOf('Uva');//Posición dentro de una array

frutas.splice(1,1);//Eliminamos elementos primer indice desde donde comienza segundo hasta donde acaba

console.log(pos);
/* console.log (frutas);  

var persona = ['Pablo', 'Vasquez', 34, '999999999', 1.75];

//Arrays con diferentes tipos

console.log (persona); */


/****************************************************************
 * Objetos Literales
 */

/* var personas = {
    nombre: 'Pablo',
    apellidos:'Vásquez',
    gustos:['Futbol','Películas','Inglés'],
    trabajo:'Instructor',
    esCasado: true
};

console.log (personas.nombre);
 */

/**************
 * Objetos con la sintaxis Object
 */

/* var persona2 = new Object();
persona2.nombre ='Ana';
persona2.apellido ='Pinedo';
persona2['Trabajo'] = 'WebDeveloper';

console.log (persona2); */

//Objetos y métodos

var personas = {
    //Atributos
    nombre: 'Pablo',
    apellidos:'Vásquez',
    gustos:['Futbol','Películas','Inglés'],
    trabajo:'Instructor',
    esCasado: true,
    anyoNacimiento: 1985,

    //Métodos
    calcularEdad: function (){
        this.edad = 2021 - this.anyoNacimiento;
    }
};
personas.calcularEdad();
console.log (personas);
