import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  showAnchors = true; // indicates just showing active button in mobile view (true) or all the menu (false)

  @ViewChild('sideMenu', { static: true }) notActivatedButtons: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    console.log(this.notActivatedButtons.nativeElement);
  }

  toggleMenu() {

    let newDisplay: string;



    if (this.showAnchors) {
      newDisplay = 'Block';
    } else {
      newDisplay = 'none';
    }


    // TODO fix this - it kills side-menu if you changed size

    const menuAnchors = document.getElementsByTagName('a');
    // console.log(menuAnchors);
    // tslint:disable-next-line: prefer-for-of
    for (let i = 1; i < menuAnchors.length; i++) {
      menuAnchors[i].style.display = newDisplay;
    }

    this.showAnchors = !this.showAnchors;


    // this.renderer.setStyle(this.sideMenu.nativeElement, 'height', 'auto');

  }

}
