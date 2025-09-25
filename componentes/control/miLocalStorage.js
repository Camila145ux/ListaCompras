const CARRITO = 'carrito';

function guardarProducto(productos) {
    localStorage.setItem(CARRITO, JSON.stringify(productos));
}

function obtenerProducto() {
    return JSON.parse(localStorage.getItem(CARRITO)) || [];
}

function agregarProducto(nombre, precio) {
    const productos = obtenerProducto();
    productos.push({ nombre, precio });
    guardarProducto(productos);
}

export { agregarProducto, guardarProducto, obtenerProducto };
