import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car.model';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.css']
})
export class CarsTableComponent implements OnInit {

  @Input() cars: Car[];


  constructor(private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
  }

  carProfile(car: Car) {
    console.log(car._id);
    this.router.navigate([car._id], { relativeTo: this.route });
  }

}
