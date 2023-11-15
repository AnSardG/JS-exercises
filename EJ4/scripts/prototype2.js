//Añadimos mediante prototipos un método a la clase Array al que pasamos el valor a borrar.
Array.prototype.borra = function (valor) {
    //Iteramos sobre todos los elementos que coincidan con dicho valor y los borramos con el método splice.
    while (this.indexOf(valor) >= 0) {
        this.splice(this.indexOf(valor), 1);
    };
}

let miArray = new Array(1, 2, 3, 3, 4, 4, 5, 5, 2, 1);
console.log(miArray);
miArray.borra(3);
console.log(miArray);
