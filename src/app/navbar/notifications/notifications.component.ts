import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalVariablesService } from '../../global-variables.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})

export class NotificationsComponent implements OnInit, OnDestroy {
  private makeItDark = true;
  private themeSubscription: Subscription;
  buttonColorsClass1 = { closedFill1: true, openedFill1: false };
  buttonColorsClass2 = { closedFill2: true, openedFill2: false };

  divOpen() {

    const notificationsDivState: string = document.getElementById('notificationsDiv').style.display;

    if (notificationsDivState === 'none' || notificationsDivState === '') {
      document.getElementById('notificationsDiv').style.display = 'block';
      this.buttonColorsClass1.closedFill1 = false;
      this.buttonColorsClass1.openedFill1 = true;
      this.buttonColorsClass2.closedFill2 = false;
      this.buttonColorsClass2.openedFill2 = true;
    } else if (notificationsDivState === 'block') {
      document.getElementById('notificationsDiv').style.display = 'none';
      this.buttonColorsClass1.closedFill1 = true;
      this.buttonColorsClass1.openedFill1 = false;
      this.buttonColorsClass2.closedFill2 = true;
      this.buttonColorsClass2.openedFill2 = false;

    }
  }

  constructor(public globalVariablesService: GlobalVariablesService) {

  }

  changeTheme(makeItDark) {
    console.log('look here \/ \/');
    // console.log(document.getElementsByClassName('darkThemeMain');

    // if (!makeItDark) {
    //   let x = document.getElementsByClassName("darkThemeMain");
    //   let i;
    //   for (i = 0; i < x.length; i++) {
    //     x[i].className = x[i].className.replace(/(?:^|\s)darkThemeMain(?!\S)/g, '');
    //     x[i].className += " lightThemeMain";
    //   }
    //   // document.getElementsByClassName('darkThemeMain')[0].className = 'lightThemeMain';
    //   // document.getElementsByClassName('darkThemeMain')[0].className = 'lightThemeMain';
    // } else if (makeItDark) {
    //   let x = document.getElementsByClassName("lightThemeMain");
    //   let i;
    //   for (i = 0; i < x.length; i++) {
    //     x[i].className = x[i].className.replace(/(?:^|\s)lightThemeMain(?!\S)/g, '');
    //     x[i].className += " darkThemeMain";
    //     // document.getElementsByClassName('lightThemeMain')[0].className = 'darkThemeMain';
    //   }

    //   // document.getElementById("MyElement").className =
    //   // document.getElementById("MyElement").className.replace(/(?:^|\s)MyClass(?!\S)/g, '');
    // }
  }
  ngOnInit() {
    console.log(this.makeItDark);
    this.makeItDark = this.globalVariablesService.getTheme();
    console.log(this.makeItDark);
    this.themeSubscription = this.globalVariablesService.getThemeChangedListener()
      .subscribe((makeItDark: boolean) => { this.makeItDark = makeItDark; this.changeTheme(makeItDark); });

    const viewportHeight = window.innerHeight;
    const notificationsDivHeight = viewportHeight - 52;
    document.getElementById('notificationsDiv').style.height = notificationsDivHeight.toString() + 'px';



  }
  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
