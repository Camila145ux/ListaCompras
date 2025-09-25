import { descarga } from "../control/descarga.js";

export function header() {
    const header = document.createElement("header");
    header.className = "header";


    // Imagen botón de descarga
    const imgDescarga = document.createElement("img");
    imgDescarga.src = "assets/descarga.png";
    imgDescarga.alt = "Descargar";
    imgDescarga.className = "Descarga";
    imgDescarga.style.cursor = "pointer";
    imgDescarga.style.width = "40px";
    imgDescarga.style.height = "40px";
    imgDescarga.style.marginLeft = "15px";

    imgDescarga.addEventListener("click", () => {
        descarga();
    });

    header.appendChild(imgDescarga);
    return header;
}
