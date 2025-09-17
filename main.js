import { header } from "./componentes/header/header.js";
import { obtenerProducto, guardarProducto } from "./componentes/control/miLocalStorage.js";
import { seccion } from "./componentes/seccion/seccionComponent.js";
import { ComprasFormulario } from "./componentes/formulario/formulario.js";

function main(){
    // local storage
    let productosGuardados = obtenerProducto();

    if (!productosGuardados || productosGuardados.length === 0) {
        productosGuardados = [];
        guardarProducto(productosGuardados);
    }
    console.log("seleccion de productos  ", productosGuardados);

    const app = document.createElement("div");
    app.id = "app";

    app.appendChild(header());
    app.appendChild(ComprasFormulario());
    app.appendChild(seccion());

    return app;
}

document.body.appendChild(main());
