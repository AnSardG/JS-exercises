document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formRegistro");
    const pasos = document.querySelectorAll(".paso");
    const botonesSiguiente = document.querySelectorAll(".btn-siguiente");
    const progressBar = document.querySelector(".progress-bar")
    const botonesAnterior = document.querySelectorAll(".btn-anterior");
    const botonesPassword = document.querySelectorAll(".btn-eye");
    const passwordInput = document.getElementById("password");
    const passwordRepeatInput = document.getElementById("repeat-password");

    let pasoActual = 1;
    let longitudInput = 4;


    function actualizarBarraDeProgreso() {
        const progreso = ((pasoActual - 1) / (pasos.length - 1)) * 100;
        progressBar.style = `width: ${progreso}%`
    }

    function siguientePaso() {
        if(validarCampos()){
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

    function validarCampos() {
        const camposPasoActual = pasos[pasoActual - 1].querySelectorAll('input[type="text"]');
        const passwordsPasoActual = pasos[pasoActual - 1].querySelectorAll('input[type="password"]');
        const emailPasoActual = pasos[pasoActual - 1].querySelector('input[type="email"]');
        const movilPasoActual = pasos[pasoActual - 1].querySelector('input[type="tel"');

        let validado = true;

        for (const campo of camposPasoActual) {   

            switch (campo.id) {
                case "nombre":
                    if(campo.value.trim().length < 2){
                        validado = false;
                    }
                    break;  

                default:
                    if (campo.value.trim().length < longitudInput) {                                        
                        validado = false;
                    }
                    break;
            }
            
        }

        for(const password of passwordsPasoActual) {

            if(password.value.trim().length < longitudInput) {                
                validado = false;
            } else {
                if(password.id == "password") {
                    
                } else if (password.id == "repeat-password") {
                    
                }
            }  

            if (password.id === "password" || password.id === "repeat-password") {

                eyeButton.addEventListener('click', () => togglePasswordVisibility(password, eyeButton));
            }          
        
        }

        if (emailPasoActual != null) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailPasoActual.value.trim())) {
                // Si el email no cumple con el formato, muestra un mensaje de error o realiza la lógica que desees.
                validado = false;
            }
        }
    
        if (movilPasoActual != null) {

            //Teléfonos españoles
            const movilRegex = /^(?:(?:\+|00)34)?[6-9]\d{8}$/;
            if (!movilRegex.test(movilPasoActual.value.trim())) {
                // Si el móvil no cumple con el formato, muestra un mensaje de error o realiza la lógica que desees.
                validado = false;
            }
        }

        if(!validado) {
            alert('Todos los campos deben estar llenos.');
        }

        return validado;
    }

    function togglePasswordVisibility(id) {           
        if(id == "passwordButton") {            
            passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
        } else {
            passwordRepeatInput.type = passwordRepeatInput.type === 'password' ? 'text' : 'password';
        }                
    }


    botonesPassword.forEach((boton) => {
        boton.addEventListener("click", () => togglePasswordVisibility(boton.id));
    })

    botonesSiguiente.forEach((boton) => {
        boton.addEventListener("click", siguientePaso);
    });

    botonesAnterior.forEach((boton) => {
        boton.addEventListener("click", pasoAnterior);
    });

    formulario.addEventListener("submit", (e) => e.preventDefault());
});
