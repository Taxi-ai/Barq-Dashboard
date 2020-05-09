import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from './theme.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  title = 'taxi-dashboard';
  makeItDark = true;
  private themeSubscription: Subscription;

  constructor(public themeService: ThemeService) { }


  ngOnInit() {
    this.makeItDark = this.themeService.getTheme();
    this.themeSubscription = this.themeService.getThemeChangedListener()
      .subscribe((makeItDark: boolean) => {
        this.makeItDark = makeItDark;
      });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
