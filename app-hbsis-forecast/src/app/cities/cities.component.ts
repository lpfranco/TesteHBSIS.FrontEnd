import { Component, OnInit } from '@angular/core';
import { CitiesService } from './cities.service';
import { City } from './city-model';
import { Forecast } from './forecast-model';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})

export class CitiesComponent implements OnInit {

  cityList: City;
  forecastList: Forecast;
  mustSave: boolean;
  city: City = {
    id: null,
    cityName: ''
  };

  constructor(private citiesService: CitiesService) { }

  ngOnInit() {
    this.refreshCityList();
  }

  refreshCityList(){
    this.citiesService.getCities()
      .subscribe(res => this.cityList = res);
  }

  save(){
    this.getForecast(this.city.cityName);
    this.citiesService.createCity(this.city).subscribe(x => this.refreshCityList());
  }

  remove(id: string){
    this.citiesService.removeCity(id).subscribe(x => this.refreshCityList());
  }

  getForecast(cityName: string){
     this.citiesService.getForecast(cityName).subscribe(res => {this.forecastList = res});
  }
}
