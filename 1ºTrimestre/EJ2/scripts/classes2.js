class Edificio{
    //Constructores
    constructor(calle, numero, codigo){
        this.calle = calle || "";
        this.numero = numero || 0;
        this.codigo = codigo || "";
        console.log("\"construido nuevo edificio en calle: " + calle + ", no.: " 
        + numero + ", CP: "+codigo + ".\"");
    }

    //Atributos:
    propietarios = [];

    //Métodos
    agregarPlantasYPuertas(numplantas, puertas){
        this.numplantas += numplantas;
        this.puertas += puertas;
    }

    modificarNumero(numero){
        this.numero = numero;
    }

    modificarCodigoPostal(codigo){
        this.codigo = codigo;
    }

    get imprimeCalle(){
        return this.calle;
    }

    get imprimeNumero(){
        return this.numero;
    }

    get imprimeCodigoPostal(){
        return this.codigo;
    }

    agregarPropietario(nombre,planta,puerta){
        this.propietarios.push([nombre, planta, puerta]);
        console.log("\"" + nombre + " es ahora el propietario de la puerta " 
        + puerta + " de la planta " + planta + ".\"");
    }

    imprimePlantas(){
        this.propietarios.forEach(element => {
            console.log("Propietario del piso " + element[1] + "" + element[2] 
            + ": " + element[0]);
        });
    }
}

let edificio1 = new Edificio("San Ignacio", 16, "41018");
edificio1.agregarPlantasYPuertas(3, 6);
console.log(edificio1.imprimeCalle);
console.log(edificio1.imprimeCodigoPostal);
console.log(edificio1.imprimeNumero);
edificio1.agregarPropietario("Antonio", 1, "B")
edificio1.agregarPropietario("Pepe", 2, "A")
edificio1.agregarPropietario("Juana", 3, "D")
edificio1.agregarPropietario("Elisa", 1, "C")
edificio1.imprimePlantas();