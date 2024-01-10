let texto = prompt("Introduzca un texto: ");
if (esPalindromo(texto)){
    alert("Su texto es palíndromo.")
} else {
    alert("Su texto NO es palíndromo.")
}

function esPalindromo(texto){
    let palindromo = true;
    //Quita espacios del texto.
    texto = texto.replace(/\s/g, '');
    //Pasa todas las letras a minusculas.
    texto = texto.toLowerCase();
    //Quita las tildes.
    texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    let izq = 0;
    let dcha = texto.length - 1;
    while(izq < dcha && palindromo){
        if(texto.charAt(izq) != texto.charAt(dcha)){
            palindromo = false;
        }
        izq++;
        dcha--;
    }
    return palindromo;
}