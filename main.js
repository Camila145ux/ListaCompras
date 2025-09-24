import { header } from "./componentes/header/header.js";
import { obtenerProducto, guardarProducto } from "./componentes/control/miLocalStorage.js";
import { seccion } from "./componentes/seccion/seccionComponent.js";
import { ComprasFormulario } from "./componentes/formulario/formulario.js";

function main(){
    let main = document.createElement('section');
    main.className = "main";
    // local storage
    let productosGuardados = obtenerProducto();

    if (!productosGuardados || productosGuardados.length === 0) {
        productosGuardados = [];
        guardarProducto(productosGuardados);
    }
    console.log("seleccion de productos  ", productosGuardados);


    main.appendChild(header());
    main.appendChild(seccion());
    main.appendChild(ComprasFormulario());
    

    return main;
}

document.body.appendChild(main());
