//EJERCICIO 1
/*
let nombre: string = "Manolo el del bombo";
let edad: number = 23;

const PERSONAJE = {
nombre: nombre,
edad: edad
};

console.log(nombre);
console.log(edad);
console.log(PERSONAJE.nombre);
console.log(PERSONAJE.edad);
*/

//EJERCICIO 2


//Clausula para utilizar la  versión SE5
"use strict";
// Uso de Let y Const
const nombre: string = "Nestor Kauil";
const edad: number = 25;

const PERSONAJE = {
nombre: nombre,
edad: edad
};

console.log(PERSONAJE);


//EJERCICIO 3

"use strict";
const batman = {
nombre: "Bruno Díaz",
artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};

console.log(batman);


//EJERCICIO 4

"use strict";
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
// PODER = opcional
// ARMA = por defecto = "arco"
const getAvenger = function (nombre: string, poder?: string, arma: string = "arco"): string {    
    let mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;        
    }
    else {
        mensaje = nombre + " tiene un " + arma;
    }
    return mensaje;
};
console.log(getAvenger("Mujer maravilla"));


//EJERCICIO 5

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
// * base
// * altura
// También un método que calcule el área = base * altura,
// ese método debe de retornar un numero.

class Rectangulo {
    base: number;
    altura: number;

    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): number {
        return this.base * this.altura;
    }
}

const clase: Rectangulo = new Rectangulo(2, 3);
console.log(clase.calcularArea());


//EJERCICIO 6
"use strict";
// Convertir esta funcion a una funcion de flecha
//function resultadoDoble( a, b ){
//return (a + b) * 2
//}
const resultadoDoble = (a:number, b:number): number => { 
    return (a + b) * 2; 
};
console.log(resultadoDoble(2, 2));