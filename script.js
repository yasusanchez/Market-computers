// Inicializar un carrito vacío
let cart = [];

// Seleccionar todos los botones "Add to cart"
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Agregar un event listener a cada botón
addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Obtener el contenedor del producto
        const productContainer = button.parentElement;

        // Obtener el nombre y el precio del producto (esto es solo un ejemplo)
        const productName = productContainer.querySelector('h4').innerText;
        const productPrice = productContainer.querySelector('p').innerText; // Asegúrate de que aquí esté el precio real

        // Agregar el producto al carrito
        cart.push({ name: productName, price: productPrice });

        // Opcional: mostrar un mensaje de confirmación
        alert(`${productName} ha sido agregado al carrito.`);
    });
});

// Seleccionar el botón de carrito
const cartButton = document.getElementById('cart-button');

// Agregar un event listener al botón de carrito
cartButton.addEventListener('click', () => {
    // Aquí puedes redirigir a la página del carrito
    // Cambia 'cart.html' por la URL de tu página de carrito
    window.location.href = 'cart.html'; 
});
