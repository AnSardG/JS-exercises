import { Component } from '@angular/core';
import { Personaje } from '../personaje';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})
export class PersonajeComponent {
  personajes : Personaje[] = [
    {
      id  : 1,
      nombre : "Legolas El Elfo Arquero",
      nivel : 80
    },

    {
      id : 2,
      nombre : "Aragorn hijo de Arathorn, heredero de ISILDUR",
      nivel : 100
    },

    {
      id : 3,
      nombre : "Gandalf el Gris, invocador de la llama de Udûn",
      nivel : 400
    },

    {
      id : 4,
      nombre : "Frodo Bolsón de la Comarca",
      nivel : 2
    }
  ]  
  personajeSel! : Personaje;

  onSelect(personaje : Personaje) : void {
    this.personajeSel = personaje;
  }

}
