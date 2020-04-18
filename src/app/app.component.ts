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
  private makeItDark: boolean = true;
  private themeSubscription: Subscription;

  constructor(public globalVariablesService: GlobalVariablesService) { }

  changeTheme(makeItDark) {
    console.log('look here \/ \/');
    console.log(document.getElementsByClassName('darkThemeMain'));

    if (!makeItDark) {
      let x = document.getElementsByClassName("darkThemeMain");
      let i;
      for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(/(?:^|\s)darkThemeMain(?!\S)/g, 'lightThemeMain');
        // x[i].className += " lightThemeMain";
      }
      // document.getElementsByClassName('darkThemeMain')[0].className = 'lightThemeMain';
      // document.getElementsByClassName('darkThemeMain')[0].className = 'lightThemeMain';
    } else if (makeItDark) {
      let x = document.getElementsByClassName("lightThemeMain");
      let i;
      for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(/(?:^|\s)lightThemeMain(?!\S)/g, 'darkThemeMain');
        // x[i].className += " darkThemeMain";
        // document.getElementsByClassName('lightThemeMain')[0].className = 'darkThemeMain';
      }

      // document.getElementById("MyElement").className =
      // document.getElementById("MyElement").className.replace(/(?:^|\s)MyClass(?!\S)/g, '');
    }
  }

  ngOnInit() {
    console.log(this.makeItDark);
    this.makeItDark = this.globalVariablesService.getTheme();
    console.log(this.makeItDark);
    this.themeSubscription = this.globalVariablesService.getThemeChangedListener()
      .subscribe((makeItDark: boolean) => {
        this.makeItDark = makeItDark;
        this.changeTheme(makeItDark);
        // console.log(this.makeItDark);

      });

  }
  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
