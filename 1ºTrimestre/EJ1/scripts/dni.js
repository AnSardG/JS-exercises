let btn = document.getElementById("enviar");

btn.addEventListener("click", (ev) =>{
    ev.preventDefault();
    let dni = document.getElementById("dni").value;
    let parr = document.createElement("p");
    let letra = dni.slice(-1);
    if (typeof letra === 'string' || letra instanceof String){
        parr.textContent = `Letra: ${letra}`;
    } else if (letra != "") {
        parr.textContent = "No ha introducido una letra.";
    }   
    document.body.appendChild(parr);

})
