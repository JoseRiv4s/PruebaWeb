/*CARRITO DE COMPRAS*/

document.addEventListener('DOMContentLoaded', function () {
    const carrito = [];

    function agregarAlCarrito(id, nombre, precio) {
        const producto = {
            id: id,
            nombre: nombre,
            precio: precio
        };

        carrito.push(producto);
        actualizarCarrito();
    }

    function actualizarCarrito() {
        const listaCarrito = document.getElementById('lista-carrito');
        const tbody = listaCarrito.querySelector('tbody');

        tbody.innerHTML = '';

        carrito.forEach(producto => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td><img src="img/mujer ${producto.id}.png" alt="${producto.nombre}"></td>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
            `;
            tbody.appendChild(fila);
        });

        const total = carrito.reduce((total, producto) => total + parseFloat(producto.precio), 0);
        const totalElement = document.getElementById('total-carrito');
        totalElement.textContent = `$ ${total.toFixed(2)}`;
    }

    const botonesAgregar = document.querySelectorAll('.agregar-carrito');
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', function (event) {
            event.preventDefault();
            const id = this.getAttribute('data-id');
            const nombre = this.parentNode.querySelector('h3').textContent;
            const precio = this.parentNode.querySelector('.precio').textContent.replace('$ ', '');
            agregarAlCarrito(id, nombre, precio);
        });
    });

    const botonVaciar = document.getElementById('vaciar-carrito');
    botonVaciar.addEventListener('click', function (event) {
        event.preventDefault();
        carrito.length = 0;
        actualizarCarrito();
    });
});


// CARRUSEL //

document.addEventListener("DOMContentLoaded", function () {

    // Funcionalidad del carrusel
    
    const slider = document.querySelector(".slider");
    const images = ["img/moda.png", "img/moda 2.png", "img/moda 3.png"];
    let currentIndex = 0;

    function showImage(index) {
        slider.innerHTML = `<img src="${images[index]}" alt="Slider Image">`;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    showImage(currentIndex); 
    setInterval(nextImage, 3000); // Cambia la imagen cada 3 segundos

});