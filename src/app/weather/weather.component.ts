import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Weather } from 'src/app/weather/weather.interface';
import { Subscription } from 'rxjs'
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

  // getLocationSubscription?: Subscription;
  city: string = "";
  weather: Weather[] = [];
  weatherData: any;
  unit = 'Celsius';
  unitText = "Celsius";

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    
  }

  getWeather(city: string){
    this.weatherService.getWeatherData(city).subscribe(data => {
      this.weatherData = data;
      this.weatherData.main.temp = this.convertToCelsius(this.weatherData.main.temp);
      this.weatherData.main.feels_like = this.convertToCelsius(this.weatherData.main.feels_like);
    });
  }

  convertToCelsius(temp: number) {
    return (temp - 273.15).toFixed(1);
  }
  

}
