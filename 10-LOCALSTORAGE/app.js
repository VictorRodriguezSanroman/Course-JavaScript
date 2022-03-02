//localStorage.setItem('nombreUsuario','Grover');
//localStorage.setItem('ubicacion','Iquitos');
//console.log(localStorage.getItem('nombreUsuario'));
//console.log(localStorage.getItem('ubicacion'));

//localStorage.removeItem('nombreUsuario');
//localStorage.clear();

//////Notación JSON//////
const usuario = {
    nombre:'Grover',
    edad:'30'
}

const usuarioJSON = JSON.stringify(usuario);
localStorage.setItem('usuario',usuarioJSON);


const userJSON = localStorage.getItem('usuario');
const usuario2 = JSON.parse(userJSON);
console.log(`${usuario2.nombre}: ${usuario2.edad}`);







