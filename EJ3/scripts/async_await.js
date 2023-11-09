// Promesa, código ejecutor
const promise = new Promise((resolve, reject) => {
    if (Math.random() > 0.2) {
        setTimeout(() => {
            resolve("Ok. Los datos han llegado");
        }, 2000);
    } else {
        reject("Error en la comunicación");
    }
});

// Función asíncrona, código consumidor.
async function getData() {
    try {
        // Si no resuelve la promesa, se pasa al catch.
        const mensaje = await promise;
        console.log(mensaje);
    } catch (error) {
        console.log(error);
    }
};

// Llamada a función asíncrona.
getData();