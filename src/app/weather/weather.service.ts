import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Weather } from './weather.interface';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  constructor(private http: HttpClient) {}

  private apiKey = "e3114f865888c64e65833112d6ce970c"

  getWeatherData(city: string) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
    console.log(apiUrl);
    return this.http.get(apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}