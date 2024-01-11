"use strict";
class Vehiculo {
    constructor(marca, modelo, color, fechaFabricacion, cilindrada) {
        this.marca = marca || "";
        this.modelo = modelo || "";
        this.color = color || "";
        this.fechaFabricacion = fechaFabricacion || 0;
        this.cilindrada = cilindrada || 0;
    }
    mostrarDatos() {
        console.log("--------DATOS----------");
        console.log("Marca: " + this.marca);
        console.log("Modelo: " + this.modelo);
        console.log("Color: " + this.color);
        console.log("Año de fabricación: " + this.fechaFabricacion);
        console.log("Cilindrada: " + this.cilindrada);
    }
    acelerar(velocidad) {
        console.log("El vehículo ha acelerado a " + velocidad + " km/h.");
    }
    arrancar() {
        console.log("El vehículo ha arrancado.");
    }
    frenar() {
        console.log("El vehículo ha frenado.");
    }
}
class Furgoneta extends Vehiculo {
    constructor(marca, modelo, color, fechaFabricacion, cilindrada, pasajeros) {
        super(marca, modelo, color, fechaFabricacion, cilindrada);
        this.pasajeros = pasajeros;
    }
    mostrarDatos() {
        super.mostrarDatos();
        console.log("Número de pasajeros: " + this.pasajeros);
    }
}
class Todoterreno extends Vehiculo {
    constructor(marca, modelo, color, fechaFabricacion, cilindrada, tieneTraccion) {
        super(marca, modelo, color, fechaFabricacion, cilindrada);
        this.tieneTraccion = tieneTraccion || false;
    }
    mostrarDatos() {
        super.mostrarDatos();
        let respuesta = this.tieneTraccion ? "El vehículo tiene tracción." : "El vehículo no tiene tracción.";
        console.log(respuesta);
    }
}
let vehiculito = new Vehiculo("Ford", "Focus", "Rojo", 2005, 120);
vehiculito.mostrarDatos();
vehiculito.acelerar(60);
vehiculito.arrancar();
vehiculito.frenar();
let b = new Furgoneta("A", "B", "C", 2012, 100, 9);
b.mostrarDatos();
b.acelerar(120);
b.arrancar();
b.frenar();
let c = new Todoterreno("Z", "X", "Y", 1999, 50, true);
c.mostrarDatos();
c.acelerar(90);
c.arrancar();
c.frenar();
