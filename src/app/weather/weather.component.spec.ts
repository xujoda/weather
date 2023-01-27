import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherComponent } from './weather.component';
import { of } from 'rxjs'

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a function to conversion degrees'), () =>{
    expect(component.convertToCelsius).toBeTruthy();
  }

  describe('getWeather', () => {
    let weatherService: any;
    let weatherData: any;
  
    beforeEach(() => {
      weatherService = jasmine.createSpyObj('weatherService', ['getWeatherData']);
      weatherData = { temperature: '20' };
    });
  
    it('should get the weather data for the given city', () => {
      const city = 'New York';
  
      weatherService.getWeatherData.and.returnValue(of(weatherData));
  
      weatherService.getWeatherData(city).subscribe((data: any) => {
        weatherData = data;
      });
  
      expect(weatherService.getWeatherData).toHaveBeenCalledWith(city);
      expect(weatherData).toEqual(weatherData);
    });
  });
});
