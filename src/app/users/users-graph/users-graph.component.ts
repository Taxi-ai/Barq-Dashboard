import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-users-graph',
  templateUrl: './users-graph.component.html',
  styleUrls: ['./users-graph.component.css']
})
export class UsersGraphComponent implements OnInit {

  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];
  lineChartOptions: {};
  lineChartColors: Color[];
  lineChartLegend: boolean;
  lineChartPlugins: [];
  lineChartType: string;

  @Input() finalCounter: number[];


  constructor() { }

  ngOnInit() {
    this.handlingGraphDesign(this.finalCounter);
    // console.log(this.finalCounter);

  }

  handlingGraphDesign(finalCounter: number[]) {
    // function to change graph values
    this.lineChartData = [
      { data: finalCounter, label: 'Users per birth month' },
    ];

    this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];

    this.lineChartOptions = {
      responsive: true,
    };

    this.lineChartColors = [
      {
        borderColor: 'black',
        backgroundColor: 'rgba(68,102,242,0.15)',
      },
    ];

    this.lineChartLegend = true;
    this.lineChartPlugins = [];
    this.lineChartType = 'line';

  }

}
