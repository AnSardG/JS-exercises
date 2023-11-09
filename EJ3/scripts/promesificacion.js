/*

// Función síncrona que gestiona una función callback.
function getData(callback) {
    if (Math.random() > 0.2) {
        //2 segundos para ejecutar la función flecha.
        setTimeout(() => {
            //Se utiliza la función callback pasando por parámetro una cadena.
            callback("Ok. Los datos han llegado");
        }, 2000);
    } else {
        // Se utiliza la función callback pasando por parámetro una cadena.
        callback("Error en la comunicación!!");
    }
}
// Llamada a la función getData() con una función flecha (callback).
getData(data => {
    console.log(data);
});

*/

const promise = new Promise((resolve, reject) => {
    if (Math.random() > 0.2) {
        setTimeout(() => {
            resolve("Ok. Los datos han llegado");
        }, 2000);
    } else {
        reject("Error en la comunicación!!");
    }
});

promise.then((mensaje) => {
    console.log(mensaje);
})
    .catch((error) => {
        console.log(error);
    });