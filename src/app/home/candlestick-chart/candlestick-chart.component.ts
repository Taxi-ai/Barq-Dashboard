import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as CanvasJS from '../../../assets/js/canvasjs.min.js';

@Component({
  selector: 'app-candlestick-chart',
  templateUrl: './candlestick-chart.component.html',
  styleUrls: ['./candlestick-chart.component.css']
})
export class CandlestickChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    const dataPoints = [];

    const chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      theme: 'dark2', // "light1", "light2", "dark1", "dark2"
      exportEnabled: true,
      title: {
        text: 'Netflix Stock Price in 2016'
      },
      subtitles: [{
        text: 'Weekly Averages'
      }],
      axisX: {
        interval: 1,
        valueFormatString: 'MMM'
      },
      axisY: {
        prefix: '$',
        title: 'Price'
      },
      toolTip: {
        content: 'Date: {x}<br /><strong>Price:</strong><br />Open: {y[0]}, Close: {y[3]}<br />High: {y[1]}, Low: {y[2]}'
      },
      data: [{
        type: 'candlestick',
        yValueFormatString: '$##0.00',
        dataPoints
      }]
    });

    $.get('https://canvasjs.com/data/gallery/javascript/netflix-stock-price.csv', getDataPointsFromCSV);

    function getDataPointsFromCSV(csv) {
      let csvLines = [];
      let points = [];
      csvLines = csv.split(/[\r?\n|\r|\n]+/);
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < csvLines.length; i++) {
        if (csvLines[i].length > 0) {
          points = csvLines[i].split(',');
          dataPoints.push({
            x: new Date(
              // tslint:disable-next-line: radix
              parseInt(points[0].split('-')[0]),
              // tslint:disable-next-line: radix
              parseInt(points[0].split('-')[1]),
              // tslint:disable-next-line: radix
              parseInt(points[0].split('-')[2])
            ),
            y: [
              parseFloat(points[1]),
              parseFloat(points[2]),
              parseFloat(points[3]),
              parseFloat(points[4])
            ]
          });
        }
      }
      chart.render();
    }







  }

}
