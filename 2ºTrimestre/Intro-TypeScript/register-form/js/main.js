document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formRegistro");
    const pasos = document.querySelectorAll(".paso");
    const botonesSiguiente = document.querySelectorAll(".btn-siguiente");
    const progressBar = document.querySelector(".progress-bar")
    const botonesAnterior = document.querySelectorAll(".btn-anterior");
    let pasoActual = 1;        


    function actualizarBarraDeProgreso() {
        const progreso = ((pasoActual - 1) / (pasos.length - 1)) * 100;        
        progressBar.style = `width: ${progreso}%`
    }

    function siguientePaso() {
        let camposRequired = document.querySelectorAll(".required");
        var noRequiredLeft = false;

        i = 0;
        while (!noRequiredLeft && i < camposRequired.length) {                   
            console.log(camposRequired[i].value);
            noRequiredLeft = camposRequired[i].value != null;
            i++;
        }

        if (noRequiredLeft) {
            pasos[pasoActual - 1].style.display = "none";
            pasoActual++;
            if (pasoActual > pasos.length) {
                pasoActual = pasos.length;
            }
            pasos[pasoActual - 1].style.display = "block";
            actualizarBarraDeProgreso();
        }
    }

    function pasoAnterior() {
        pasos[pasoActual - 1].style.display = "none";
        pasoActual--;
        if (pasoActual < 1) {
            pasoActual = 1;
        }
        pasos[pasoActual - 1].style.display = "block";
        actualizarBarraDeProgreso();
    }

    botonesSiguiente.forEach((boton) => {
        boton.addEventListener("click", siguientePaso);   
    });

    botonesAnterior.forEach((boton) => {
        boton.addEventListener("click", pasoAnterior);
    });

    formulario.addEventListener("submit", (e) => e.preventDefault());
});
