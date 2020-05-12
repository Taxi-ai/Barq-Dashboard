import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../dashboard/theme.service';



@Component({
  selector: 'app-navbar-dark-light-toggle',
  templateUrl: './dark-light-toggle.component.html',
  styleUrls: ['./dark-light-toggle.component.css']
})

export class DarkLightToggleComponent implements OnInit {

  makeItDark: boolean;

  constructor(public themeService: ThemeService) { }

  ngOnInit() {
    // get theme value after if statement of 'prefers-color-scheme' in dashboard component
    this.makeItDark = this.themeService.getTheme();
  }

  toggleTheme() {
    this.makeItDark = !this.makeItDark;
    this.themeService.changeTheme(this.makeItDark);
  }

}
