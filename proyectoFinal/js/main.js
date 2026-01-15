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

const menuIcons = document.querySelectorAll('.content__menu-icon');
const products = document.querySelectorAll('.content__product-item');
const galleryTitle = document.querySelector('.content__product-main-title');

  menuIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      const type = icon.dataset.product;
       switch (type) {
        case 'mouse':
          galleryTitle.textContent = 'Ratones';
          break;

        case 'keyboard':
          galleryTitle  .textContent = 'Teclados';
          break;

        case 'headset':
          galleryTitle.textContent = 'Cascos';
          break;

        case 'controller':
          galleryTitle.textContent = 'Mandos';
          break;

        default:
          galleryTitle.textContent = 'Catálogo';
      }
      products.forEach(product => {
        if (product.dataset.product === type) {
          product.style.display = 'flex';
        } else {
          product.style.display = 'none';
        }
      });
    });
  });