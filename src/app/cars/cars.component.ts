import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CarsService } from './cars.service';
import { Car } from './car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[] = [];
  carsLocations = [
    { xCord: 161, yCord: 92 },
    { xCord: 30, yCord: 224 },
    { xCord: 501, yCord: 437 },
  ];
  carsStates = { Car: 0, Disabled: 0, Accessed: 0 };
  countersArray = ['Car', 'Disabled', 'Accessed', this.carsStates];

  fetchingDataVars = { isFetchingError: false, isFetchingDone: false, carsArrayLength: 0 };

  searchQueries = [
    { label: 'ID', value: 'id', type: 'text' },
    { label: 'Description', value: 'description', type: 'text' }
  ];

  filterQueries = [

    {
      label: 'Model', value: 'model', type: 'select', selectOptions: []
    },
    {
      label: 'Color', value: 'color', type: 'select', selectOptions: []
    },
    {
      label: 'Enabled', value: 'disabled', type: 'select', selectOptions: [
        { label: 'Enabled', value: 'enabled' },
        { label: 'Disabled', value: 'disabled' },
      ]
    },
    {
      label: 'Accessed', value: 'accessed', type: 'select', selectOptions: [
        { label: 'Accessed', value: 'accessed' },
        { label: 'Not Accessed', value: 'not-accessed' }
      ]
    }
  ];

  @ViewChild('NewBTN', { static: true }) NewBTN: ElementRef;
  // @ViewChild('carsTable', { static: true }) carsTable: ElementRef;

  mapWidth: number;
  tableHeight: number;

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

      this.setMapWidth();



    }, error => {
      this.fetchingDataVars.isFetchingError = true;

      console.log(error.message);

    });

  }


  setMapWidth() {
    this.mapWidth = this.NewBTN.nativeElement.clientWidth - 30;
    console.log(this.NewBTN.nativeElement);
  }


  gettingCarsStates() {
    const colorsArray = [];
    const modelsArray = [];

    this.cars.forEach((car) => {

      if (modelsArray.includes(car.model)) {
      } else {
        this.filterQueries[0].selectOptions.push({ label: car.model, value: car.model });
        modelsArray.push(car.model);
      }

      if (colorsArray.includes(car.color)) {
      } else {
        this.filterQueries[1].selectOptions.push({ label: car.color, value: car.color });
        colorsArray.push(car.color);
      }

      if (car.isDisabled === true) {
        this.carsStates.Disabled += 1;
      }

      if (car.isAccessed === true) {
        this.carsStates.Accessed += 1;
      }
    });
  }

  changeTableHeight(height: number) {
    console.log(height);
    this.tableHeight = height;
  }


}
