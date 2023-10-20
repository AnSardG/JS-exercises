// Variables:
let numAleatorio, numIntroducido;
let cancel = false;
let wrong;

//Algoritmo:
do {
    intentos = 0;
    // Generamos un número aleatorio entre 0 y 1000.
    numAleatorio = Number.parseInt(Math.random() * 1000);
    do {
        do {
            wrong = false;
            // Preguntamos al usuario un número.
            numIntroducido = prompt("Adivina el número: ");
            // Si le da a cancelar o a escape, terminará el juego.
            if(numIntroducido == null){
                cancel = true;
            }
            // Si el número introducido pasa de sus límites o no es un número entonces se alertará de que no es válido y no contará como un intento.
            else if (isNaN(numIntroducido) || numIntroducido < 0 || numIntroducido > 1000) {
                alert("No válido");
                wrong = true;
            } 
        } while (!cancel && wrong == true);

        intentos++;
        // Si se ha introducido un número correctamente comprueba si es mayor o menor; en caso de ser igual terminará el bucle.
        if (!cancel) {
            if (numAleatorio > numIntroducido) {
                alert("Mi numero es mayor");
            }
            else if(numAleatorio < numIntroducido) {
                alert("Mi numero es menor");
            }
        }
    } while (!cancel && numIntroducido != numAleatorio);
    
    // Si el usuario no ha cancelado y ha salido del bucle significa que ha acertado, se mostrarán los intentos.
    if (!cancel) {
        alert("¡Acertaste! Intentos: " + intentos);
    }
} while (!cancel && confirm("¿jugar?"));

// Cuando termine la ejecución del programa se creará un elemento h1 dependiendo del resultado.
if (cancel) {
    document.write("<h1>Cancelado</h1>");
}
else {
    document.write("<h1>Fin</h1>");
}