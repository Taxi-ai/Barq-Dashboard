import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/admin-login/auth.service';
import { ThemeService } from '../../dashboard/theme.service';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})

export class AdminMenuComponent implements OnInit {

  makeItDark: boolean;

  @Output() buttonClicked = new EventEmitter<boolean>();

  constructor(private authService: AuthService, public themeService: ThemeService) { }

  ngOnInit() {
    // get theme value after if statement of 'prefers-color-scheme' in dashboard component
    this.makeItDark = this.themeService.getTheme();

  }

  clickingButton() {
    this.buttonClicked.emit(false);
  }

  onLogout() {
    this.clickingButton();
    this.authService.signingOut();
  }

  toggleTheme() {
    this.clickingButton();
    this.makeItDark = !this.makeItDark;
    this.themeService.changeTheme(this.makeItDark);
  }



}
