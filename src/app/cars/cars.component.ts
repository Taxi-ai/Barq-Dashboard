import { Component, OnInit } from '@angular/core';
import { CarsService } from './cars.service';
import { Car } from './car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[] = [];
  carsStates = { Car: 0, Disabled: 0, Accessed: 0 };
  dataArray = ['Car', 'Disabled', 'Accessed', this.carsStates];

  fetchingDataVars = { isFetchingError: false, isFetchingDone: false, carsArrayLength: 0 };

  constructor(private carsService: CarsService) { }

  ngOnInit() {

    this.carsService.getAllCars().subscribe(cars => {
      this.fetchingDataVars.isFetchingError = false;
      // console.log(cars);
      // console.log(typeof cars);
      this.cars = [...cars];

      if (this.cars.length > 0) {
        this.fetchingDataVars.carsArrayLength = this.cars.length;
        this.carsStates.Car = this.cars.length;

        // this.handlingGraphData(); // there is no graph
        this.gettingCarsStates();
      }

      this.fetchingDataVars.isFetchingDone = true;

    }, error => {
      this.fetchingDataVars.isFetchingError = true;

      console.log(error.message);

    });

  }


  gettingCarsStates() {
    this.cars.forEach((car) => {
      if (car.isDisabled === true) {
        this.carsStates.Disabled += 1;
      }
      if (car.isAccessed === true) {
        this.carsStates.Accessed += 1;
      }
    });
  }

}
