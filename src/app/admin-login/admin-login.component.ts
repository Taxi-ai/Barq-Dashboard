import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class LoginComponent implements OnInit {

  isLogging = false;

  errorMessage: string = null;

  constructor(private authService: AuthService) { }

  ngOnInit() {

    console.log('mahmoudyoussef0097@gmail.com');

    console.log('Mm@1234567');

  }

  login(loginForm: NgForm) {

    if (loginForm.invalid) {
      console.log('form is invalid');
      return;
    }

    this.isLogging = true;

    const email = loginForm.value.email;
    const password = loginForm.value.password;

    this.authService.signingIn(email, password).subscribe(
      resData => {
        console.log(resData);
        this.authService.storingData(resData);
        this.isLogging = false;
      },
      errorMessage => {
        console.log('error');
        this.errorMessage = errorMessage;
        this.isLogging = false;
      }
    );
  }
}
