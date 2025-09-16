function header(){
    let header = document.createElement('div');
    header.className = "header";

    let icono = document.createElement('img');
    img.src = "assets/descarga.png"
    icono.className = "descarga";

    header.appendChild(icono);
    icono.appendChild(img)

    return header;
}

export {header};