import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  nombreAlumno : string = "Antonio Sard González";
  marca : string = "Campus Cámara de Comercio";
  actualYear: number = new Date().getFullYear();

}
