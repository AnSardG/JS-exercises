let num = prompt("Introduce un número: ");
let factorial = num;
for (let i = num - 1; i > 0; i--) {    
    factorial *= i;
}
alert("El factorial de " + num + " es: " + factorial);