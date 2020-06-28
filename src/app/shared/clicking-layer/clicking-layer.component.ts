import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clicking-layer',
  templateUrl: './clicking-layer.component.html',
  styleUrls: ['./clicking-layer.component.css']
})
export class ClickingLayerComponent implements OnInit {


  @Input() booleanVar: boolean;
  @Output() layerClicked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    console.log('hi iam here ');
  }

  clickingLayer() {
    this.booleanVar = false;
    this.layerClicked.emit(false);
  }

}
