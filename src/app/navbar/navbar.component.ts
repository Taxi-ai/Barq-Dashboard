import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit, OnDestroy {
  makeItDark = true;
  private themeSubscription: Subscription;

  constructor(public themeService: ThemeService) { }

  ngOnInit() {
    console.log(this.makeItDark);
    this.makeItDark = this.themeService.getTheme();
    console.log(this.makeItDark);
    this.themeSubscription = this.themeService.getThemeChangedListener()
      .subscribe((makeItDark: boolean) => {
        this.makeItDark = makeItDark;
        // console.log(this.makeItDark);

      });
  }
  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
