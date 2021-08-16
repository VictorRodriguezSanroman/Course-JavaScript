//Examinando el DOM

/**********
 * Obtener elementos por id, tag y clase
 */

//console.dir(document);

/* console.log(document.title);
document.title = 'Prueba';//Cambiamos el titulo
console.log(document.title);

console.log(document.body);//Mostramos el body
console.log(document.all[5]);//Mostramos la sección 5 de todo el documento

console.log(document.forms[0]); */

//getElementById()
//console.log(document.getElementById('header-title'));
/* var headertitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
//console.log(headertitle);
headertitle.textContent = 'Hola';//Manipular contenido
headertitle.innerText = 'Adiós';
headertitle.innerHTML = '<h3>Prueba</h3>'; */

//getElementsByClassName
/* var items = document.getElementsByClassName('list-group-item');
console.log(items[3]);
items[0].textContent = 'Prueba'; */

//getElementsByTagName

/* var items =document.getElementsByTagName('li');
items[1].textContent = 'Prueba 02'; */

//querySelector
/* var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hola Mundo';

var boton = document.querySelector('input[type="submit"]');
boton.value = "Añadir";

var item = document.querySelector('.list-group-item');
item.style.border = 'solid 1px red'; */


//querySelectorAll

/* var items = document.querySelectorAll('.list-group-item');
//items[2].style.color = 'red';

for (var i = 0; i < items.length; i++) {
    items[i].style.border = 'solid 1px black';
    items[i].style.color = 'red';
}

var titulos =document.querySelectorAll('.title');
console.log (titulos);
titulos[0].textContent = 'Prueba';

var impar = document.querySelectorAll('li:nth-child(odd)');

for (var i = 0; i < impar.length; i ++){
    impar[i].style.backgroundColor ='#ccc';
} */

//ParentNode
/* var itemList = document.querySelector('#items');
console.log (itemList.parentNode);

var main = itemList.parentNode;
main.style.backgroundColor = '#ccc'; */
//ParentElement

var itemList = document.querySelector('#items');
/*
console.log (itemList.parentElement);

var main = itemList.parentElement;
main.style.backgroundColor = '#ccc'; */
/* 
//childNodes
console.log (itemList.childNodes);


//children
console.log (itemList.children);


//firstElementChild
console.log (itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Prueba';


//lastElementChild
console.log (itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Prueba 02'; */


/* //previousSibling

console.log(itemList.previousSibling);

//previousElementSibling

console.log(itemList.previousElementSibling);
//nextSibling

console.log(itemList.nextSibling);

//nextElemetSiblin

console.log(itemList.nextElementSibling); */

//createElement
//enviamos el tagName el element
/* var nuevoDiv = document.createElement('div');

nuevoDiv.className = 'hola';
nuevoDiv.id = 'div-hola';
nuevoDiv.setAttribute('title','Hola Mundo');



//cretaTextNode
var nuevoNodoText = document.createTextNode('Hola Mundo');
nuevoDiv.appendChild(nuevoNodoText);

console.log (nuevoDiv);

var contenedor = document.querySelector('header .container');
console.log (contenedor);

var h1 = document.querySelector('h1');

contenedor.insertBefore(nuevoDiv, h1); */


//Agregar eventos

/* document.getElementById('boton').addEventListener('click', hacerClick);

function hacerClick(){

    alert('Hola');
    console.log('Usted hizo click');
    document.getElementById('header-title').textContent = 'Texto cambiado';
} */


/*******
 * Código para agregar un item a la lista
 */

//agregar elemento a la lista
var form = document.getElementById('formAgregar');
var lista = document.getElementById('items');
var filtro = document.getElementById('filtro');

//Evento submit del formulario
form.addEventListener('submit',agregarItem);
//Evento click del formulario
lista.addEventListener('click',eliminarItem);
//Evento del teclado en el campo de Filtro
filtro.addEventListener('keyup',filtrarItem);


//Funcion para agregar un item de la lista
function agregarItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;

    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    var botonDel = document.createElement('button');
    botonDel.className = 'btn btn-danger btn-sm float-right eliminar';
    botonDel.appendChild(document.createTextNode('X'));


    li.appendChild(botonDel);

    lista.appendChild(li);

}

//Función para eliminar el item

function eliminarItem(e){
    if(e.target.classList.contains('eliminar')){
        if(confirm('¿Estás seguro que quieres eliminar el elemento?')){//Pregunta si quieres eliminar el elemento
            var li = e.target.parentElement;
            lista.removeChild(li);
        }
        
    }

}

//Función para filtrar elementos de la Lista
function filtrarItem(e){
    var texto = e.target.value.toLowerCase();//Para convertir a minúnsculas
    var items = lista.getElementsByTagName('li');//Captura deacuerdo a la etiqueta
    
    Array.from(items).forEach(function(item){
        var itemNombre = item.firstChild.textContent;
        if(itemNombre.toLowerCase().indexOf(texto) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
}