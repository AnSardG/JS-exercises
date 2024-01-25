import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonajeComponent } from './personaje/personaje.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonajeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ESDLA';
}
