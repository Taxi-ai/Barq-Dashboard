import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../../car.model';
import { CarsService } from '../../cars.service';

@Component({
  selector: 'app-car-new',
  templateUrl: './car-new.component.html',
  styleUrls: ['./car-new.component.css']
})
export class CarNewComponent implements OnInit {

  car: Car = {
    model: '',
    description: '',
    color: '',

  };
  spin = false;

  constructor(private route: ActivatedRoute, private router: Router, private carsService: CarsService) { }

  ngOnInit() {

  }

  postNewCar() {
    console.log(this.car);
    this.spin = true;

    this.carsService.postNewCar(this.car).subscribe(data => {
      console.log(data);
      this.spin = false;

      this.router.navigate(['../'], { relativeTo: this.route });
    });

  }


}
