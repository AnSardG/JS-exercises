class Persona {
    //Constructores:
    constructor(nombre, edad, genero) {
        this.nombre = nombre || "";
        this.edad = edad || 0;
        this.genero = genero || "";
    }

    //Métodos:
    obtDetalles() {
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + this.edad);
        console.log("Género: " + this.genero);
    }

}

class Estudiante extends Persona {
    //Constructores:
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero);
        this.curso = curso || 0;
        this.grupo = grupo || "";
    }

    //Métodos:
    registrar(){
        console.log(this.nombre + " del curso " + this.curso + this.grupo + " se ha registrado.");
    }
}

class Profesor extends Persona {
    //Constructores:
    constructor(nombre, edad, genero, asignatura, nivel){
        super(nombre, edad, genero);
        this.asignatura = asignatura || "";
        this.nivel = nivel || "";
    }
    //Métodos:
    asignar(){
        console.log(this.nombre + " de la asignatura " + this.asignatura 
    + " nivel " + this.nivel + " se ha asignado.");
    }
}

let persona1 = new Persona("Paco", 30, "Masculino");
let estudiante1 = new Estudiante("Pepe", 20, "masculino", 3, "B");
let profesor1 = new Profesor("Julia", 40, "femenino", "Historia del arte", "Avanzado");

persona1.obtDetalles();
estudiante1.obtDetalles();
estudiante1.registrar();
profesor1.asignar();
profesor1.obtDetalles();