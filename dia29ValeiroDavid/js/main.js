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




let size = 20; 
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



let sizeHueco = 30;
function construirCuadradoHueco() {
    let text = "";
    for (let i = 0; i < sizeHueco; i++) {
        for (let j = 0; j < sizeHueco; j++) {
            if (i === 0 || i === sizeHueco - 1 || j === 0 || j === sizeHueco - 1) {
                text += "* ";
            } else {
                text += "  ";
            }
        }
        text += "\n";
    }
    console.log(text);
}
construirCuadradoHueco();



