import {Component, OnInit} from '@angular/core';
import {Weather} from "../model/Weather";
import {WeatherService} from "../service/weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  allLocations: Weather[] = [];

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.weatherService.getAllWeather().subscribe(data => {
      this.allLocations = data as Weather[];
    });
  }

}
