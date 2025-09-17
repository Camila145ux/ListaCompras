import { obtenerProducto, guardarProducto } from "../control/miLocalStorage.js";

function ComprasFormulario(){
    const ComprasF = document.createElement('section');

    const total = document.createElement('h2');
    total.className = "total-compras";
    total.innerText = "Q. 00. 00";

    const productoInput = document.createElement('div');
    productoInput.className = "Input";

    const nombreI = document.createElement('div');
    nombreI.setAttribute("contenteditable", true);
    nombreI.className = "nombreI";

    const precioI = document.createElement('div');
    precioI.setAttribute("contenteditable", true);
    precioI.className = "precioI";

    const BotonAgregar = document.createElement('button');
    BotonAgregar.innerText = "Agregar";
    BotonAgregar.className = "BotonAgregar";




    ComprasF.appendChild(total);
    productoInput.appendChild(nombreI);
    productoInput.appendChild(precioI);
    productoInput.appendChild(BotonAgregar);

    ComprasF.appendChild(productoInput);

//lista productos
    const listaProductos = document.createElement('div');
    listaProductos.className = "listaProductos";
    ComprasF.appendChild(listaProductos);

    //agregar producto
    BotonAgregar.addEventListener("click", () => {
        const nombre = nombreI.innerText.trim();
        const precio = parseFloat(precioI.innerText.trim());


        const item = document.createElement('div');
        item.innerText = `${nombre} - Q. ${precio.toFixed(2)}`;
        listaProductos.appendChild(item);

        const productos = obtenerProducto();
        productos.push({nombre, precio});
        guardarProducto(productos);

        console.log("Producto agregado: ", {nombre, precio});
    });

    return ComprasF;

}

export{ComprasFormulario};