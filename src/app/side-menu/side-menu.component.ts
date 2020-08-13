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
    // console.log('window.pageYOffset ' + window.pageYOffset);
    // console.log('document.documentElement.scrollTop ' + document.documentElement.scrollTop);
    // console.log('document.documentElement.scrollHeight ' + document.documentElement.scrollHeight);

    //   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    //     // you're at the bottom of the page
    // }

    if (newScrollTop < this.lastScrollTop || (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      // upScroll code -> showSideMenu
      this.scrollingUp = true;
      // console.log(event);
      // console.log('Scroll Event');
    } else {
      // downScroll code -> hideSideMenu
      this.scrollingUp = false;

    }
    this.lastScrollTop = newScrollTop <= 0 ? 0 : newScrollTop; // For Mobile or negative scrolling
  }


  constructor() { }

  ngOnInit() {

    const x = document.documentElement.clientHeight;
    // console.log(x);


  }


}
