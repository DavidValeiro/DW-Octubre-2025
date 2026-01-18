(() => {
// Hace que el elemento de navegación parpadee cuando está cerrado y a la vez funciona como toggle para abrir y cerrar
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

// Esta función configura la página del catálogo de productos
function setupCatalogPage() {
const menuIcons = document.querySelectorAll('.content__menu-icon');
const products = document.querySelectorAll('.content__product-item');
const galleryTitle = document.querySelector('.content__product-main-title');
// Selector del filtro de productos
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

// Configuración para seleccionar un producto y guardar sus datos en localStorage para luego mostrarlos en la página de producto
  products.forEach(product => {
    product.addEventListener('click', () => {
      let productId = product.dataset.id;
      let productImg = product.querySelector('.content__product-img').src;
      let productPrice = product.dataset.price;
      let productSpecs = product.dataset.specs || '';
      let productDescription = product.dataset.description || '';
      localStorage.setItem('selectedProductSpecs', productSpecs);
      localStorage.setItem('selectedProductPrice', productPrice);
      localStorage.setItem('selectedProductImg', productImg);
      localStorage.setItem('selectedProductId', productId);
      localStorage.setItem('selectedProductDescription', productDescription);
      document.location.href = `producto.html?id=${productId}`;
    });
  });
}

// Función para guardar el carrito en localStorage
function guardarCarritoEnLocalStorage() {
    const cartItemsContainer = document.querySelector('.cart__items');
    const cartItems = cartItemsContainer.querySelectorAll('.cart__selected'); 
    const carrito = [];
    cartItems.forEach(item => {
      const nombre = item.querySelector('.cart__selected-name').textContent;
      const precio = item.querySelector('.cart__selected-price').textContent;
      carrito.push({ nombre, precio });
    });
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para cargar el contenido del carrito desde localStorage para cuando cambias de página no perder el contenido
function loadCartFromLocalStorage() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      const carrito = JSON.parse(carritoGuardado);  
      const cartItemsContainer = document.querySelector('.cart__items');
      carrito.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart__selected');
        cartItem.innerHTML = `
          <h3 class="cart__selected-name">${item.nombre}</h3>
          <h4 class="cart__selected-price">${item.precio}</h4>
          <i class="fa fa-trash cart__delete"></i>
        `;
        cartItemsContainer.appendChild(cartItem);
      });
    }
}

// Funcion que suma los precios de los productos en el carrito y actualiza el total mostrado
function updateCartTotal() {
    const cartItemsContainer = document.querySelector('.cart__items');
    const cartItems = cartItemsContainer.querySelectorAll('.cart__selected');
    let total = 0;
    cartItems.forEach(item => {
      let priceText = item.querySelector('.cart__selected-price').textContent;
      let priceNumber = parseFloat(priceText.replace('€', ''));
      total += priceNumber;
    });
    const cartTotalElement = document.querySelector('.cart__total-price');
    cartTotalElement.textContent = `${total.toFixed(2)}€`;
}

// funcion para eliminar un item del carrito y actualizar el guardado en localStorage
function deleteCartItem() {
  const cartItemsContainer = document.querySelector('.cart__items');
  if (cartItemsContainer) {
  cartItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('cart__delete')) {
    const itemToRemove = e.target.closest('.cart__selected');
    cartItemsContainer.removeChild(itemToRemove);
    updateCartTotal();
    guardarCarritoEnLocalStorage();
    }
  });
  }
}

// no consigo hacer que funcione correctamente este switch para el boton de pago
// function activatePaymentButton() {
//   const payButton = document.querySelector('.cart__buying-button');
//   const cartSelected = document.querySelectorAll('.cart__selected');
//   if (cartSelected.length > 0) {
//       payButton.addEventListener('click', () => {
//         document.location.href = 'pago.html';
//         payButton.classList.remove('disabled');
//       });
//   }else {
//       payButton.removeEventListener('click', () => {
//         document.location.href = 'pago.html';
//       }); 
//   }
// }

