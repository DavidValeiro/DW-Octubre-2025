console.log("Script enlazado");

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array inicial:", array);

function resetArray() {
    array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];;
}

console.log("Elemento en posición 3:", array[3]);
console.log("Elemento en posición 6:", array[6]);

console.log("Tamaño del array:", array.length);

array.unshift(0);
console.log("Array tras añadir al principio:", array);
resetArray();

array.push(11);
console.log("Array tras añadir al final:", array);
resetArray();

let shortenArray = array.splice(5, 2);
console.log("Array tras eliminar posiciones 5 y 6:", array);
console.log("Elementos eliminados:", shortenArray);
resetArray();

let elemento = 3;
let posicion = array.indexOf(elemento);
console.log(`La posición de ${elemento} es:`, posicion);

array.reverse();
console.log('Array invertido:', array);
resetArray();

let arrayString = array.toString();
console.log('Array como cadena de texto:', arrayString);

let stringToArray = arrayString.split(',').map(Number);
console.log('Cadena convertida de nuevo a array:', stringToArray);

array.forEach((valor, indice) => {
  console.log(`Índice ${indice}: ${valor}`);
});

array.forEach((numero) => {
  console.log(`${numero} va antes de ${numero + 1}`);
});