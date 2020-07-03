import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnInit {

  breadcrumbData: { url: string, text: string }[] = [];

  urlArray: string[] = [];
  profileType: string;

  constructor(private router: Router) { }

  ngOnInit() {
    // console.log(this.router.url);
    console.log(this.router.url.split('/'));
    const splitURL = this.router.url.split('/');
    splitURL.forEach((item, index) => {
      if (index > 0 && index < splitURL.length - 1) {
        if (index > 1) {
          this.breadcrumbData.push({ text: item, url: this.breadcrumbData[index - 2].url + '/' + item });
          this.urlArray.push(item);
        } else {
          this.breadcrumbData.push({ text: item, url: item });
          this.urlArray.push(item);
        }

      } else if (index === splitURL.length - 1) {
        this.profileType = this.urlArray[index - 2].slice(0, -1);
      }
    });


  }

}
