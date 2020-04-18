import { Component, OnInit } from '@angular/core';
import { GlobalVariablesService } from '../../global-variables.service';


@Component({
  selector: 'app-navbar-dark-light-toggle',
  templateUrl: './dark-light-toggle.component.html'
})

export class DarkLightToggleComponent implements OnInit {
  // TODO make only one var that is public between components and able to change always makeItDark=True
  light() {
    console.log('light');
    this.globalVariablesService.changeTheme(false);

    console.log(this.globalVariablesService.getTheme());


  }
  dark() {
    console.log('dark');
    this.globalVariablesService.changeTheme(true);
    console.log(this.globalVariablesService.getTheme());


  }



  constructor(public globalVariablesService: GlobalVariablesService) { }

  ngOnInit() { }
}
