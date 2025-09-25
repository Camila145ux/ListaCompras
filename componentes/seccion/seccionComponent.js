export function seccion() {
    let seccion = document.createElement('section');
    seccion.className = "seccion";

    let total = document.createElement('h2');
    total.className = "TOTAL";
    total.id = "totalCompras";
    total.innerText = "Q 00.00";

    let saltoLinea = document.createElement('hr');

    let titulo = document.createElement('p');
    titulo.className = "titulo";
    titulo.innerText = "Lista de Compras";

    seccion.appendChild(total);
    seccion.appendChild(saltoLinea);
    seccion.appendChild(titulo);

    return seccion;
}
