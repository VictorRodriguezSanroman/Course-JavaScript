/* function bienvenido(){
    console.log('Hola Bienvenido a la sección de funciones.');
}



function bienvenido2(){
    return "Aquí aprenderás todo sobre las funciones en JavaScript.";
}

bienvenido();

var mensaje = bienvenido2();

console.log(mensaje); */

//Partes de una función

/**
 * Entradas (parametros/argumentos), código, salida (return)
 */

/* function cuadradoNumero (num){
    var resultado = num * num;
    return resultado;
}

var num = 3;
var valor = cuadradoNumero(num);
console.log(valor); */

/**
 * Función que converte de grados Fahrenheit a Celsius
 * 32F = 0C, 68F =20C
 * C = (F - 32) * 5/9
 */

/* function fahrenheitToCelsius (gFahrenheit){
    var Celsius = (gFahrenheit - 32) * 5 / 9;
    return Celsius + " Grados Celsius";
}

var F = 68;
var resultado = fahrenheitToCelsius(F);
console.log(F + " Grados Fahrenheit son " + resultado);

var F = 32;
var resultado = fahrenheitToCelsius(F);
console.log(F + " Grados Fahrenheit son " + resultado); */

//Función para el cálculo de edad de una persona
 /* function calcularEdad(anyoNacimiento){
    var edad = 2021 - anyoNacimiento;
    return edad;
}
/*
var nac = 1989;
var edad = calcularEdad(nac);
console.log(edad + " años."); 

/**************************************************
 * Calcular cuantos años le falta a una persona para que se jubile.
 * Una persona se jubila a la edad de 65 años.
 * Enviar como datos a la función su año de nacimiento y su nombre.
 

function calculojubilacion (nombre, anyoNacimiento){
    
    var edad =  calcularEdad(anyoNacimiento);//LLamamos a una función dentro de otra función
    var jubila = 65 - edad;
    console.log(nombre + " le quedan " + jubila + " años para jubilarse.");
}

calculojubilacion ('Víctor', 1989); */

/**********
 * Funciones como expresiones
 */

/* var prueba =function(){
    console.log('Prueba');
}

var prueba2 = function(){
    return 'Mensaje de prueba';
}

prueba();
console.log(prueba2()); */

/*******
 * Plantillas de cadenas (templates strings)
 */

/* var nombre = 'Pablo';
console.log(`El nombre es: ${nombre}`);//Dentro de una cadena introduces la variable con ${} (todo esto entre comillas invertidas)

var a = 5;
var b = 10;
console.log(`La suma es: ${a + b}`); */

/*******************************************
 * Ejercicio
 * Impementar una función que nos permita evaluar el
 * prodentaje de respuestas positivas y negativas de un examen.
 * La función recibe el nombre y la cantidad de
 * respuestas positivas y negativas.
 * 
 * La función debe calcular el porcentaje que representa cada
 * tipo de respuesta, en una base de 100 preguntas.
 * 
 * De las respuestas positivas se define el score de la persona en:
 * A( > 90%), B(70% - 89%), C(45% - 69%), D(<45%)
 */

function respuestas (nombre, resPos, resNeg){
    var pos = `${(resPos / 100) * 100}%`;
    var neg = `${(resNeg / 100) * 100}%`;
    console.log(`${nombre} ha obtenido un ${pos} de respuestas positivas y un ${neg} de repuestas negativas.`);

    var score = '';
    if(resPos >= 90 ){
        score = 'A';
    }else if(resPos >= 70 && resPos <= 89){
        score = 'B';
    }else if(resPos >= 45 && resPos <= 69){
        score = 'C';
    }else{
        score = 'D';
    }

    return `Calificación obtenida: ${score}`;
}

var solucion = respuestas ('Víctor', 85, 15);
console.log(solucion);