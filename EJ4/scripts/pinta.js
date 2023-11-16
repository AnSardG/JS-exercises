// Referencias:
const paleta = document.getElementById("paleta");
const seleccionado = document.getElementById("seleccion");
const lienzo = document.getElementById("lienzo");
//Lienzo:
const filas = 6;
const columnas = 10;
//Paleta:
let colores = ['#1f93f9', '#f91f1f', '#1ff926', '#f7f7f7', '#0a0909'];
let coloresPaleta = [];

//Construimos tanto las celdas de paleta (con los colores) como las de lienzo (con sus filas y columnas).
construyePaleta(colores);
construyeLienzo(filas, columnas);

// Añadimos un listener a cada color de la paleta que modifica el color seleccionado
coloresPaleta.forEach(element => {
    element.addEventListener("click", (event) => {
        seleccionado.style.backgroundColor = event.target.style.backgroundColor;
    })    
});

//Obtenemos las celdas del lienzo en forma de array.
let celdas = Array.from(document.getElementsByClassName("celda"));

//Por cada una de esta celda añadiremos un listener que modificará el color de dicha celda por el seleccionado.
celdas.forEach(celda => {
    celda.addEventListener("click", (event) => {
        event.target.style.backgroundColor = seleccionado.style.backgroundColor;
    })
});



// Funciones:

function construyeLienzo(filas = 5, columnas = 6){
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
            celda.className = "celda";
            tabla.appendChild(celda);
        }
    }
}

function construyePaleta(colores){
    colores.forEach(color => {
        const div = document.createElement("div");
        div.id = "color";
        div.style.backgroundColor = color;
        div.style.width = "120px";
        div.style.height= "120px";
        coloresPaleta.push(div);
        paleta.appendChild(div);
    });
}