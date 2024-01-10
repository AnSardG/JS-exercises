function generarNumeroAleatorio(){
    return Math.floor(Math.random() * 11);
}

// Definición de la promesa
const promise = new Promise((resolve, reject) => {
    const numero = generarNumeroAleatorio();

    setTimeout(() => {
        if(numero <=5){
            resolve(`Promesa resuelta con el número ${numero}`);
        }else{
            reject(`Promesa rechazada con el número ${numero}`);
        }
    }, 3000);
});

// Consumo de la promesa
promise
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Promesa Acabada");
    });