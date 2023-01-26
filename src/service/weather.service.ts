import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from './weather.interface';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  constructor(private http: HttpClient) {}

  apiKey = "e3114f865888c64e65833112d6ce970c"

  getLocation() {
    return this.http.get<Weather[]>('api.openweathermap.org/'+this.apiKey);
  }
}