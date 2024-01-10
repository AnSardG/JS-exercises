let num = prompt("Introduzca un número: ");
if(isEven(num)){
    alert("El número es par");
} else {
    alert("El número es impar");
}

function isEven(num){
    if (num % 2 == 0){
        return true;
    } else {
        return false;
    }
}