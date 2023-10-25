function Persona(nombre, edad, genero) {
    this.nombre = nombre || "";
    this.edad = edad || 0;
    this.genero = genero || "";
}

Persona.prototype.obtDetalles = function () {
    console.log("Nombre: " + this.nombre);
    console.log("Edad: " + this.edad);
    console.log("Género: " + this.genero);
}

function Estudiante(nombre, edad, genero, curso, grupo){
    //Heredamos prototipo Persona
    Persona.call(this, nombre, edad, genero);

    this.curso = curso || 0;
    this.grupo = grupo || "";    
}

// Así establecemos la herencia del prototipo Persona a Estudiante
Estudiante.prototype = Object.create(Persona.prototype);

Estudiante.prototype.registrar = function(){
    console.log(this.nombre + " del curso " + this.curso + this.grupo + " se ha registrado.");
}

function Profesor(nombre, edad, genero, asignatura, nivel){
    Persona.call(this, nombre, edad, genero);

    this.asignatura = asignatura || "";
    this.nivel = nivel || "";
}

Profesor.prototype = Object.create(Persona.prototype);

Profesor.prototype.asignar = function(){
    console.log(this.nombre + " de la asignatura " + this.asignatura 
    + " nivel " + this.nivel + " se ha asignado.");
}

let persona1 = new Persona("Juan", 30, "Masculino");
let estudiante1 = new Estudiante("Pepe", 20, "masculino", 3, "B");
let profesor1 = new Profesor("Julia", 40, "femenino", "Historia del arte", "Avanzado");

persona1.obtDetalles();
estudiante1.registrar();
estudiante1.obtDetalles();
profesor1.asignar();
profesor1.obtDetalles();