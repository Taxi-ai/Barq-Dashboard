import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor() { }

  @Input() locations: { xCord: number, yCord: number }[];
  @Input() mapWidth: number;
  @Output() mapHeightWasSet = new EventEmitter<number>();

  @ViewChild('myCanvas') myCanvas: ElementRef;
  context: CanvasRenderingContext2D;

  canvasDimensions = { canvasWidth: 0, canvasHeight: 0 };

  canvasImages = {
    map: 'https://i.ibb.co/cvX9K9c/realMap.png',
    currentLocation: 'https://i.ibb.co/kJyjcZc/location-pin.png'
  };

  mapImageWidth = 800;
  mapImageHeight = 684;

  pinImageWidth = 419;
  pinImageHeight = 641;

  pinWidth = 40;
  pinHeight = (this.pinWidth * this.pinImageHeight) / this.pinImageWidth;

  newX = 0;
  newY = 0;
  oldX: number;
  oldY: number;
  stopLoading = false;
  // locationInterval;
  tableHeightInterval;


  ngOnInit() {

    this.canvasDimensions.canvasWidth = this.mapWidth;
    this.canvasDimensions.canvasHeight = (this.mapWidth * this.mapImageHeight) / this.mapImageWidth;

    this.locationMapping(this.locations);


    console.log(this.canvasDimensions.canvasWidth);
    console.log(this.canvasDimensions.canvasHeight);




  }

  ngAfterViewInit() {

    this.myCanvas.nativeElement.width = this.canvasDimensions.canvasWidth;
    this.myCanvas.nativeElement.height = this.canvasDimensions.canvasHeight;

    this.context = this.myCanvas.nativeElement.getContext('2d');

    // TODO height and width of pin must be scaled with map not has fixed width and height
    // it put (0,0) of the image in the place you want
    // if you need to put pin in 100,75 and pin width is 30 and hight is 50
    // pin need to be drawImage(images.pin, 100-(30/2) , 75-50, 30, 50)

    this.loadingImages(this.canvasImages, (images: any) => {
      // this.locationInterval = setInterval(
      // () => {
      this.stopLoading = true;

      if (this.newX !== this.oldX || this.newY !== this.oldY) {

        this.context.clearRect(0, 0, this.canvasDimensions.canvasWidth, this.canvasDimensions.canvasHeight);

        this.context.drawImage(images.map, 0, 0, this.canvasDimensions.canvasWidth, this.canvasDimensions.canvasHeight);


        this.locations.forEach((location) => {
          console.log(location);

          this.context.drawImage(
            images.currentLocation,
            location.xCord,
            location.yCord,
            this.pinWidth,
            this.pinHeight
          );

        });

        // this.context.drawImage(
        //   images.currentLocation,
        //   this.newX - (this.pinWidth / 2),
        //   this.newY - this.pinHeight,
        //   this.pinWidth, this.pinHeight
        // );

        console.log('running');

        this.newX = this.oldX;

        this.newY = this.oldY;


      }
      // }
      // , 2000);

    });

    this.tableHeightInterval = setInterval(() => {
      if (document.body.clientWidth > 992) {
        this.mapHeightWasSet.emit(this.myCanvas.nativeElement.clientHeight);
      }
    }, 500);



  }




  ngOnDestroy() {
    console.log('destroy map');

    clearInterval(this.tableHeightInterval);
    // clearInterval(this.locationInterval);
  }


  getMousePosition(event: MouseEvent) {
    // console.log(event);
    // const rect = this.myCanvas.nativeElement.getBoundingClientRect();
    // const x = event.clientX - rect.left;
    // const y = event.clientY - rect.top;
    // console.log('Coordinate x: ' + x,
    //   'Coordinate y: ' + y);
    // this.newX = x;
    // this.newY = y;


  }




  loadingImages(canvasImages: object, callback: (images: any) => void) {

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

  locationMapping(locations: { xCord: number, yCord: number }[]) {

    const initialMapWidth = 629;
    const initialMapHeight = 537.5;

    locations.forEach((location, index) => {
      const newXCord = (location.xCord * this.canvasDimensions.canvasWidth) / initialMapWidth;
      const newYCord = (location.yCord * this.canvasDimensions.canvasHeight) / initialMapHeight;
      this.locations[index].xCord = newXCord;
      this.locations[index].yCord = newYCord;
      console.log(newXCord + ' - ' + newYCord);

    });

  }

}
