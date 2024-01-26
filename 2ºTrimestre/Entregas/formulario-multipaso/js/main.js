document.addEventListener("DOMContentLoaded", function () {
    // ENTORNO del algoritmo:
    const formulario = document.getElementById("formRegistro");
    const pasos = document.querySelectorAll(".paso");
    const botonesSiguiente = document.querySelectorAll(".btn-siguiente");
    const progressBar = document.querySelector(".progress-bar")
    const botonesAnterior = document.querySelectorAll(".btn-anterior");
    const botonesPassword = document.querySelectorAll(".btn-eye");
    const generoInput = document.getElementById("genero");
    const passwordInput = document.getElementById("password");
    const passwordRepeatInput = document.getElementById("repeat-password");
    const emailInput = document.getElementById("email");
    const movilInput = document.getElementById("phone");
    const salarioInput = document.getElementById("salario");

    let pasoActual = 1;
    //Guardamos cuantos carácteres queremos como mínimo en los campos de tipo text de forma global.
    let longitudInput = 4;

    //FUNCIONES:

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
        
        console.log(pasoActual);
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
        // Guardamos los campos de tipo texto del paso actual y inicializamos la variable validado como verdadera.        
        const camposPasoActual = pasos[pasoActual - 1].querySelectorAll('input[type="text"]');        
        let validado = true;

        //Recorremos todos los campos de tipo texto del paso actual.
        for (const campo of camposPasoActual) {   

            switch (campo.id) {
                case "nombre":
                    //Para el nombre queremos que no introduzcan un nombre menor de 2 carácteres.
                    if(campo.value.trim().length < 2){
                        validado = false;                        
                    } else {
                        validado = true;
                    }

                    //Esta forma de validar la veremos en todos los inputs que vayamos validando, se llama
                    //a la funcion validarCampo con el campo actual y si ha pasado la validación o no.
                    validarCampo(campo, validado);
                    break;  

                default:
                    if (campo.value.trim().length < longitudInput) {                                        
                        validado = false;
                        validarCampo(campo, validado);
                    } else if(!validado) {
                        //En este caso, para que se valide solamente este campo necesitamos comprobar
                        //el valor de la variable validado, ya que si la igualamos a verdadero
                        //entrará al siguiente paso aunque los campos anteriores a este no estuviesen validados.
                        validarCampo(campo, !validado);
                    }

                    break;
            }
            
            
        }
        
        if(pasoActual == 1) {
            if(generoInput.value == '') {
                validado = false                
                validarCampo(generoInput, validado);
            } else if (!validado) {
                validarCampo(generoInput, !validado);
            }
            
        }

        if(pasoActual == 2){

            if(passwordInput.value.trim().length < longitudInput) {
                validado = false;
                validarCampo(passwordInput, validado);
            } else if(!validado){
                validarCampo(passwordInput, !validado);
            }

            
            
            if(passwordRepeatInput.value.trim().length < longitudInput 
            || passwordRepeatInput.value != passwordInput.value) {
                validado = false;
                validarCampo(passwordRepeatInput, validado);
            } else if (!validado) {
                validarCampo(passwordRepeatInput, !validado);
            }

            

        }

        if (pasoActual == 3) {
            if (emailInput != null) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value.trim())) {                
                    validado = false;
                } else {
                    validado = true;
                }
    
                validarCampo(emailInput, validado);
            }
        
            if (movilInput != null) {
    
                /**
                 * Expresión regular que comprueba teléfonos españoles con cualquiera de los siguientes formatos:
                 * +346xxxxxxxx
                 * 00346xxxxxxxx
                 * 346xxxxxxxx
                 * 6xxxxxxxx
                 * 7xxxxxxxx
                 * 8xxxxxxxx
                 * 9xxxxxxxx
                 */          

                const movilRegex = /^(?:(?:\+|00)34)?[6-9]\d{8}$/;
                if (!movilRegex.test(movilInput.value.trim())) {
                    validado = false;
                    validarCampo(movilInput, validado);
                } else if (!validado) {
                    validarCampo(movilInput, !validado);
                }
                
            }
        }
        
        if (pasoActual == 4) {
            if (salarioInput != null) {
                if(salarioInput.value < 300) {
                    validado = false;
                } else {
                    validado = true;
                    salarioPresupuesto = salarioInput.value - 172;
                    alert("Tras los gastos de comida al mes aproximados en España, su sueldo sería: " + salarioPresupuesto + "€.");
                }
                
                validarCampo(salarioInput, validado);
            }
        }                

        return validado;
    }

    function validarCampo(campo, valido){
        if(valido){
            campo.classList.remove('campo-invalido')
        } else {
            campo.classList.add('campo-invalido')
        }
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
    

    document.addEventListener("keydown", function (e) {

        // Comprobamos si se ha pulsado la tecla Enter y si es así se intentará continuar al siguiente paso.
        if (e.key === "Enter"){
            // Evita que el formulario se envíe por defecto
            e.preventDefault();

            siguientePaso();
        }
    })
});
