import { Component, OnInit } from '@angular/core';
import { GlobalVariablesService } from '../../global-variables.service';



@Component({
  selector: 'app-navbar-dark-light-toggle',
  templateUrl: './dark-light-toggle.component.html',
  styleUrls: ['./dark-light-toggle.component.css']
})

export class DarkLightToggleComponent implements OnInit {
  makeItDark = true;

  toggleTheme() {

    this.makeItDark = !this.makeItDark;
    this.globalVariablesService.changeTheme(this.makeItDark);
    console.log(this.globalVariablesService.getTheme());

  }

  constructor(public globalVariablesService: GlobalVariablesService) {

  }

  ngOnInit() { }
}
