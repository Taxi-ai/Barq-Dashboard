import { Component, OnInit } from '@angular/core';
import { ThemeService } from "../theme.service";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  makeItDark = true;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.makeItDark = this.themeService.getTheme();
    this.themeService.getThemeChangedListener().subscribe(

      (makeItDark: boolean) => {
        this.makeItDark = makeItDark;
      }
    )
  }

}
