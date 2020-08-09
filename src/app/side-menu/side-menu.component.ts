import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  lastScrollTop = 0;
  scrollingUp = false;

  @HostListener('window:scroll', ['$event'])


  scrollHandler(event) {

    const newScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (newScrollTop > this.lastScrollTop) {
      // downScroll code
      this.scrollingUp = false;
    } else {
      // upScroll code
      this.scrollingUp = true;
      // console.log(event);
      // console.log('Scroll Event');
    }
    this.lastScrollTop = newScrollTop <= 0 ? 0 : newScrollTop; // For Mobile or negative scrolling
  }


  constructor() { }

  ngOnInit() {

    const x = document.documentElement.clientHeight;
    console.log(x);


  }


}
