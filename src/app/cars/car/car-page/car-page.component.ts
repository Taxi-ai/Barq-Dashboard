import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from '../../cars.service';
import { Car } from '../../car.model';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {

  car: Car;
  spin = true;

  constructor(private route: ActivatedRoute, private router: Router, private carsService: CarsService) { }


  ngOnInit() {
    const carID = this.route.snapshot.params.id;
    this.carsService.getCarByID(carID).subscribe(car => {
      console.log(car);
      this.car = car;
      this.spin = false;

    });
  }

  deleteCar() {
    this.spin = true;

    this.carsService.deleteCarByID(this.car._id).subscribe(data => {
      // console.log(data);
      this.spin = false;
      this.router.navigate(['../'], { relativeTo: this.route });
    },
      error => {
        this.spin = false;
      });
  }

}
