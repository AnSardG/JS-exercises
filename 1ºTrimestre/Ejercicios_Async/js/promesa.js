// Construimos una petición XMLHttpRequest a partir de una promesa

const makeRequest = (method, url) => {

    const promise = new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = "json";

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(new Error(xhr.statusText));
            }
        }

        xhr.onerror = () => {
            reject(new Error("Error de red..."));
        }

        xhr.send();

    })

    return promise;

}

// Repetimos ahora la petición anterior para obtener datos de jsonplaceholder.typicode.com

const baseURL = "https://jsonplaceholder.typicode.com";

console.time("Tiempo empleado");
const promise = makeRequest("GET", `${baseURL}/users/1`);

promise
    .then((res) => {
        console.log(res);
        return res;

    })
    .then((user) => {
        return makeRequest("GET", `${baseURL}/posts?userId=${user.id}`);
    })
    .then((posts) => {
        const post = posts[0];
        console.log(post);
        return makeRequest("GET", `${baseURL}/comments?postId=${post.id}`);
    }).then((comments) => {
        console.log({comments})
    })

    .catch((err) => {
        console.log("Se ha producido un error", err)
    })

    .finally(() => {
        console.log("Petición terminada!!")
        console.timeEnd("Tiempo empleado");
    })





