import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Frase } from '../frase';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-verfrase',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './verfrase.component.html',
  styleUrl: './verfrase.component.css'
})
export class VerfraseComponent implements OnInit{
  public frase : Frase = {id: "", quote:""};

  constructor(private apiservice: ApiService){ }

  ngOnInit(): void {
    this.apiservice.getFrase().subscribe(frase => (this.frase = frase));
  }
}
