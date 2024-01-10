// // Primera ejecución: llamada a dos funciones. 

// function miDisplay(msg) {
//     console.log(msg);
//   }

// function miCalculadora(num1, num2) {
//     let sum = num1 + num2;

//     // miDisplay(sum);


//     return sum;


//   }


// function main() {

//     let resultado = setTimeout(function () {miCalculadora(6,4)}, 3000);

//     // JS no espera y ejecuta en paralelo la siguiente función... pero resultado aún no ha sido calculado

//     miDisplay(resultado);


// }

// main();



// // segunda ejecución : Display en la función calculadora para asegurar que el resultado se obtiene tras un intervalo de tiempo

// function miDisplay(msg) {
//   console.log(msg);
// }

// function miCalculadora(num1, num2) {
//   let sum = num1 + num2;
//   miDisplay(sum);
// }


// function main() {

//   setTimeout(function () {miCalculadora(6,4)}, 3000);


// }

// main();

// tercera ejecución : Usamos una función callback para resolver el problema anterior

// function miDisplay(msg) {
//   console.log(msg);
// }

// function miCalculadora(num1, num2, miCallback) {
//   let sum = num1 + num2;
//   miCallback(sum);
// }


// function main() {

//   setTimeout(function () {miCalculadora(6,4, miDisplay)}, 3000);

// }

// main();

// Ejemplo de funciones asíncronas

// function reloj() {
//     let d = new Date();
//     document.getElementById("salida").innerHTML=
//     d.getHours() + ":" +
//     d.getMinutes() + ":" +
//     d.getSeconds();
// }

// function main() {
//   reloj();
// }

// main();

//
// Ejemplo de callback hell
//

// Construimos una petición XMLHttpRequest a partir de una función callback

const makeRequest = (method, url, callback) => {

  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.responseType = "json";

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      callback(null, xhr.response);
    } else {
      callback(new Error(xhr.statusText), null);
    }
  }

  xhr.onerror = () => {
    callback(new Error("Error de red..."), null);
  }

  xhr.send();

}

// Ahora viene la callback hell

// Vamos a invocar la función anterior para obtener datos de jsonplaceholder.typicode.com
// Necesitamos consultar un post de un usuario y ver sus comentarios
// Para eso usamos el endpoint de /user y el de /posts
// Tomaremos el user con id=1 y consultaremos los comentarios de su primer post.

const baseURL = "https://jsonplaceholder.typicode.com";
console.time("Tiempo empleado")

makeRequest("GET", `${baseURL}/users/1`, (err, user) => {

  console.log({ user });

  makeRequest("GET", `${baseURL}/posts?userId=${user.id}`, (err, posts) => {

    console.log({ posts });
    const post = posts[0];

    makeRequest("GET", `${baseURL}/comments?postId=${post.id}`, (err, comments) => {

      console.log({comments});
      console.timeEnd("Tiempo empleado");
      
    });

  })

});




