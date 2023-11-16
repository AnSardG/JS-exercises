class Factura {
    //Constructores:
    constructor(cliente, elementos) {
        this.cliente = cliente;
        this.elementos = elementos;
    }

    //Atributos:
    baseImponible = 0;
    iva = 21;
    total = 0;
    formaPago = "contado";
    empresa = { nombre: "", direccion: "", telefono: "", cif: "" };

    //Métodos:
    muestraDatosCliente(){
        console.log("----DATOS CLIENTE-------");
        for (const clave in this.cliente) {
            console.log(clave + ": " + this.cliente[clave]);
        }
    }

    modificaDatosEmpresa(nombre, direccion, telefono, cif){
        this.empresa.nombre = nombre || "";
        this.empresa.direccion = direccion || "";
        this.empresa.telefono = telefono || "";
        this.empresa.cif = cif || "";
    }

    muestraDatosEmpresa(){
        console.log("----DATOS EMPRESA-------");
        for (const dato in this.empresa) {
            console.log(dato + ": " + this.empresa[dato]);
        }
    }

    modificaIva(iva){
        this.iva = iva || 21;
    }

    modificaBase(baseImponible, formaPago){
        this.baseImponible = baseImponible || 0;        
        this.formaPago = formaPago || "contado";        
    }

    calculaTotal(){
        this.total = this.baseImponible * (this.iva / 100) + this.baseImponible;
    }

    obtenTotal(){
        return this.total;
    }

}

let cliente = {
    nombre:"Antonio",
    direccion:"Asd",
    telefono:"77777777",
    nif:"41235"
}

let elementos = ["Hola soy descriptivo", 5, 23.4];

let facturita = new Factura(cliente, elementos);
facturita.muestraDatosCliente();
facturita.modificaDatosEmpresa("AYESA", "Calle pepito pere", "3123123213", "11111");
facturita.muestraDatosEmpresa();
facturita.modificaBase(20);
facturita.calculaTotal();
console.log(facturita.obtenTotal());