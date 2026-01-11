let content = document.querySelectorAll('.menu__content');
let background = document.querySelector('.menu__background');

function inactive(e) {
  const current = e.currentTarget;
  content.forEach(el => {
    el.classList.toggle('inactive', el !== current);
  });
  const src = current.dataset.src;
  background.style.setProperty('--bg-image', `url("${src}")`);
  background.classList.add('active');
}

function active() {
  content.forEach(el => {
    el.classList.remove('inactive');
  });
  background.classList.remove('active');
}

content.forEach(el => {
  el.addEventListener('mouseenter', inactive);
  el.addEventListener('mouseleave', active);
});