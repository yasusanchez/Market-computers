let cart = [];
let total = 0;

// Agregar evento a los botones "Agregar al carrito" cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    initEventListeners();
});

// Inicializa los event listeners
function initEventListeners() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productDiv = button.parentElement;
            const id = productDiv.getAttribute('data-id');
            const name = productDiv.getAttribute('data-name');
            const price = parseFloat(productDiv.getAttribute('data-price'));
            addToCart(id, name, price);
        });
    });

    document.getElementById('checkout-button').addEventListener('click', checkout);
}

// Función para agregar al carrito
function addToCart(id, name, price) {
    const existingProduct = cart.find(product => product.id === id);

    if (existingProduct) {
        existingProduct.Quantity++;
        alert('Cantidad actualizada!');
    } else {
        cart.push({ id, name, price, Quantity: 1 });
        alert('Producto agregado!');
    }
    updateCart();
}

// Función para actualizar el carrito
function updateCart() {
    const tableBody = document.getElementById('cart-body');
    tableBody.innerHTML = ''; // Limpiar la tabla antes de actualizar
    total = 0;

    cart.forEach((product) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>${product.Quantity}</td>
            <td>$${(product.price * product.Quantity).toFixed(2)}</td>
            <td><button class="remove-button" data-id="${product.id}">Eliminar</button></td>
        `;

        row.querySelector('.remove-button').addEventListener('click', () => removeFromCart(product.id));
        tableBody.appendChild(row);
        total += product.price * product.Quantity;
    });

    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}

// Función para eliminar del carrito
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

// Función de checkout
function checkout() {
    alert('Procediendo al pago...');
    // Aquí podrías agregar la lógica para proceder con el pago
}
