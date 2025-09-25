import { header } from "./componentes/header/header.js";
import { seccion } from "./componentes/seccion/seccionComponent.js";
import { ComprasFormulario } from "./componentes/formulario/formulario.js";
import { obtenerProducto, guardarProducto } from "./componentes/control/miLocalStorage.js";

function app() {
    let contenedor = document.createElement('section');
    contenedor.className = "main";

    // Asegurarse que localStorage tenga un array válido
    let productosGuardados = obtenerProducto();
    if (!productosGuardados || productosGuardados.length === 0) {
        productosGuardados = [];
        guardarProducto(productosGuardados);
    }

    // Header
    contenedor.appendChild(header());

    // Sección de total
    const seccionElement = seccion();
    contenedor.appendChild(seccionElement);

    // Formulario con referencia al total
    const totalH2 = seccionElement.querySelector("#totalCompras");
    contenedor.appendChild(ComprasFormulario(totalH2));

    return contenedor;
}

// Montar en el root
document.getElementById("root").appendChild(app());
