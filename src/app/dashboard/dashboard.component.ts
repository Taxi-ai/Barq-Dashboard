import { Component, OnInit } from '@angular/core';
import { ThemeService } from "./theme.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(public themeService: ThemeService) { }
  ngOnInit() {

    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      // browser supports 'prefers-color-scheme' media query
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      if (darkModeMediaQuery.matches === true) {
        // user use dark mode in his device
        this.themeService.changeTheme(true);
      } else {
        // user use dark mode in his light
        this.themeService.changeTheme(false);
      }

    } else {
      // browser doesn't support 'prefers-color-scheme' media query
      this.themeService.changeTheme(true);
    }


  }

}
