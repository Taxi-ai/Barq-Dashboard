import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { Admin } from './admin.model';
import { Router } from '@angular/router';

// interface of all logging responses
interface AuthResponseData {
  jwt: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  admin = new BehaviorSubject<Admin>(null);

  constructor(private http: HttpClient, private router: Router) { }


  signingIn(email: string, password: string) {
    console.log(`email is ${email} - password is ${password}`);

    const requestOptions = {
      // TODO add this headers: new HttpHeaders().append('x-auth-token', 'Bearer <yourTokenHere>') with all requests but the login request
      responseType: 'text' as 'text'
    };

    // use the defined interface AuthResponseData as response
    return this.http.post('https://barq-api.herokuapp.com/api/adminAuth',
      { password, email },
      requestOptions)
      .pipe(catchError(this.handlingError), tap(adminData => {
        this.handlingAuthentication(adminData);
      }));
  }


  handlingAuthentication(adminData) {
    console.log('handlingAuthentication');
    console.log(adminData);


    /* TODO here we make new admin using admin data, change dataRes when yousef send data as an object
       and define adminData as AuthResponseData */
    const admin = new Admin(adminData);
    console.log(admin);
    this.storingData(adminData);

    this.admin.next(admin);
  }


  handlingError(errorRes: HttpErrorResponse) {
    let errorMessage = 'Unknown error happened. Check your network and try again.';
    console.log(errorRes);

    if (!errorRes.error) {
      return throwError(errorMessage);
    }

    switch (errorRes.error) {
      case 'Invalid email or password':
        errorMessage = 'Incorrect email or password. Please double check and try again.';
        break;
      case 'Access Denied. No Token Provided':
        errorMessage = 'Access Denied! Go back to login page and start from the beginning!';
        break;
    }
    return throwError(errorMessage);
  }


  autoLogin() {
    const jwtToken = this.gettingData();
    if (!jwtToken) {
      return;
    }
    const loadedAdmin = new Admin(jwtToken);

    if (loadedAdmin.jwtToken) {
      this.admin.next(loadedAdmin);
    }
  }

  signingOut() {
    this.admin.next(null);
    this.removingData();
    this.router.navigate(['/barq-admin']);
  }


  storingData(jwt: string) {
    localStorage.setItem('jwt', jwt);
  }

  gettingData() {
    const jwtToken = localStorage.getItem('jwt');
    return jwtToken;
  }

  removingData() {
    localStorage.removeItem('jwt');
  }

}
