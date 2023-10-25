var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D'
    , 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let dni = prompt("Introduzca su DNI: ");
let letra = dni.slice(-1);
dni = Number.parseInt(dni.slice(0, -1));

if (dni < 0 || dni > 99999999) {
    alert("El número proporcionado no es válido")
} else {
    let letraCorrecta = letras[dni%23];
    if (letra === letraCorrecta){
        alert("El número y la letra del DNI son correctos.");
    } else {
        alert("Se ha introducido un número y/o letra incorrectos.");
    }
}