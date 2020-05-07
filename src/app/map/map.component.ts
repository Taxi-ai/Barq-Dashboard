import { Component, OnInit, Directive, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {

  @ViewChild('myCanvas', { static: false }) myCanvas: ElementRef;
  context: CanvasRenderingContext2D;

  numberCanvasCoordinates = { canvasWidth: 0, canvasHeight: 0 };

  constructor() { }

  ngOnInit() {

    // TODO this will be set using input and property-binding -- just take a number and do the math to keep the dimensions
    this.numberCanvasCoordinates.canvasWidth = 1252;
    this.numberCanvasCoordinates.canvasHeight = 834;

  }

  ngAfterViewInit() {

    this.myCanvas.nativeElement.width = this.numberCanvasCoordinates.canvasWidth;
    this.myCanvas.nativeElement.height = this.numberCanvasCoordinates.canvasHeight;

    this.context = this.myCanvas.nativeElement.getContext('2d');

    const mapImage = new Image();
    const pinImage = new Image();


    pinImage.onload = () => {
      mapImage.onload = () => {
        this.context.drawImage(pinImage, 0, 0, 100, 100);
        // TODO height and width of pin must be scaled with map not has fixed width and height
      };
      this.context.drawImage(mapImage, 0, 0, this.numberCanvasCoordinates.canvasWidth, this.numberCanvasCoordinates.canvasHeight);
    };


    mapImage.src = 'https://image.freepik.com/free-vector/colored-city-map-with-river-park_23-2148319224.jpg';
    pinImage.src = 'https://www.connectsafely.org/wp-content/uploads/Location-pin-1.png';



    // this.context.beginPath();
    // this.context.moveTo(841.84375, 71);

    // // line 1
    // this.context.lineTo(800.84375, 360);

    // // quadratic curve
    // this.context.quadraticCurveTo(784.84375, 471, 250, 120);

    // // bezier curve
    // this.context.bezierCurveTo(290, -40, 300, 200, 400, 150);

    // // line 2
    // this.context.lineTo(500, 90);

    // this.context.lineWidth = 5;
    // this.context.strokeStyle = 'blue';
    // this.context.stroke();




  }

  getMousePosition(event) {
    console.log(event);

    const rect = this.myCanvas.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log('Coordinate x: ' + x,
      'Coordinate y: ' + y);
  }


}