// Funcion para configurar el carrito de compras cada vez que se abre y cierra a parte de dar funcionalidad a los botones
function setupCart() {
  const cartButton = document.querySelector('.button__cart');
  const cartCloseButton = document.querySelector('.button__cart-close');
  const cartContainer = document.querySelector('.cart__container');
  const payButton = document.querySelector('.cart__buying-button'); 

  cartButton.addEventListener('click', () => {
    cartContainer.classList.remove('is-closed');
  });

  cartCloseButton.addEventListener('click', () => {
    cartContainer.classList.add('is-closed');
  });
  loadCartFromLocalStorage();
  deleteCartItem();
  updateCartTotal();
  payButton.addEventListener('click', () => {
    document.location.href = 'pago.html';
  });
}

// Configuración para que al seleccionar un producto y reciba sus datos de localStorage para luego mostrarlos en la página de producto
// y configurar sus botone
function setupProductPage() {
  const backButton = document.querySelector('.product__back');
  backButton.addEventListener('click', () => {
    document.location.href = 'catalogo.html';
  });

  if (!localStorage.getItem('selectedProductId')) {
    document.location.href = 'catalogo.html';
    return;
  }

  const productImage = document.querySelector('.product__detail-img');
  let savedImageSrc = localStorage.getItem('selectedProductImg');
  let productId = new URLSearchParams(window.location.search).get('id');
  const productName = document.querySelector('.product__detail-name');
  let productPrice = localStorage.getItem('selectedProductPrice');
  const productPriceElement = document.querySelector('.product__detail-price');
  let productSpecs = localStorage.getItem('selectedProductSpecs');
  const productSpecsElement = document.querySelector('.product__detail-specs-list');
  let productDescription = localStorage.getItem('selectedProductDescription');
  const productDescriptionElement = document.querySelector('.product__detail-description');
  productImage.src = savedImageSrc;
  productName.textContent = productId;
  productPriceElement.textContent = productPrice;
  productDescriptionElement.textContent = productDescription;
  if (productSpecs) {
    const specsArray = productSpecs.split(';').map(spec => spec.trim());
    productSpecsElement.innerHTML = ''; 
    specsArray.forEach(spec => {
      if (spec) {
        let [key, value] = spec.split(':').map(item => item.trim());
        let listItem = document.createElement('li');
        listItem.classList.add('product__detail-specs-item');
        listItem.innerHTML = `<span>${key}:</span> ${value}`;
        productSpecsElement.appendChild(listItem);
      } 
    }); 
  }
  let addToCartButton = document.querySelector('.content__product-button');
    addToCartButton.addEventListener('click', () => {
      addToCart(productId, productPrice);
    });
}

// Funcion para añadir un producto al carrito
function addToCart(productName, productPrice) {
  const cartItemsContainer = document.querySelector('.cart__items');
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart__selected');
  cartItem.innerHTML = `
    <h3 class="cart__selected-name">${productName}</h3>
    <h4 class="cart__selected-price">${productPrice}</h4>
    <i class="fa fa-trash cart__delete"></i>
  `;
  cartItemsContainer.appendChild(cartItem);
  updateCartTotal();
  guardarCarritoEnLocalStorage();
}

// se ejecuta solo en la pagina de pago y gestiona sus botones a parte del modal de confirmacion
if (document.location.href.includes('pago.html')) {
  const backButton = document.querySelector('.payment__back-button');
  backButton.addEventListener('click', () => {
    window.history.back();
  });
  const modal = document.querySelector('.modal__success');
  const modalButton = document.querySelector('.modal__button-success');
  const paymentForm = document.querySelector('.payment__form');
  paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    modal.classList.remove('hidden');
  });
  modalButton.addEventListener('click', () => {
    modal.classList.add('hidden');
    document.location.href = 'catalogo.html';
  });
}

// selectores de setup de las diferentes páginas segun su html para que no de error al no encontrar elementos
if(document.querySelector('.button__cart')) {
  setupCart();
}

if (document.location.href.includes('producto.html')) {
  setupProductPage();
}

if (document.location.href.includes('catalogo.html')) {
  setupCatalogPage();
}

})();