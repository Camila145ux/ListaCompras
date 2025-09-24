export function descarga() {
  const totalElement = document.getElementById("totalCompras"); // solo el total

  if (!totalElement) {
    alert("No se encontró el total para capturar.");
    return;
  }

  window.html2canvas(totalElement, {
    backgroundColor: "#ffffff", // fondo blanco
    scale: 2 // mejor calidad
  }).then(canvas => {
    const enlace = document.createElement("a");
    enlace.href = canvas.toDataURL("image/png");
    enlace.download = "Total_compras.png";
    enlace.click();
  });
}
