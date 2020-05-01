import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ThemeService {
  private makeItDark = true;
  private themeChanged = new Subject();

  getTheme() {
    return this.makeItDark;
  }

  changeTheme(makeItDark: boolean) {
    this.makeItDark = makeItDark;
    this.themeChanged.next(this.makeItDark);

  }

  getThemeChangedListener() {
    return this.themeChanged.asObservable();
  }

  constructor() { }

}
