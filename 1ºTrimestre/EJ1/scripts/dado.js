const dado = document.getElementById("dado");
dado.addEventListener("click", (ev) =>{
    ev.defaultPrevented;
    let tiradaMax = 6;
    let tiradaMin = 1;
    let tirada = getRandomNumber(tiradaMax, tiradaMin);    
    let res= document.getElementById("res");
    console.log(res);
    res.textContent = `Ha salido un: ${tirada}`;
})

function getRandomNumber(max, min){
    return Math.floor(Math.random() * (max - min + min)) + min;
}