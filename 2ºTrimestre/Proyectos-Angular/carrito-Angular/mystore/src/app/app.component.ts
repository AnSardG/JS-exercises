import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { AlertaProductoComponent } from './alerta-producto/alerta-producto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BarraSuperiorComponent, ListaProductosComponent, AlertaProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mystore';
}
