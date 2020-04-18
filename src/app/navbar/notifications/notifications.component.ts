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

  divOpen() {

    const notificationsDivState: string = document.getElementById('notificationsDiv').style.display;

    if (notificationsDivState === 'none' || notificationsDivState === '') {
      document.getElementById('notificationsDiv').style.display = 'block';
      const iconBoxesFill1 = document.getElementsByClassName('closedFill1');
      const iconBoxesFill2 = document.getElementsByClassName('closedFill2');
      console.log(iconBoxesFill1[0].className);
      console.log(typeof (iconBoxesFill1[0].className));


      for (let i = 0; i < iconBoxesFill1.length; i++) {

        iconBoxesFill1[i].className.baseVal = iconBoxesFill1[i].className.baseVal.replace(/(?:^|\s)closedFill1(?!\S)/g, '');
        iconBoxesFill2[i].className.baseVal = iconBoxesFill2[i].className.baseVal.replace(/(?:^|\s)closedFill2(?!\S)/g, '');
        iconBoxesFill1[i].className.baseVal += ' openedFill1';
        iconBoxesFill2[i].className.baseVal += ' openedFill2';
      }
    } else if (notificationsDivState === 'block') {
      document.getElementById('notificationsDiv').style.display = 'none';
      const iconBoxesFill1 = document.getElementsByClassName('openedFill1');
      const iconBoxesFill2 = document.getElementsByClassName('openedFill2');

      for (let i = 0; i < iconBoxesFill1.length; i++) {
        iconBoxesFill1[i].className.baseVal = iconBoxesFill1[i].className.baseVal.replace(/(?:^|\s)openedFill1(?!\S)/g, '');
        iconBoxesFill2[i].className.baseVal = iconBoxesFill2[i].className.baseVal.replace(/(?:^|\s)openedFill2(?!\S)/g, '');
        iconBoxesFill1[i].className.baseVal += ' closedFill1';
        iconBoxesFill2[i].className.baseVal += ' closedFill2';
      }
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
