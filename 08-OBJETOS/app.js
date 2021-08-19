//Objeto
/* let libro = {
    titulo: "El libro de JavaScript",
    autor: "Grover Pablo Vásquez",
    paginas: 400,
    publicado: false
};

console.log (libro.publicado);
console.log (`${libro.titulo} creado por ${libro.autor}`);

libro.paginas = 450;//Cambiar contenido
console.log (libro.paginas); */

/**
 * Ejecicio
 * Crear un objeto persona que tenga las siguientes características:
 * nombre, edad, ciudad
 * cambiar la edad
 * mostrar los datos de la persona
 */

/* let persona = {
    nombre: 'Víctor',
    edad: 31,
    ciudad: 'Madrid'
};
console.log (persona);

persona.edad = 32;
console.log (`${persona.nombre} tiene ahora ${persona.edad} años y vive en ${persona.ciudad}`);


//Introduciendo funciones

let libroA = {//Objeto A
    titulo: "El libro de JavaScript",
    autor: "Grover Pablo Vásquez",
    paginas: 400,
    publicado: false
};

let libroB = {//Objeto B
    titulo: "Programación en PHP",
    autor: "Grover Pablo Vásquez",
    paginas: 700,
    publicado: true
};

let getResumen = (libro) => {
    return {
        resumen: `${libro.titulo}, creado por ${libro.autor}`,
        resumenPag: `${libro.titulo} tiene ${libro.paginas} páginas`
    }
};

//Objeto A
let libro = getResumen(libroA);
console.log (libro.resumen);
console.log (libro.resumenPag);

//Objeto B
libro = getResumen(libroB);
console.log (libro.resumen);
console.log (libro.resumenPag);
 */


/******* REFERENCIA DE OBJETOS***********/

/* let persona ={
    nombre: 'Víctor',
    edad: 32,
    sueldo: 1200
}

console.log (persona);

let cambiarSueldo = (person, aumento) =>{
    person.sueldo += aumento;
    console.log (person);//Dentro de la función
}
cambiarSueldo(persona, 300);
console.log (persona);//El cambio se mantendrá fuera de la función
 */

/******* MÉTODOS ***********/

let persona ={//Objeto
    nombre: 'Víctor',
    edad: 29,
    sueldo: 1200,
    metodoPrueba: function(aumento){
        //console.log ('Escribiendo desde el método Prueba');//Se pueden añadir métodos como si un atributo más fuese
        let sueldoAumentado = this.sueldo + aumento;
        return sueldoAumentado;   
    },
    //uso del this
    cambiarEdad: function(e){
        this.edad += e;//Para referenciar al atributo del objeto y no a un parametro cualquiera
    }
}

let total = persona.metodoPrueba(300);
console.log (`${persona.nombre} cobraba ${persona.sueldo} y ahora cobra ${total} €`);
persona.cambiarEdad(3);
console.log (`${persona.nombre} tiene ${persona.edad} años`);