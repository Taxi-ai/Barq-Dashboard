import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../assets/js/canvasjs.min.js';

@Component({
  selector: 'app-zoom-chart',
  templateUrl: './zoom-chart.component.html',
  styleUrls: ['./zoom-chart.component.css']
})
export class ZoomChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.onload = () => {

      const chart = new CanvasJS.Chart('chartContainer1', {
        theme: 'dark2', // "light1", "light2", "dark1", "dark2"
        animationEnabled: true,
        zoomEnabled: true,
        title: {
          text: 'Try Zooming and Panning'
        },
        data: [{
          type: 'area',
          dataPoints: []
        }]
      });

      addDataPoints(50);
      chart.render();

      function addDataPoints(noOfDps) {
        // tslint:disable-next-line: one-variable-per-declaration
        let xVal = chart.options.data[0].dataPoints.length + 1, yVal = 100;
        for (let i = 0; i < noOfDps; i++) {
          yVal = yVal + Math.round(5 + Math.random() * (-5 - 5));
          chart.options.data[0].dataPoints.push({ x: xVal, y: yVal });
          xVal++;
        }
      }

    };
  }

}
