import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../theme.service';



@Component({
  selector: 'app-navbar-dark-light-toggle',
  templateUrl: './dark-light-toggle.component.html',
  styleUrls: ['./dark-light-toggle.component.css']
})

export class DarkLightToggleComponent implements OnInit {
  makeItDark = true;

  toggleTheme() {

    this.makeItDark = !this.makeItDark;
    this.themeService.changeTheme(this.makeItDark);
    console.log(this.themeService.getTheme());

  }

  constructor(public themeService: ThemeService) {

  }

  ngOnInit() { }
}
