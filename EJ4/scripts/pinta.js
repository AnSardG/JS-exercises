let colores = ['#1f93f9', '#f91f1f', '#1ff926', '#f7f7f7', '#0a0909'];
let coloresPaleta = [];
const paleta = document.getElementById("paleta");
const seleccionado = document.getElementById("seleccion");
const lienzo = document.getElementById("lienzo");


colores.forEach(color => {
    const div = document.createElement("div");
    div.id = "color";
    div.style.backgroundColor = color;
    div.style.width = "120px";
    div.style.height= "120px";
    coloresPaleta.push(div);
    paleta.appendChild(div);
});

// Añadimos un listener a cada color de la paleta que modifica el color seleccionado
coloresPaleta.forEach(element => {
    element.addEventListener("click", (event) => {
        seleccionado.style.backgroundColor = event.target.style.backgroundColor;
    })    
});

const filas = 6;
const columnas = 10;
for (let i = 0; i < filas; i++) {
    const tabla = document.createElement("table");
    tabla.style.display = "flex";    
    tabla.style.justifyContent = "center";
    lienzo.appendChild(tabla);
    for(let j = 0; j < columnas; j++){
        const celda = document.createElement("div");
        celda.style.backgroundColor = '#f7f7f7';
        celda.style.width = "100px";
        celda.style.height = "100px";
        celda.id = "celda";
        tabla.appendChild(celda);
    }
}