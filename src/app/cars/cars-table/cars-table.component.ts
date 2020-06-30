import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Car } from '../car.model';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.css']
})
export class CarsTableComponent implements OnInit, AfterViewInit {

  @Input() cars: Car[];
  @Input() tableHeight: number;

  @ViewChild('tableHeight') tableHeightDiv: ElementRef;


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }


  ngAfterViewInit() {

    this.tableHeightDiv.nativeElement.clientHeight = this.tableHeight;
    console.log(this.tableHeightDiv.nativeElement.clientHeight);


  }




  carProfile(car: Car) {
    console.log(car._id);
    this.router.navigate([car._id], { relativeTo: this.route });
  }

}
