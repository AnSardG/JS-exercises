document.addEventListener("mousemove", (event) => {
    const coordenadas = `X: ${event.clientX}, Y: ${event.clientY}`;   
    let texto = document.getElementById("coor");
    texto.textContent = coordenadas;
})