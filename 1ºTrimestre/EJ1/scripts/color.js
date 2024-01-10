/*
 El método getElementsByClassName devuelve un HTMLCollection, no un array, por lo tanto no podría utilizarse
 el método foreach distintivo de los arrays a no ser que lo convirtamos en uno con el método from, el cual
 se puede utilizar en objetos iterables.
*/
let box = Array.from(document.getElementsByClassName("col-sm mr-5 h-100 d-inline-block text-white"));
box.forEach(element => {
    element.addEventListener("mouseover", (event) => {
        document.body.style.backgroundColor = event.target.style.backgroundColor;
    })
});
