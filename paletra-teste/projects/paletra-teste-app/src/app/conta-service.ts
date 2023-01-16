import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Conta } from './conta.model';

@Injectable({
  providedIn: 'root'
})
export class ContaService {
  constructor(private httpClient: HttpClient) {  }

  obterContas():Observable<Conta[]>{
    return this.httpClient.get<Conta[]>('http://localhost:5241/Conta/')
    .pipe(
      map((data) => data.map((json: any) => new Conta(json))),
      catchError(this.errorHandl)
    )
  }
  errorHandl(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => new Error(errorMessage))
 }
}
