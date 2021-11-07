
//formas de definir un array en base al libro

const numeros = [];
//equivalente con constructor Array
const numeros2 = new Array();

//forma para manejar el array de una manera mas clasica
//solo se usa cuando sabes que pedo con los elementos que quieres
//una manera formal de definir arrays
const data = new Array(10); 

//Array con elementos especificos
const data2 = new Array(1,2,3,4,45,5,7,67,0);

//Array OF --> introduce in ES6
const arr = Array.of(1,3,4,5,6,7);

//copiar un array --> introduce in ES6, literal de lo que tenga
const persona = {
    nombre:'Ehecatzin',
    edad:21
}

const arrObjects = [persona];

//copiar un array
const copyArr = Array.from(arrObjects);

//operador spread ...
//ejemplos
const nuevo = [10,20,30, ...numeros];
//cadena
const cadena = "Hola mundo";
const letters = [...cadena];

//Longitud para los arrays
const longitud = arrObjects.length;

//print de pruebas  para creacion de arrays
//console.log(longitud);


//Algunos metodod importantes

//foreach se encarga de ITERAR sobre cada elemento de un array
//data que utiliza  (elemento , indice ) el segundo elemento es opcional, funciona
//con solo la variable que contiene al dato que esta iterando

arr.forEach((num) => { console.log(num) } );

//MAP --> itera sobre los elementos del array, aplicando una funcion que se ejecuta 
//sobre cada elemento, regresando como salida un nuevo array, 

//original
console.log(arr);
//despues
const nuevoMap = arr.map( elemento =>  elemento * 10);
console.log(nuevoMap);

//filter
//Retorna un nuevo array  que contiene un subconjunto de elementos de un array original
//los cuales fueron filtrados en base a un criterio

//ejemplo , vamos a filtrar los numeros pares de algun arreglo
const pares = arr.filter(dato => (dato % 2 === 0));

console.log(arr.findIndex(x => x === 4));
console.log(arr.find(x => x % 6 == 0));

//every --> regresa true , si todos los elementos cumplen un criterio establecido
console.log(arr.every(item => item < 2))

//some --> regresa True , si existe al menos un elemento en el array que cumpla 
// un criterio establecido

console.log(arr.some(i => i % 2 === 0));


//metodos de iteracion

console.log("- - - - - - Iteraciones  - - - - - - - -");
//FOR IN va recorriedo el array pero nos devuelve los indices
//Itera sobre los indices , es util para iterar sobre objetos
console.log("For IN");
for(i in arr){
    console.log(i);
}

//FOR OF --> itera sobre cada elemento sea cual sea el tipo
console.log("FOR OF");

for(k of arr){
    console.log(k);
}