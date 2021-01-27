import { Injectable, EventEmitter } from '@angular/core';
import { Car } from './car.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  postNewCar(car: Car) {
    return this.http.post('https://taxi-graduation-project.firebaseio.com/cars.json', car);
  }

  getAllCars() {

    return this.http.get('https://taxi-graduation-project.firebaseio.com/cars.json').pipe(
      map((carsStream: Car[]) => {
        const carsArray = [];
        // tslint:disable-next-line: forin
        for (const id in carsStream) {
          carsArray.push({ id, ...carsStream[id] });
        }
        return carsArray;
      }));
  }


  getCarByID(carID: string) {
    const carAPI = 'https://taxi-graduation-project.firebaseio.com/cars/' + carID + '.json';
    return this.http.get<Car>(carAPI);
  }

  updateCarByID(carID: string, car: Car) {
    const carAPI = 'https://taxi-graduation-project.firebaseio.com/cars/' + carID + '.json';
    return this.http.put(carAPI, car);
  }

  deleteCarByID(carID: string) {
    const carAPI = 'https://taxi-graduation-project.firebaseio.com/cars/' + carID + '.json';
    return this.http.delete(carAPI);
  }

}
