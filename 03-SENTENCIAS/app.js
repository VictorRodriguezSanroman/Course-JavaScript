/*****************************
 * 
 * Sentencias if / else
 * 
 

 var nombre = "Víctor";
 var estadoCivil = "Casado";
 var estaCasado = false;
 
 if (estadoCivil == "Casado"){
     console.log(nombre + " está casado");
 }else{
     console.log(nombre + " está soltero");
 }
 
 if (estaCasado){
     console.log(nombre + " está casado");
 }else{
     console.log(nombre + " está soltero");
 }
*/

 /*******
  * Sentencias condicionales
  

 var nom = 'Pablo';
 var edad = 15;

 /**edad < 12 es un niño.
  * edad > 11, es < 18, es un adolescente.
  * edad > 17, es < 60, es adulto.
  * edad > 60, es anciano.
  

 if ( edad < 12){
     console.log (nom + ' es un niño.');
 }else if(edad > 11 && edad < 18){
     console.log(nom + ' es un adolescente.')
 }else if(edad > 17 && edad < 60){
     console.log(nom + ' es un adulto.')
 }else{
     console.log(nom + ' es un anciano.')
 }
*/

 /*****
  * Operador ternario
  */

/* 
 var nombre = 'Pablo';
 var edad = 17;

 edad >= 18 ? console.log(nombre + ' es mayor de edad') : 
 console.log(nombre + ' es menor de edad');
 //if / else resumido en una sola línea
 */

 /**
  * Sentencia Switch
  */
/* 
 var mes = 3;

 switch (mes){
     case 1: 
        console.log ("Enero");
     break;
     case 2:
         console.log ("Febrero");
     break;
     case 3:
         console.log ("Marzo");
     break;
     case 4:
         console.log ("Abril");
     break;
     case 5:
         console.log ("Mayo");
     break;
     case 6:
         console.log ("Junio");
     break;
     case 7:
         console.log ("Julio");
     break;
     default :
         console.log ("Mes no válido");
 } */

 /**
  * Sentencia for
  */

/*  for ( var i = 1 ; i <= 10 ; i++){
     console.log (i);
 } */

/**
 * Sentencia while
 */

/* var i = 10;

while (i > 0){
    
    console.log (i);
    i--;
} */

/**
 * Sentencia do...wile
 */
//Igual que la anterior pero debe ejecutarse al menos una vez, en el anterior caso no era necesario

/* var i = 1;

do{
    console.log (i);
    i++
}while (i <= 10); */

/********************************
 * Tienes dos alumnos Pablo y Marta.
 * Pablo tiene las siguientes notas: 14, 8, 16.
 * Marta tiene las siguientes notas: 12, 18, 10.
 * 
 * Calcular el promedio de cada alumno, además indicar quién tiene el promedio
 * superior e indicar si el alumno está aprobado, para ello su promedio
 * debe ser superior a 13
 */


// Notas de Pablo

var notaPablo1 = 14; notaPablo2 = 8; notaPablo3 = 16;

//Notas de Marta

var notaMarta1 = 12; notaMarta2 = 18; notaMarta3 = 10;

//Promedios

var promedioPablo = (notaPablo1 + notaPablo2 + notaPablo3) / 3;

var promedioMarta = (notaMarta1 + notaMarta2 + notaMarta3) / 3;

console.log ("Las notas de Pablo son: " + notaPablo1 + ", " + notaPablo2 + ", " + notaPablo3 + ". y su promedio es de: " + promedioPablo);
console.log ("Las notas de Marta son: " + notaMarta1 + ", " + notaMarta2 + ", " + notaMarta3 + ". y su promedio es de: " + promedioMarta);

if (promedioPablo > promedioMarta){
    console.log ("El promedio de Pablo es superior.");
}else if (promedioPablo < promedioMarta){
    console.log ("El promedio de Marta es superior.");
}else{
    console.log ("Los promedios son iguales.");
}


//Mostrar si están aprobados

var aprobado = 13;

for (var i = 1; i <= 2; i++){
    if (i === 1){
        if(promedioPablo > aprobado){
            console.log ("Pablo está aprobado");
        }else{
            console.log ("Pablo está suspenso");
        }
    }else{
        if(promedioMarta > aprobado){
            console.log ("Marta está aprobada");
        }else{
            console.log ("Marta está suspenso");
        }
    }
}


/* if (promedioPablo < aprobado && promedioMarta < aprobado){
    console.log ("Ambos alumnos están aprobados");
}else if (promedioPablo > aprobado && promedioMarta < aprobado){
    console.log ("Pablo está aprobado pero Marta no");
}else if (promedioPablo < aprobado && promedioMarta > aprobado){
    console.log ("Marta está aprobada pero Pablo no")
}else{
    console.log ("Ambos están aprobados");
} */




























