import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../../cars.service';
import { Car } from '../../car.model';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {

  car: Car;

  constructor(private route: ActivatedRoute, private carsService: CarsService) { }


  ngOnInit() {


    const carID = this.route.snapshot.params.id;
    this.carsService.getCarByID(carID).subscribe(car => {
      console.log(car); this.car = car;
    });


  }

}
