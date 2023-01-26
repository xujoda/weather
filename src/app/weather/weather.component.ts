import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Weather } from 'src/service/weather.interface';
import { WeatherService } from 'src/service/weather.service';
import { Subscription } from 'rxjs'
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

  getLocationSubscription?: Subscription;
  location: string = "";
  weather: Weather[] = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getLocationSubscription = this.weatherService.getLocation().subscribe(weather => {
      this.weather = weather;
    });
  }

  sendLocation(){

  }

}
