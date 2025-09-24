import { descarga} from "../control/descarga.js";

function header(){
    let header = document.createElement('div');
    header.className = "header";


    const imgDescargar = document.createElement("img");
  imgDescargar.src = "assets/descarga.png"; 
  imgDescargar.alt = "Descargar total";
  imgDescargar.className = "btnDescargar";
  imgDescargar.style.cursor = "pointer";

  imgDescargar.addEventListener("click", descarga);


    header.appendChild(imgDescargar);

    return header;
}

export {header};