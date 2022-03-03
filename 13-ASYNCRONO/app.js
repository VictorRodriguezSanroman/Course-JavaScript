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

const getUsuarios = () => {
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

getUsuarios();