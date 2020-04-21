import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalVariablesService } from '../../global-variables.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})

export class NotificationsComponent implements OnInit, OnDestroy {
  makeItDark = true;
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


  ngOnInit() {
    console.log(this.makeItDark);
    this.makeItDark = this.globalVariablesService.getTheme();
    console.log(this.makeItDark);
    this.themeSubscription = this.globalVariablesService.getThemeChangedListener()
      .subscribe((makeItDark: boolean) => { this.makeItDark = makeItDark; });

    const viewportHeight = window.innerHeight;
    const notificationsDivHeight = viewportHeight - 52;
    document.getElementById('notificationsDiv').style.height = notificationsDivHeight.toString() + 'px';



  }
  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
