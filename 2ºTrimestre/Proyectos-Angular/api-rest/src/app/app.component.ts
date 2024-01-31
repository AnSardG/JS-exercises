import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VerfraseComponent } from './verfrase/verfrase.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VerfraseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api-rest';
}
