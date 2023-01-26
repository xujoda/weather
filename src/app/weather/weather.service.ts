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

  getWeatherData(location: string) {
    //const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=60.95239678049154&lon=76.49406184655066&appid=${this.apiKey}`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.apiKey}`;
    console.log(apiUrl);
    return this.http.get(apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}