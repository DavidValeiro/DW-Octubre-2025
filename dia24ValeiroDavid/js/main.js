console.log("Script enlazado");

let a = 12;
console.log(a+a);

function guardarYMostrar() {
  var textoDelTextarea = document.getElementById("miTexto").value;
  var parrafoDeSalida = document.getElementById("salida");
  parrafoDeSalida.textContent = textoDelTextarea;
}

let button = document.getElementById("goButton");
button.addEventListener('click', guardarYMostrar);