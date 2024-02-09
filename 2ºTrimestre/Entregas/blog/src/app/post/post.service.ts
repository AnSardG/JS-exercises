import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL = "https://jsonplaceholder.typicode.com";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }  

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/posts/').pipe(catchError(this.errorHandler));    
  }

  create(post: Post): Observable<any> {
    return this.httpClient.post(this.apiURL + '/posts/', JSON.stringify(post), this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }

  find(id: number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/posts/' + id).pipe(catchError(this.errorHandler));
  }

  update(id: number, post: Post): Observable<any> {
    return this.httpClient.put(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
  
  delete(id: number) {
    return this.httpClient.delete(this.apiURL + '/posts/' + id, this.httpOptions).pipe(catchError(this.errorHandler));
  }

  errorHandler(errorReceived: any) {
    let errorMessage = '';
    if(errorReceived.error instanceof ErrorEvent) {
      errorMessage = errorReceived.error.message;
    } else {
      errorMessage = `Error status: ${errorReceived.status}\nMessage: ${errorReceived.message}`;
    }
    return throwError(errorMessage);
 }

}
