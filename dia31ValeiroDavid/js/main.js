console.log("Script enlazado");

let elementos = document.querySelectorAll("li");
elementos.forEach(elemento => {
    elemento.classList.add("li-colored");
})

let parrafos = document.querySelectorAll("p");
parrafos.forEach(par => {
    par.textContent += " 😊";
});

let botones = document.querySelectorAll("button");
botones.forEach(boton => {
    boton.innerText = "Click me!";
});