import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(public themeService: ThemeService) { }

  ngOnInit() {

    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null; // get theme value from localStorage

    // check if there is a value for attribute 'theme'
    if (currentTheme) {
      // there is a value for attribute 'theme' --> check for value

      if (currentTheme === 'dark') {

        // 'theme' value is 'dark' --> apply dark theme
        this.themeService.changeTheme(true);

      } else if (currentTheme === 'light') {

        // 'theme' value is 'light' --> apply light theme
        this.themeService.changeTheme(false);

      }

    } else {
      // if there is no value for attribute 'theme' --> check for 'prefers-color-scheme' browser support

      if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
        // browser supports 'prefers-color-scheme' media query --> check for preferred theme and apply it

        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        if (darkModeMediaQuery.matches === true) {
          // user use dark mode in his device
          this.themeService.changeTheme(true);
        } else {
          // user use dark mode in his light
          this.themeService.changeTheme(false);
        }

      } else {
        // browser doesn't support 'prefers-color-scheme' media query --> apply 'dark' as default

        this.themeService.changeTheme(true);
      }

    }







  }

}
