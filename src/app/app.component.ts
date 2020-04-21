import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalVariablesService } from './global-variables.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'taxi-dashboard';
  makeItDark = true;
  private themeSubscription: Subscription;

  constructor(public globalVariablesService: GlobalVariablesService) { }


  ngOnInit() {
    console.log(this.makeItDark);
    this.makeItDark = this.globalVariablesService.getTheme();
    console.log(this.makeItDark);
    this.themeSubscription = this.globalVariablesService.getThemeChangedListener()
      .subscribe((makeItDark: boolean) => {
        this.makeItDark = makeItDark;
        // console.log(this.makeItDark);

      });

  }
  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
