const CARRITO = 'carrito';

function guardarProducto(producto) {
localStorage.setItem(CARRITO, JSON.stringify(producto));
}

function obtenerProducto() {
return JSON.parse(localStorage.getItem(CARRITO)) || [];
}

function agregarProducto(nombre, precio){
    const productos = obtenerProducto();
    productos.push({nombre,precio});
    guardarProducto(productos)
}
export { agregarProducto, guardarProducto, obtenerProducto };