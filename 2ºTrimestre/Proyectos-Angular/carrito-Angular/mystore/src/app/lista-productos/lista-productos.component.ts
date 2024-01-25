import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { productos } from '../productos';
import { AlertaProductoComponent } from '../alerta-producto/alerta-producto.component';
import { Producto } from '../productosInterface';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule, AlertaProductoComponent],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})

export class ListaProductosComponent {
  productos = productos;

  compartirProducto() : void{
    alert("El producto se ha compartido");
  }

  onAviso(producto:Producto) {
    console.log(producto.nombre);
  }
}
