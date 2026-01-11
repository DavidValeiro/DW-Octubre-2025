
const li = document.querySelectorAll('.li');
const bloque = document.querySelectorAll('.bloque');


function tabHandler(i) {
  li.forEach((cadaLi, i) => {
      li[i].classList.remove('activo');
      bloque[i].classList.remove('activo');
    });
    li[i].classList.add('activo');
    bloque[i].classList.add('activo');
}

li.forEach((cadaLi, i) => {
  cadaLi.addEventListener('click', () => tabHandler(i));
});
