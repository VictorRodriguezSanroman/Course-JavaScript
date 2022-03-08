// Función para programar una función/ evento en un tiempo determinado
/* setTimeout(function() {
    console.log('Esto aparece después de 3s')
}, 3000);

// Mediante función de flecha
setTimeout(() => console.log('Esto aparece después de 6s'),6000); */

//JavaScript Asíncrono
// ejecutar código en background mientras se ejecuta otro código
/* const segundo = () => {
    setTimeout(() => {
        console.log('Llama a segundo');
    },2000); 
}
const primero = () => {
    console.log('Inicio de primero');
    segundo();//Callback
    console.log('Fin de primero');
}
// Aunque en ese orden con la función setTimeout podemos establecer el tiempo en el que llamemos a esa función
primero(); */

/* const getUsuarios = () => {
    setTimeout(() => {//Callbacks
        const userIDs = [101, 102, 103, 104, 105];
        console.log(userIDs);

        setTimeout((id) => {//No es necesario llevar parentesis
            const usuario = {
                email:'victor@gmail.com',
                nombre:'Víctor'
            }
            console.log(`${id} - ${usuario.email} - ${usuario.nombre}`);

            setTimeout(() =>{
                const permisos = ['admin','creador'];
                console.log(permisos);
            },1500);

        },1500, userIDs[0]);

    },1500);
}

getUsuarios(); */

// DE CALLBACKS A PROMESAS

/* const getUsuariosIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([101, 102, 103, 104, 105]);
    }, 2000);
});

const getUsuarios = userID => {
    return new Promise((resolve, reject) => {
        setTimeout((id) => {
            const usuario = {
                email: 'victor@gmail.com',
                nombre: 'Víctor'
            }
            resolve(`${id} - ${usuario.email} - ${usuario.nombre}`);
        },2000, userID);
    })
}

const getPermisos = id => {
    return new Promise((resolve, reject) => {
        setTimeout((id) =>{
            const permisos = ['admin','creador'];
            resolve(permisos);
        },2000, id)
    })
} */


// LLamada a las promesas
/* getUsuariosIDs.then(IDs => {
    console.log(IDs);
    return getUsuarios(IDs[3]);
})
.then((usuario) => {
    console.log(usuario);
    return getPermisos(usuario.id);
})
.then((permisos) => {
    console.log(permisos);
})
.catch(()=>{
    console.log('Error');
}) */


// Función con Async/Await
/* async function getUsuariosAW(){
    const IDs = await getUsuariosIDs
    console.log(IDs);
    const usuario = await getUsuarios( IDs[3]); //await solo cuando es asincrona la función
    console.log(usuario);
    const permisos = await getPermisos(usuario.id);
    console.log(permisos);

}
getUsuariosAW(); *///Llamamos a la función

// Ejemplo de una llamada AJAX con HTML Request
const request = new XMLHttpRequest();

request.onreadystatechange = () => {
    if(request.readyState == 4 && request.status == 200){
        const datos = JSON.parse(request.responseText);
        console.log(datos);
    }
}

request.open('GET', 'https://jsonplaceholder.typicode.com/users');
request.send();



































// EJEMPLO DEL USO DE PROMESAS
// Ejemplo 1
/* let promesa = new Promise((resolve, reject) => {
    if(true){// si la promesa se ejecuta correctamente
        resolve('La operación fue un exito');
    }else{
        reject('Hubo un error');
    }
})

promesa.then( response => {
    console.log('Response: ' + response);
}).catch (error => {
    console.log(error);
});

//ejemplo 2
let miPromesa = Promise.resolve('Comida');//Otra forma de declararlo
miPromesa.then(resp => console.log(resp));

// Ejemplo 3
var miPromesa2 = new Promise(function(resolve, reject) {//Se puede hacer mediante funciones de flecha o normales
    if(true){
        setTimeout(() => resolve(4),2000);
    }else{
        reject('Error');
    }
    
})

miPromesa2.then(response => {
    response += 5;
    console.log(response);
}).catch(err => {
    console.log(err);
}) */


