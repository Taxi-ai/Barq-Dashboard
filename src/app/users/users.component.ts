import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UsersService } from './users.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];
  lineChartOptions: {};
  lineChartColors: Color[];
  lineChartLegend: boolean;
  lineChartPlugins: [];
  lineChartType: string;

  constructor(private usersService: UsersService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {

    this.users = this.usersService.getAllUsers();
    this.handlingGraphData();

    this.usersService.usersChanged.subscribe(
      (users: User[]) => {
        this.users = users;
        this.handlingGraphData();
      }
    );
  }

  handlingGraphData() {
    // function to initialize graph data
    const months: number[] = []; // all months that has users registered in
    this.users.forEach(
      (user) => {
        months.push(user.registered.month);
      }
    );

    const finalCounter: number[] = new Array(12); // array with numbers of months duplicates

    months.forEach((month) => {
      if (finalCounter[month - 1] === undefined) {
        finalCounter[month - 1] = 1;
      } else {
        finalCounter[month - 1] += 1;
      }
    });

    for (let i = 0; i < finalCounter.length; i++) {
      if (finalCounter[i] === undefined) {
        finalCounter[i] = 0;
      }
    }

    console.log(finalCounter);


    this.handlingGraphDesign(finalCounter);

  }

  handlingGraphDesign(finalCounter: number[]) {
    // function to change graph values
    this.lineChartData = [
      { data: finalCounter, label: 'Register Per Month' },
    ];

    this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];

    this.lineChartOptions = {
      responsive: true,
    };

    this.lineChartColors = [
      {
        borderColor: 'black',
        backgroundColor: 'rgba(255,255,0,0.28)',
      },
    ];

    this.lineChartLegend = true;
    this.lineChartPlugins = [];
    this.lineChartType = 'line';

  }

  userProfile(user) {
    console.log(user.ID);
    this.router.navigate([user.ID], { relativeTo: this.route });
  }

}
