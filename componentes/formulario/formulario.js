import { obtenerProducto, guardarProducto } from "../control/miLocalStorage.js";
import { seccion } from "../seccion/seccionComponent.js";

function ComprasFormulario(){
    const ComprasF = document.createElement('section');
    ComprasF.className = "formulario";


    const nombreI = document.createElement('input');
    nombreI.placeholder = "Producto";
    nombreI.className = "nombreI";
   

    const precioI = document.createElement('input');
    precioI.placeholder = "Q 00.00";
    precioI.className = "precioI";

    const BotonAgregar = document.createElement('button');
    BotonAgregar.innerText = "Agregar";
    BotonAgregar.className = "BotonAgregar";


    ComprasF.appendChild(nombreI);
    ComprasF.appendChild(precioI);
    ComprasF.appendChild(BotonAgregar);

    const listaProductos = document.createElement('div');
    listaProductos.className = "listaProductos";
    ComprasF.appendChild(listaProductos);


    //actualizar el total
    function actualizarTotal() {
        const productos = obtenerProducto();
        const suma = productos.reduce((acc, p) => acc + p.precio, 0);
        const totalH2 = document.getElementById("totalCompras");
        if (totalH2) {
            totalH2.innerText = "Q " + suma.toFixed(2);
        }
    }

    // agregar producto
    BotonAgregar.addEventListener("click", () => {
        const nombre = nombreI.value.trim();
        const precio = parseFloat(precioI.value.trim());

        if (!nombre || isNaN(precio)) {
            console.log("Datos inválidos");
            return;
        }


        
        const itemProducto = document.createElement("div");
        itemProducto.className = "itemProducto";

        const texto = document.createElement("span");
        texto.innerText = `${nombre} - Q. ${precio.toFixed(2)}`;

        //  botón eliminar
        const botonEliminar = document.createElement("button");
        botonEliminar.innerText = "✖"; 
        botonEliminar.className = "btnEliminar";

        // eliminar el producto
        botonEliminar.addEventListener("click", () => {
            itemProducto.remove();

            // actualizar localStorage
            let productos = obtenerProducto(); //trae todos los producto guardados
            productos = productos.filter(p => !(p.nombre === nombre && p.precio === precio)); //suma todos los productos
            guardarProducto(productos);       
            actualizarTotal();
        });


        itemProducto.appendChild(texto);
        itemProducto.appendChild(botonEliminar);
        listaProductos.appendChild(itemProducto);

        // guardar en localStorage
        const productos = obtenerProducto();
        productos.push({ nombre, precio });
        guardarProducto(productos);

        actualizarTotal();

        nombreI.value = "";
        precioI.value = "";
    });
    

    return ComprasF;
}

export { ComprasFormulario };
