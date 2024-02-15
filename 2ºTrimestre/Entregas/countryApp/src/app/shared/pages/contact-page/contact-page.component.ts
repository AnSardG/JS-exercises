import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

  nombre!: string;
  email!: string;
  mensaje!: string;
  output: string = '';

  constructor() { }

  onSubmit() {
    
    if(this.nombre === '') {
      this.output = 'No ha introducido nombre\n';
    } else {
      this.output = `Nombre: ${this.nombre}\n`;
    }

    if(this.email === ''){
      this.output += 'No ha introducido correo electrónico\n';
    } else {
      this.output += `Correo electrónico: ${this.email}\n`;
    }

    if(this.mensaje === '') {
      this.output += 'No ha introducido ningún mensaje.';
    } else {
      this.output += `Mensaje: ${this.mensaje}`;
    }

    alert(this.output);
  }

}
