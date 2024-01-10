//Podemos especificar varios tipos para una variable
let nombreT: string|number = "Frodo";
nombreT = 20;

//También podemos especificar un literal concreto como tipo para la variable.
let puntosVida: number|"MAX" = 90;
puntosVida = "MAX";

//Esto es un objeto literal, podriamos definir las caracteristicas de dicho objeto 
//con interfaces.
let c_frodo: caracteristicas = {
    saltar: true,
    magia: "Bola de Fuego",
    mochila: ["Espada", "Anillo", "Capa"],
    nivel: 2
}

//Interfaces:

interface caracteristicas {
    saltar : boolean,
    magia: string,
    mochila: string[],
    nivel: number|"MAX"
}

let c_bilbo: caracteristicas = {
    saltar: false,
    magia: "",
    mochila: ["cota de malla", "diente de dragón"],
    nivel: "MAX"
}