console.log("Script enlazado");

// * prueba1

//  let colorChange = document.querySelector('.caja:nth-child(4)');
//  colorChange.style.backgroundColor = "red";

// * prueba2

// let parr = document.querySelector('p');
// parr.innerHTML = 'loreasdasdashdjasgdas asdasdasdasd asdasdasdasd sadasdasdasd adasdsadas dasdasdasdsd adsadasd';

// * prueba3

// let parr = document.querySelector('p');
// parr.style.color = "blue";

// * prueba4 

let parr = document.querySelector('p');
let blue = document.querySelector('#blue');
let red = document.querySelector('#red');

blue.addEventListener('click', () => {
    parr.style.color = "blue";
});

red.addEventListener('click', () => {
    parr.style.color = "red";
});

// * prueba5

const PI = 3.14;
let radio = 5;

function areaCirculo(r) {
    return PI * r * r;
}

console.log(areaCirculo(radio));