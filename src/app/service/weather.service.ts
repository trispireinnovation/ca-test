import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {HttpClientTestingModule} from "@angular/common/http/testing";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getAllWeather() {
    return this.httpClient.get(`${environment.baseUrl}/weather/all`);
  }

  getCityWeather(cityName: string) {
    return this.httpClient.get(`${environment.baseUrl}/weather/${cityName}`);
  }

}
