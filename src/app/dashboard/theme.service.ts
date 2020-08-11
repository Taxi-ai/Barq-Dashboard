import { Injectable } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })

export class ThemeService {

  constructor(private metaService: Meta) { }

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

      this.updatingAddressBarColor(true);

      document.documentElement.setAttribute('data-theme', 'dark'); // set attribute and change css

      localStorage.setItem('theme', 'dark'); // save new theme in localStorage so we use in next visit

    } else {

      this.updatingAddressBarColor(false);

      document.documentElement.setAttribute('data-theme', 'light'); // set attribute and change css

      localStorage.setItem('theme', 'light'); // save new theme in localStorage so we use in next visit

    }
  }


  updatingAddressBarColor(makeItDark: boolean) {

    let barColor: { hex: string; text: string; };
    if (makeItDark) {
      barColor = { hex: '#202124', text: 'black' };
    } else {
      barColor = { hex: '#f6f7fb', text: 'default' };
    }

    this.metaService.updateTag({ name: 'theme-color', content: barColor.hex }, 'name=\'theme-color\'');

    // tslint:disable-next-line: max-line-length
    this.metaService.updateTag({ name: 'apple-mobile-web-app-status-bar-style', content: barColor.text }, 'name=\'apple-mobile-web-app-status-bar-style\'');

    // tslint:disable-next-line: max-line-length
    this.metaService.updateTag({ name: 'msapplication-navbutton-color', content: barColor.hex }, 'name=\'msapplication-navbutton-color\'');

  }

}
