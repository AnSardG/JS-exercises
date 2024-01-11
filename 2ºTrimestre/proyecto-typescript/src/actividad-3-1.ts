class ProductoAlimenticio {
    codigo: number;
    nombre: string;
    precio: number;

    constructor(codigo: number, nombre: string, precio: number){
        this.codigo = codigo || -1;
        this.nombre = nombre || "";
        this.precio = precio || -1;
    }
    
    imprimeDatos() : void {
        console.log("----------DATOS DEL PRODUCTO----------");
        console.log("Codigo: " + this.codigo);
        console.log("Nombre: " + this.nombre);
        console.log("Precio: " + this.precio);
    }
    
};

// Declaramos el array donde guardamos dichos productos.
let arrayProductos: ProductoAlimenticio[] = [
    new ProductoAlimenticio(111, "Platano Canario", 3.23),
    new ProductoAlimenticio(222, "Arroz para Perico", 1.45),
    new ProductoAlimenticio(333, "Azúcar Blanco", 0.73)
];

// Recorremos dicho array y utilizamos el método.
arrayProductos.forEach((producto: ProductoAlimenticio) => {
    producto.imprimeDatos();
});