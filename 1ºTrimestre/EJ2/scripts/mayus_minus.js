let texto = prompt("Introduzca un texto: ");
let resultado = checkText(texto);
switch (resultado) {
    case "mezcla":
        alert("Tiene mayúsculas y minúsculas");
        break;
    case "mayus":
        alert("Tiene SOLO mayúsculas");
        break;
    case "minus":
        alert("Tiene SOLO minúsculas");
        break;
}

function checkText(texto){
    let type;
    if(/[A-Z]/.test(texto) && /[a-z]/.test(texto)){
        type = "mezcla";
    } else if(/[A-Z]/.test(texto)){
        type = "mayus";
    } else {
        type = "minus";
    }
    return type;
}