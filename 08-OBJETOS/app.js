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

/* let persona ={//Objeto
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
 */

/****** OBJETO STRING *********/

/* let nombre = 'Víctor Rodríguez';
let clave = '12345abcd';

console.log(nombre.length);//Nos muestra el numero 
console.log(nombre.toLocaleUpperCase());//Convierte todo a mayúsculas
console.log(nombre.toLowerCase());//Convierte todo a minúsculas

console.log (clave.includes('abc'));//Devuelve true si aparece en la cadena el texto facilitado (se puede poner un indice)
 */

/****** DESTRUCTURACIÓN DE OBJETOS *********/
//Sirve para extraer información
/* const respuesta = {
    codigo: 2000,
    data: {
        persona:{
            nombre: 'Víctor',
            direccion: {
                ciudad: 'Madrid',
                pais: 'España'
            }
        }
    }
}

let {data : {persona : { nombre : nom //alias}}} = respuesta;

console.log (nom); */

//Ejemplo 2, dentro de una función

const getPersonaDatos = () => {
    const respuesta = [
        {
        codigo: 100,
        data: {
            persona:{
                nombre: 'Víctor',
                direccion: {
                    ciudad: 'Madrid',
                    pais: 'España'
                    }
                }
            }
        },
        {
            codigo: 200,
            data: {
                persona:{
                    nombre: 'Susana',
                    direccion: {
                        ciudad: 'Lisboa',
                        pais: 'Portugal'
                        }
                    }
                }
            },
            {
                codigo: 300,
                data: {
                    persona:{
                        nombre: 'Cleo',
                        direccion: {
                            ciudad: 'Paris',
                            pais: 'Francia'
                            }
                        }
                    }
                }
    ]
    return respuesta;
}

let {data : {persona : { nombre : nom }}} = getPersonaDatos()[0];//Con la destructuracion sacamos la información que nos interesa
console.log ( nom);
for (const {codigo: status, data : {persona : { nombre : nom, direccion :{ ciudad }}}} of getPersonaDatos()){
    console.log(`${nom} vive en ${ciudad}`);
};

