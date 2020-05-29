import { Component, OnInit } from '@angular/core';
import { CarsService } from './cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars = [];

  fetchingDataVars = { isFetchingError: false, isFetchingDone: false, carsArrayLength: 0 };

  constructor(private carsService: CarsService) { }

  ngOnInit() {

    this.carsService.getAllCars().subscribe(cars => {
      this.fetchingDataVars.isFetchingError = false;
      console.log(cars);
      console.log(typeof cars);
      this.cars = [...cars];

      if (this.cars.length > 0) {
        this.fetchingDataVars.carsArrayLength = this.cars.length;
        // this.handlingGraphData(); // there is no graph
        // this.gettingCarsStates(); //company won't be banned
      }

      this.fetchingDataVars.isFetchingDone = true;

    }, error => {
      this.fetchingDataVars.isFetchingError = true;

      console.log(error.message);

    });

  }

  postCar() {
    // remove this method after removing its button in the UI
    this.carsService.postCar();
  }
}
