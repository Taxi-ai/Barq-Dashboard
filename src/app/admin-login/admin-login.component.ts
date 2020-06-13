import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  adminData = { adminId: '', adminName: '', adminEmail: '' };

  isAuthenticated = false;

  adminSub: Subscription;

  isLogging = false;

  errorMessage: string = null;

  // tslint:disable-next-line: max-line-length
  passwordPattern = '^(?:(?=.*?[A-Z])(?:(?=.*?[0-9])(?=.*?[-!@#$%^&*()_[\\]{},.<>+=])|(?=.*?[a-z])(?:(?=.*?[0-9])|(?=.*?[-!@#$%^&*()_[\\]{},.<>+=])))|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-!@#$%^&*()_[\\]{},.<>+=]))[A-Za-z0-9!@#$%^&*()_[\\]{},.<>+=-]{7,50}$';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

    this.adminSub = this.authService.admin.subscribe(
      admin => {
        console.log(admin);
        this.isAuthenticated = !!admin;

        if (admin) {
          this.adminData.adminId = admin.adminId;
          this.adminData.adminName = admin.adminName;
          this.adminData.adminEmail = admin.adminEmail;
        }


      }
    );

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
        this.errorMessage = null;
        this.isLogging = false;
        this.router.navigate(['/dashboard']);
      },
      errorMessage => {
        console.log('error');
        console.log(errorMessage);
        this.errorMessage = errorMessage;
        this.isLogging = false;
      }
    );
  }

  ngOnDestroy() {
    this.adminSub.unsubscribe();
  }
}
