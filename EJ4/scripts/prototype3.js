function Vehiculo(marca, modelo, color, fechaFabricacion, cilindrada) {
    this.marca = marca || "";
    this.modelo = modelo || "";
    this.color = color || "";
    this.fechaFabricacion = fechaFabricacion || 0;
    this.cilindrada = cilindrada || 0;

    this.mostrarDatos = function () {
        console.log("--------DATOS----------");
        console.log("Marca: " + this.marca);
        console.log("Modelo: " + this.modelo);
        console.log("Color: " + this.color);
        console.log("Año de fabricación: " + this.fechaFabricacion);
        console.log("Cilindrada: " + this.cilindrada);
    }

    this.acelerar = function(velocidad) {
        console.log("El vehículo ha acelerado a " + velocidad + " km/h.");
    }

    this.arrancar = function() {
        console.log("El vehículo a arrancado.");
    }

    this.frenar = function() {
        console.log("El vehículo a frenado.");
    }
}


function Furgoneta(marca, modelo, color, fechaFabricacion, cilindrada, pasajeros) {
    Vehiculo.call(this);

    this.base = Vehiculo;
    this.base(marca, modelo, color, fechaFabricacion, cilindrada);

    this.pasajeros = pasajeros || 0;

    var mostrarDatosOriginal = this.mostrarDatos;
    this.mostrarDatos = function() {
        mostrarDatosOriginal.call(this);
        console.log("Número de pasajeros: " + this.pasajeros);
    }
}


function Todoterreno(marca, modelo, color, fechaFabricacion, cilindrada, tieneTraccion) {
    Vehiculo.call(this);
    
    this.base = Vehiculo;
    this.base(marca, modelo, color, fechaFabricacion, cilindrada);
    this.tieneTraccion = tieneTraccion || false;

    var mostrarDatosOriginal = this.mostrarDatos;
    this.mostrarDatos = function() {
        mostrarDatosOriginal.call(this);
        let respuesta = tieneTraccion ? "El vehículo tiene tracción.":"El vehículo no tiene tracción.";
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
