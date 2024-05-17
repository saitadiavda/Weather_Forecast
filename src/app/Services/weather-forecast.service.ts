import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  constructor(private http: HttpClient) { }
  
  getforeCastData(location: any) {
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=1635890035cbba097fd5c26c8ea672a1`);    
  }
}
