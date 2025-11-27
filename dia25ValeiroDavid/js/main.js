console.log("Script enlazado");

let alumno = {
    nombre : 'null',
    apellido : 'null',
    edad : 'null',
    curso : 'null',
    mostrarAlumno : function(){
        console.log(`${this.nombre} ${this.apellido}`);
    }
}

alumno.nombre = "David";
alumno.apellido = "Valeiro";
alumno.edad = "28";
alumno.curso = "primero";

let alumno2 = {...alumno, nombre: "Yza", apellido: "Gomes"};

const alumnos = [alumno,alumno2];

let list = alumnos.reduce((acc, {apellido, curso}) =>{
    acc.push(`${apellido} - ${curso}`);
    return acc;
}, []);
console.log(list);



// const numeros = [1, 2, 3];
// const masNumeros = [...numeros, 4 ,5];
// console.log(masNumeros);

// function sumar(...args){
//     return args.reduce((contador, numero) => contador + numero, 0);
// }

// console.log(sumar(1,2,3,4,5,6));
