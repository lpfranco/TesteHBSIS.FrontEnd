import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from './city-model';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Forecast } from './forecast-model';

@Injectable({
  providedIn: 'root'
})

export class CitiesService {

  private url = "https://localhost:44367/api/City";
  private urlForecast = "https://localhost:44367/api/City/GetForecast?city=";
  constructor(private http: HttpClient) { }

  getCities(): Observable<City>{
    return this.http.get<City>(this.url);
  }

  createCity(requestObj: City){
    return this.http.post<City>(this.url, requestObj);
  }

  removeCity(id: string){
    const _url = `${this.url}/${id}`;
    return this.http.delete<City>(_url);
  }

  getForecast(cityName: string): Observable<Forecast>{
    return this.http.get<Forecast>(this.urlForecast+cityName);
  }
}
