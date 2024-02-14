import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  getCountriesByName(name: string): Observable<Country[]> {
    const url = `${this.baseUrl}/name/${name}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCountriesByCapital(capital: string): Observable<Country[]> {
    const url = `${this.baseUrl}/capital/${capital}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCountriesByRegion(region: string): Observable<Country[]> {
    const url = `${this.baseUrl}/region/${region}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.baseUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url)
      .pipe(map(countries => countries.length > 0 ? countries[0] : null),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Error desconocido.';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Error Código: ${error.status}, Mensaje: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
