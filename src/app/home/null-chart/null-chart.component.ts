import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as CanvasJS from '../../../assets/js/canvasjs.min.js';


@Component({
  selector: 'app-null-chart',
  templateUrl: './null-chart.component.html',
  styleUrls: ['./null-chart.component.css']
})
export class NullChartComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    const dataPoints = [];
    let dpsLength = 0;
    const chart = new CanvasJS.Chart('chartContainer2', {
      theme: 'dark2',
      exportEnabled: true,
      title: {
        text: 'System Requests Per Second'
      },
      data: [{
        type: 'spline',
        dataPoints,
      }]
    });

    $.getJSON('https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=25&length=20&type=json&callback=?', function (data) {
      $.each(data, (key, value) => {
        dataPoints.push({ x: value[0], y: parseInt(value[1]) });
      });
      dpsLength = dataPoints.length;
      chart.render();
      updateChart();
    });
    function updateChart() {
      // tslint:disable-next-line: max-line-length
      $.getJSON('https://canvasjs.com/services/data/datapoints.php?xstart=' + (dpsLength + 1) + '&ystart=' + (dataPoints[dataPoints.length - 1].y) + '&length=1&type=json&callback=?', function (data) {
        $.each(data, function (key, value) {
          dataPoints.push({
            x: parseInt(value[0]),
            y: parseInt(value[1])
          });
          dpsLength++;
        });

        if (dataPoints.length > 20) {
          dataPoints.shift();
        }
        chart.render();
        setTimeout(() => { updateChart(); }, 1000);
      });
    }
  }
}
