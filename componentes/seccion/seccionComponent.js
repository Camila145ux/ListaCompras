export function seccion(){

    let seccion = document.createElement('section');
    seccion.className = "seccion";

    let total = document.createElement('h2');
    total.id = "TOTAL";
    total.innerText = "Q 00.00";

    let saltoLinea = document.createElement('hr');
    


    let titulo = document.createElement('h4');
    titulo.innerText = "Lista de compras";


    let lista = document.createElement('ul');
    lista.id = "lisaCompras";

    let saltoLinea2 = document.createElement('hr');






    seccion.appendChild(total);
    seccion.appendChild(saltoLinea);
    seccion.appendChild(titulo);
    seccion.appendChild(lista);
    seccion.appendChild(saltoLinea2);

    return seccion;
}

export {seccion};