console.log("Script enlazado");

// ? Ejercicio 1 
const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');
const moveButton = document.getElementById('move');
const resizeButton = document.getElementById('resize');
const locationButton = document.getElementById('location');
let myWindow = null;
openButton.addEventListener('click', () => {
    if(!myWindow || myWindow.closed){
        myWindow = window.open('', '', 'width-400,height-400');
    }
});
closeButton.addEventListener('click', () => {
    if(myWindow && !myWindow.closed){
        myWindow.close();
    }
});
moveButton.addEventListener('click', () => {
    if(myWindow && !myWindow.closed){
        myWindow.moveTo(200, 200);
    }
});
resizeButton.addEventListener('click', () => {
    if(myWindow && !myWindow.closed){
        myWindow.resizeTo(600, 600);
    }
});
locationButton.addEventListener('click', () => {
    if(myWindow && !myWindow.closed){
        myWindow.location = "https://google.com";
    }
});

// ? Ejercicio 2
const rnButton = document.getElementById("rn-generator");
const divs = document.querySelectorAll(".random-number");
function randomNumber(number){
   return Math.floor(Math.random() * (number + 1));
};
function divsRandomNumber(){
    divs.forEach(div => {
        const number = randomNumber(100);
        div.textContent = number;
    });
}
rnButton.addEventListener('click', divsRandomNumber);

// ? Ejercicio 3


const calcButton = document.getElementById("calc");
let showResultado = document.getElementById("show-resultado");
function calculate(){
    let firstNumber = document.getElementById("first-number").value;
    let secondNumber = document.getElementById("second-number").value;
    let operator = document.getElementById("select-operator").value;
    let resultado = eval(`${firstNumber} ${operator} ${secondNumber}`);
    if (operator === "/"){
        showResultado.placeholder = resultado.toFixed(3).replace(/\./g, ",");
    }else if(operator === "*"){
        showResultado.placeholder = resultado.toFixed(3).replace(/\./g, ",");
    }else{
        showResultado.placeholder = resultado;
    }
}
calcButton.addEventListener('click', calculate);