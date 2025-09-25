import { obtenerProducto, guardarProducto } from "../control/miLocalStorage.js";

function ComprasFormulario(totalH2) {
    const ComprasF = document.createElement('section');
    ComprasF.className = "formulario";

    let total = 0;

    function actualizarTotalVisual() {
        if (totalH2) {
            totalH2.innerText = "Q " + total.toFixed(2);
        }
    }

    // Inputs
    const nombreI = document.createElement('input');
    nombreI.placeholder = "Producto";
    nombreI.className = "nombreI";

    const precioI = document.createElement('input');
    precioI.placeholder = "Q 00.00";
    precioI.className = "precioI";

    const BotonAgregar = document.createElement('button');
    BotonAgregar.innerText = "Agregar";
    BotonAgregar.className = "BotonAgregar";

    // Contenedor para la captura (total + inputs + botón)
    const capturaContainer = document.createElement("div");
    capturaContainer.id = "capturaArea";
    capturaContainer.style.padding = "10px";
    capturaContainer.style.backgroundColor = "#ffffff";
    capturaContainer.style.display = "inline-block";

    // Insertamos total al inicio del contenedor
    if (totalH2) capturaContainer.appendChild(totalH2);

    // Movemos inputs y botón al contenedor
    capturaContainer.appendChild(nombreI);
    capturaContainer.appendChild(precioI);
    capturaContainer.appendChild(BotonAgregar);

    // Agregamos contenedor al formulario
    ComprasF.appendChild(capturaContainer);

    // Lista de productos añadidos (no se incluirá en la captura)
    const listaProductos = document.createElement('div');
    listaProductos.className = "listaProductos";
    ComprasF.appendChild(listaProductos);

    // Función agregar producto
    BotonAgregar.addEventListener("click", () => {
        const nombre = nombreI.value.trim();
        const precio = parseFloat(precioI.value.replace("Q", "").trim());

        if (!nombre || isNaN(precio) || precio <= 0) {
            console.log("Datos inválidos");
            return;
        }

        const itemProducto = document.createElement("div");
        itemProducto.className = "itemProducto";

        const texto = document.createElement("span");
        texto.innerText = `${nombre} - Q. ${precio.toFixed(2)}`;

        const botonEliminar = document.createElement("button");
        botonEliminar.innerText = "✖";
        botonEliminar.className = "btnEliminar";

        botonEliminar.addEventListener("click", () => {
            itemProducto.remove();
            total -= precio;
            actualizarTotalVisual();

            let productos = obtenerProducto();
            productos = productos.filter(p => !(p.nombre === nombre && p.precio === precio));
            guardarProducto(productos);

            if (productos.length === 0) {
                localStorage.removeItem("carrito");
                total = 0;
                actualizarTotalVisual();
            }
        });

        itemProducto.appendChild(texto);
        itemProducto.appendChild(botonEliminar);
        listaProductos.appendChild(itemProducto);

        const productos = obtenerProducto();
        productos.push({ nombre, precio });
        guardarProducto(productos);

        total += precio;
        actualizarTotalVisual();

        nombreI.value = "";
        precioI.value = "";
    });

    // Cargar productos guardados
    let productosGuardados = obtenerProducto();
    productosGuardados.forEach(p => {
        if (!p || !p.nombre || typeof p.precio !== "number") return;

        const itemProducto = document.createElement("div");
        itemProducto.className = "itemProducto";

        const texto = document.createElement("span");
        texto.innerText = `${p.nombre} - Q. ${p.precio.toFixed(2)}`;

        const botonEliminar = document.createElement("button");
        botonEliminar.innerText = "✖";
        botonEliminar.className = "btnEliminar";

        botonEliminar.addEventListener("click", () => {
            itemProducto.remove();
            total -= p.precio;
            actualizarTotalVisual();

            let productos = obtenerProducto() || [];
            productos = productos.filter(prod => !(prod.nombre === p.nombre && prod.precio === p.precio));
            guardarProducto(productos);

            if (productos.length === 0) {
                localStorage.removeItem("carrito");
                total = 0;
                actualizarTotalVisual();
            }
        });

        itemProducto.appendChild(texto);
        itemProducto.appendChild(botonEliminar);
        listaProductos.appendChild(itemProducto);

        total += p.precio;
    });

    actualizarTotalVisual();
    return ComprasF;
}

export { ComprasFormulario };
