function header(){
    let header = document.createElement('div');
    header.className = "header";

    let titulo1 = document.createElement('h1');
    titulo1.innerText = "lista de compras";
    header.appendChild(titulo1);

    let icono = document.createElement('div');
    icono.className = "iconod";

    let img = document.createElement('img');
    img.src = "./assets/descarga.png";
    img.className = "iconod"

    header.appendChild(icono);
    icono.appendChild(img)

    return header;
}

export {header};