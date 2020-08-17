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



        if (splitURL[index - 1].toLowerCase() === 'new') { // to handle issue/new/user_id
          const pluralWordWithoutS = splitURL[index - 2].slice(0, -1);
          // splitURL.slice(0, -1);
          this.breadcrumbData.pop();
          this.profileType = 'New ' + pluralWordWithoutS;

        } else {

          let pluralWordWithoutS = this.urlArray[index - 2].slice(0, -1);

          switch (pluralWordWithoutS) { // to handle faq word

            case 'faq':
              pluralWordWithoutS = 'question';
              break;

          }

          switch (splitURL[index].toLowerCase()) { // to handle new/edit/profile

            case 'new':
              this.profileType = 'New ' + pluralWordWithoutS;
              break;

            default:
              this.profileType = pluralWordWithoutS + ' Profile';
              break;

          }

        }






      }
    });


  }

}
