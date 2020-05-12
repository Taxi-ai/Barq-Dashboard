import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })

export class ThemeService {

  private makeItDark: boolean; // theme value, true -> dark & false -> light

  constructor(@Inject(DOCUMENT) private document: Document) { }

  getTheme() {
    // just return theme value, dark -> true & light -> false
    return this.makeItDark;
  }

  changeTheme(makeItDark: boolean) {
    // change theme value, makeItDark=true -> dark & makeItDark=false -> light
    this.makeItDark = makeItDark;
    // if user needs light use light file and same with dark
    if (this.makeItDark) {
      this.loadStyle('assets/css/dark.css');
    } else {
      this.loadStyle('assets/css/light.css');
    }
  }

  loadStyle(styleName: string) {
    const head = this.document.getElementsByTagName('head')[0];
    const themeLink = this.document.getElementById(
      'client-theme'
    ) as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = styleName;
    } else {
      const style = this.document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.href = `${styleName}`;

      head.appendChild(style);
    }
  }



}
