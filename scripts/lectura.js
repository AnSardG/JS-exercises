const numero = prompt("Introduzca un número");
const body = document.body;
const para = document.createElement("p");
if(!isNaN(numero)){
    para.textContent = `Ha introducido un número (${numero})`;
} else {
    para.textContent = "No es un número";
}
body.appendChild(para);