import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { Admin } from './admin.model';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';


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
      responseType: 'text' as 'text'
    };

    // use the defined interface AuthResponseData as response
    return this.http.post('https://barq-api.azurewebsites.net/api/adminAuth',
      { password, email },
      requestOptions)
      .pipe(catchError(this.handlingError), tap(adminData => {
        this.handlingAuthentication(adminData);
      }));
  }


  handlingAuthentication(adminToken: string) {
    console.log('handlingAuthentication');
    console.log(adminToken);

    const { adminID, adminName, adminEmail } = this.decodingAdminToken(adminToken);



    /* TODO here we make new admin using admin data, change dataRes when yousef send data as an object
       and define adminToken as AuthResponseData */
    const admin = new Admin(adminToken, adminID, adminName, adminEmail);
    console.log(admin);
    this.storingData(adminToken);

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
    const jwtToken = this.gettingStoredData('jwt');

    if (!jwtToken) {
      return;
    }

    const { adminID, adminName, adminEmail } = this.decodingAdminToken(jwtToken);

    const loadedAdmin = new Admin(jwtToken, adminID, adminName, adminEmail);

    if (loadedAdmin.jwtToken) {
      this.admin.next(loadedAdmin);
    }
  }

  signingOut() {
    this.admin.next(null);
    this.removingData('jwt');
    this.router.navigate(['/barq-admin']);
  }


  storingData(jwt: string) {
    localStorage.setItem('jwt', jwt);
  }

  gettingStoredData(jwt: string) {
    const jwtToken = localStorage.getItem(jwt);
    return jwtToken;
  }

  removingData(jwt: string) {
    localStorage.removeItem(jwt);
  }

  decodingAdminToken(adminToken: string) {
    const decodedAdminData = jwt_decode(adminToken);
    this.storingAdminData(decodedAdminData);
    return { adminID: decodedAdminData._id, adminName: decodedAdminData.username, adminEmail: decodedAdminData.email };
  }

  storingAdminData(decodedAdminData: {}) {
    sessionStorage.setItem('decodedAdminData', JSON.stringify(decodedAdminData));
  }

}
