// Recuperar el carrito del localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Seleccionar el contenedor de productos del carrito
const cartItemsContainer = document.querySelector('#cart-items tbody');

// Función para mostrar los productos en el carrito
function displayCartItems() {
    cartItemsContainer.innerHTML = ''; // Limpiar contenedor

    // Si el carrito está vacío, mostrar mensaje
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<tr><td colspan="4">No hay productos en el carrito.</td></tr>';
        return;
    }

    // Crear elementos para cada producto en el carrito
    cart.forEach((item, index) => {
        const itemDiv = document.createElement('tr');

        // Calcular subtotal
        const priceValue = parseFloat(item.price.replace('$', '').replace(',', ''));
        const quantity = item.quantity || 1;
        const subtotal = (priceValue * quantity).toFixed(2);

        // Mostrar nombre, precio, cantidad y subtotal del producto
        itemDiv.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>
                <input type="number" value="${quantity}" min="1" class="quantity-input" data-index="${index}">
            </td>
            <td>$${subtotal}</td>
        `;

        cartItemsContainer.appendChild(itemDiv);
    });

    // Mostrar total del carrito
    displayTotal();
}

// Función para calcular y mostrar el total del carrito
function displayTotal() {
    const total = cart.reduce((sum, item) => {
        const priceValue = parseFloat(item.price.replace('$', '').replace(',', ''));
        const quantity = item.quantity || 1;
        return sum + (priceValue * quantity);
    }, 0);

    document.getElementById('total').innerHTML = `Total: $${total.toFixed(2)}`;
}

// Event listener para cambios de cantidad
cartItemsContainer.addEventListener('change', (event) => {
    if (event.target.classList.contains('quantity-input')) {
        const index = event.target.getAttribute('data-index');
        const newQuantity = parseInt(event.target.value);
        cart[index].quantity = newQuantity; // Actualizar cantidad
        localStorage.setItem('cart', JSON.stringify(cart)); // Actualizar localStorage
        displayCartItems(); // Volver a mostrar productos
    }
});

// Mostrar productos al cargar la página
displayCartItems();

// Botón para continuar comprando
document.getElementById('continue-shopping').addEventListener('click', () => {
    window.location.href = 'index.html'; // Redirigir a la tienda
});