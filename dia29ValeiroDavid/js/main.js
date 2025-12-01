console.log("Script enlazado");

let numero = 0;
let pares = [];
function numerosPares(){
    while (numero <= 100){
         if (numero % 2 === 0){
            pares.push(numero);
        }
        numero++;
    };
}
numerosPares();
console.log(pares);




let size = 5; 
function construirCuadrado() {
    let text = "";
    for (let i = 0; i < size; i++) {

        for (let j = 0; j < size; j++) {
            text += "* ";
        }   

        text  += "\n"
    }

    console.log(text);
}
construirCuadrado();






