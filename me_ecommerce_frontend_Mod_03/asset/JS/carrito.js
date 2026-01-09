// 1. EL CATÁLOGO (Base de datos local)
const catalogo = [
    { id: 1, nombre: "Zapatilla Runner", precio: 79990, descuentoAplicado: false },
    { id: 2, nombre: "Zapatilla Basquet", precio: 149990, descuentoAplicado: false },
    { id: 3, nombre: "Zapatilla Nike Motiva", precio: 59990, descuentoAplicado: false },
    { id: 4, nombre: "Zapatilla Treck", precio: 69990, descuentoAplicado: false }
];

// 2. EL CARRITO (Memoria de la sesión)
let carrito = [];
let descuentoValidado = false;

// 3. RENDERIZAR EL CATÁLOGO (Crea los productos en el HTML)
function dibujarCatalogo() {
    const contenedor = document.getElementById('contenedor-productos');
    contenedor.innerHTML = ''; // Limpiar por si acaso

    catalogo.forEach(producto => {
        contenedor.innerHTML += `
            <div class="col-md-6 mb-4">
                <div class="card producto-card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text text-muted small">ID: ${producto.id}</p>
                        <p class="fw-bold">$${producto.precio}</p>
                        <button onclick="agregarProducto(${producto.id})" class="btn btn-primary w-100">
                            Agregar al Carrito
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

// 4. LÓGICA DE AGREGAR
function agregarProducto(id) {
    const item = catalogo.find(p => p.id === id);
    carrito.push({ ...item }); // Creamos una copia del objeto
    renderizarCarrito();
}

// 5. LÓGICA DE QUITAR
function quitarProducto(posicionEnCarrito) {
    carrito.splice(posicionEnCarrito, 1);
    renderizarCarrito();
}

// 6. LÓGICA DE DESCUENTO
function aplicarDescuento() {
    const codigo = document.getElementById('codigo-descuento').value;
    if (codigo === "DESC15") {
        descuentoValidado = true;
        alert("Descuento del 15% activado");
    } else {
        descuentoValidado = false;
        alert("Código inválido");
    }
    renderizarCarrito();
}

// 7. CÁLCULO TOTAL
function calcularTotal() {
    let total = carrito.reduce((acc, p) => acc + p.precio, 0);
    if (descuentoValidado) {
        total = total * 0.85; // Aplica el 15%
    }
    return total.toFixed(2);
}

// 8. RENDERIZAR CARRITO (Actualiza la tabla)
function renderizarCarrito() {
    const lista = document.getElementById('lista-carrito');
    const totalDisplay = document.getElementById('precio-total');
    
    lista.innerHTML = ''; // Limpiar tabla

    carrito.forEach((producto, index) => {
        lista.innerHTML += `
            <tr>
                <td class="small">${producto.nombre}</td>
                <td class="small">$${producto.precio}</td>
                <td class="text-end">
                    <button onclick="quitarProducto(${index})" class="btn btn-sm btn-danger">×</button>
                </td>
            </tr>
        `;
    });

    totalDisplay.innerText = calcularTotal();
}

// INICIALIZAR LA PÁGINA
window.onload = dibujarCatalogo;