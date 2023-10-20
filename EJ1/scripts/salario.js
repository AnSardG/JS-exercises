const btn = document.getElementById("btn-form");
var creado = false;

btn.addEventListener("click", printData);

function getFormData() {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let salario = document.getElementById("salario").value;
    let edad = document.getElementById("edad").value;    
    return new Array(nombre, apellidos,
        salario, edad)
}

function printData() {
    let userData = getFormData();
    if(!creado){
        creado = true;
        for (let i = 0; i < userData.length; i++) {
            let para = document.createElement("p");
            para.textContent = userData[i];
            document.body.appendChild(para);
        }
        salaryActualization();
    }    
}

function salaryActualization(){
    let userData = getFormData();
    let header = document.createElement("h2");
    let par = document.createElement("p");
    let salario = userData[2];
    let edad = userData[3];

    header.textContent = "Actualización salarial";
    document.body.appendChild(header);
    par.textContent = "Salario: ";
    document.body.appendChild(par);
    if (salario>= 1000 && salario <= 2000){
        if(edad <= 45){
            par.textContent += salario * 1.10;
        } else {
            par.textContent += salario * 1.03;
        }        
    } else if (salario < 1000){
        if(edad < 30){
            par.textContent += 1100;
        } else if (edad <= 45){
            par.textContent += salario * 1.03;
        } else {
            par.textContent += salario * 1.15;
        }
    }
}