// Fragmento 1
console.log("Empezamos...");
const promise1 = new Promise((resolve, reject) => {
console.log("Orden 1");
})
console.log("Se acabó!!");

/**
 * Empezamos...
 * Orden 1
 * Se acabó!!
 */

// Fragmento 2
console.log("Empezamos...");
const promise2 = new Promise((resolve, reject) => {
console.log("Orden uno")
resolve("Orden dos")
})
promise2.then(respuesta => {
console.log(respuesta)
})
console.log("Se acabó!!");

/**
 * Empezamos...
 * Orden uno
 * Se acabó!!
 * Orden dos
 */


// Fragmento 3
console.log("Empezamos...");
const promise3 = new Promise((resolve, reject) => {
console.log("Orden uno")

resolve("Orden dos")
console.log("Orden tres")
})
promise3.then(respuesta => {
console.log(respuesta)
})
console.log("Se acabó!!");

/**
 * Empezamos..
 * Orden uno
 * Orden tres
 * Se acabó!!
 * Orden dos
 */

// Fragmento 4
console.log("Empezamos...");
const promise4 = new Promise((resolve, reject) => {
console.log("Orden uno")
})
promise4.then(respuesta => {
console.log("Orden dos")
})
console.log("Se acabó!!");

/**
 * Empezamos..
 * Orden uno
 * Se acabó!!
 */

// Fragmento 5
console.log("Empezamos...")
const fn = () => (new Promise((resolve, reject) => {
console.log("Orden uno");
resolve("Ok")
}))
console.log("Orden dos")
fn().then(res => {
console.log(res)
})
console.log("Se acabó!!")

/**
 * Empezamos..
 * Orden dos
 * Orden uno
 * Se acabó!!
 * Ok
 */

// Fragmento 6
console.log("Comenzamos...")
Promise.resolve("Orden uno").then((respuesta) => {
console.log(respuesta)
})
Promise.resolve("Orden dos").then((respuesta) => {
console.log(respuesta)
})
console.log("Se acabó!!")

/**
 * Comenzamos..
 * Se acabó!!
 * Orden uno
 * Orden dos
 */