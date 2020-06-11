import { Injectable, EventEmitter } from '@angular/core';
import { Car } from './car.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  postCar() {
    // new car to system
  }

  getAllCars() {

    return this.http.get('https://barq-api.azurewebsites.net/api/cars').pipe(
      map((carsStream: Car[]) => {
        const carsArray = [];
        // tslint:disable-next-line: forin
        for (const id in carsStream) {
          carsArray.push({ ...carsStream[id] });
        }
        return carsArray;
      }));

  }


  getCarByID(carID: number) {
    const carAPI = 'https://barq-api.azurewebsites.net/api/cars/' + carID;
    return this.http.get<Car>(carAPI);
  }


}
