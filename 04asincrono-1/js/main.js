const contenidos = document.querySelectorAll('.contenido');
const h2 = document.querySelectorAll('.bloque h2');

function acordeonHandler(i) {
    contenidos.forEach((contenido, index) => {
            if (index !== i) {
                contenido.classList.remove('activo');
            }
        });
    contenidos[i].classList.toggle('activo');
}

h2.forEach((cadaH2, i) => cadaH2.addEventListener('click', () => acordeonHandler(i)));
