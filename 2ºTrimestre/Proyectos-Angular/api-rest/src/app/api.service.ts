import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Frase } from './frase';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private frase: Frase = {id: "", quote: ""};
  private ChiquitoUrl = "https://chiquitadas.es/api/quotes/avoleorrr"; // URL to web api

  constructor(private http: HttpClient) { }

  public getFrase(): Observable<Frase> {
    return this.http.get<Frase>(this.ChiquitoUrl);
  }
}
