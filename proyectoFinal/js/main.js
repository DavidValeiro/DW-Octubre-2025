const navList = document.getElementById('nav-list');

function blinkingEffect() {
    if (navList.classList.contains('is-closed')) {
    setTimeout(() => {
      navList.classList.add('blink');
    }, 600);
  } else {
    navList.classList.remove('blink');
  }
};

navList.addEventListener('click', () => {
  navList.classList.toggle('is-closed');
  blinkingEffect();
});

document.addEventListener('click', (e) => {
  if (!navList.contains(e.target) && !navList.classList.contains('is-closed')) {
    navList.classList.add('is-closed');
    blinkingEffect();
  }
});

blinkingEffect();