

function getHighestValue() {
    let aux = "";
    valores.forEach(element => {
        if (typeof element === 'string' || element instanceof String
            && element > aux) {
            aux = element;
        }
    });
    return aux;
}

function printBoolArrays() {
    let valoresBool = valores.filter((boolean) =>
        boolean == true || boolean == false);
    let valoresBoolTrue = valores.filter((boolean) =>
        boolean == true);
    let valoresBoolFalse = valores.filter((boolean) =>
        boolean == false);    
    console.log(valoresBool);
    console.log(valoresBoolTrue);
    console.log(valoresBoolFalse);
}

function printMathOperations() {
    let numbers = valores.filter((num) => 
    num instanceof Number || typeof num === 'number');
    console.log(numbers);
    let suma = numbers[0] + numbers[1];
    let resta = numbers[0] - numbers[1];
    let multiplicacion = numbers[0] * numbers[1];
    let division = numbers[0] / numbers[1]
    let modulo = numbers[0] % numbers[1];
    console.log("Suma total: " + suma);
    console.log("Resta total: " + resta);
    console.log("Multiplicación total: " + multiplicacion);
    console.log("División total: " + division);
    console.log("Módulo total: " + modulo);
}

    var valores = [true, 5, false, "hola", "adios", 2];
    console.log("--EJERCICIO 1--");
    console.log(getHighestValue());
    console.log("--EJERCICIO 2--");
    printBoolArrays();
    console.log("--EJERCICIO 3--");
    printMathOperations();
