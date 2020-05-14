import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class ThemeService {

  private makeItDark: boolean; // theme value, true -> dark & false -> light

  getTheme() {
    // just return theme value, dark -> true & light -> false
    return this.makeItDark;
  }

  changeTheme(makeItDark: boolean) {

    // change theme value, makeItDark=true -> dark & makeItDark=false -> light
    this.makeItDark = makeItDark;

    // if user needs light them set attribute of 'dashboard.css' file to be light and same with dark
    if (this.makeItDark) {
      document.documentElement.setAttribute('data-theme', 'dark'); // set attribute and change css
      localStorage.setItem('theme', 'dark'); // save new theme in localStorage so we use in next visit
    } else {

      document.documentElement.setAttribute('data-theme', 'light'); // set attribute and change css
      localStorage.setItem('theme', 'light'); // save new theme in localStorage so we use in next visit
    }
  }


}
