import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor() { }

  @ViewChild('myCanvas', { static: false }) myCanvas: ElementRef;
  context: CanvasRenderingContext2D;

  numberCanvasCoordinates = { canvasWidth: 0, canvasHeight: 0 };

  canvasImages = {
    map: 'https://image.freepik.com/free-vector/colored-city-map-with-river-park_23-2148319224.jpg',
    endPoint: 'https://www.connectsafely.org/wp-content/uploads/Location-pin-1.png',
    startingPoint: 'https://lh3.googleusercontent.com/S8BDYwHyxKR9T1DupOmAhif21jqLLUkl6GGQrwIXQuV7jFlmBXEF6TCvkCUl9V1D2Q',
    currentLocation: 'https://play14.org/images/games/magic-triangles/01.png'
  };

  newX = 0;
  newY = 0;
  stopLoading = false;
  locationInterval;

  ngOnInit() {

    // TODO this will be set using input and property-binding -- just take a number and do the math to keep the dimensions
    this.numberCanvasCoordinates.canvasWidth = 1252;
    this.numberCanvasCoordinates.canvasHeight = 834;

  }

  ngAfterViewInit() {

    this.myCanvas.nativeElement.width = this.numberCanvasCoordinates.canvasWidth;
    this.myCanvas.nativeElement.height = this.numberCanvasCoordinates.canvasHeight;

    this.context = this.myCanvas.nativeElement.getContext('2d');



    // TODO height and width of pin must be scaled with map not has fixed width and height
    // it put (0,0) of the image in the place you want
    // if you need to put pin in 100,75 and pin width is 30 and hight is 50
    // pin need to be drawImage(images.pin, 100-(30/2) , 75-50, 30, 50)

    this.loadingImages(this.canvasImages, (images: any) => {
      this.locationInterval = setInterval(
        () => {
          this.stopLoading = true;
          this.context.clearRect(0, 0, this.numberCanvasCoordinates.canvasWidth, this.numberCanvasCoordinates.canvasHeight);
          this.context.drawImage(images.map, 0, 0, this.numberCanvasCoordinates.canvasWidth, this.numberCanvasCoordinates.canvasHeight);
          this.context.drawImage(images.endPoint, (839.5 - 100 / 2), 123 - 100, 100, 100);
          this.context.drawImage(images.startingPoint, 437.5 - 25, 399 - 25, 50, 50);
          this.context.drawImage(images.currentLocation, this.newX - 25, this.newY - 16.65, 50, 33.3);
          console.log('running');
        }
        , 2000);

    });


    //////////////////////// Drawing a path
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

  ngOnDestroy() {
    console.log('destroy map');

    clearInterval(this.locationInterval);
  }

  getMousePosition(event: MouseEvent) {
    console.log(event);
    const rect = this.myCanvas.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log('Coordinate x: ' + x,
      'Coordinate y: ' + y);
    this.newX = x;
    this.newY = y;
  }




  loadingImages(canvasImages: {}, callback: (images: any) => void) {


    const images = {};
    let imagesNumber = 0;
    let imagesCounter = 0;

    // tslint:disable-next-line: forin
    for (const image in canvasImages) {
      imagesNumber++;
    }

    // tslint:disable-next-line: forin
    for (const image in canvasImages) {
      images[image] = new Image();
      images[image].onload = () => {
        if (++imagesCounter >= imagesNumber) {
          callback(images);
        }
      };
      images[image].src = canvasImages[image];
    }
  }



}
