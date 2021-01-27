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
    // https://barq-api.azurewebsites.net/api/adminAuth
    return this.http.post<{ localId, expiresIn, refreshToken, email, idToken, displayName }>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAYfrf1lYsdwVTBdSxWyiWD3jnQCku8k3E',
      { password, email })
      .pipe(catchError(this.handlingError), tap(adminData => {
        this.handlingAuthentication(adminData);
      }));
  }


  handlingAuthentication(adminData: { localId, expiresIn, refreshToken, email, idToken, displayName }) {
    console.log('handlingAuthentication');
    console.log(adminData);

    // const adminID = adminData.idToken;
    // const adminName = adminData.displayName
    // const adminEmail = adminData.email
    const adminToken = adminData.idToken

    const { adminID, adminName, adminEmail } = this.decodingAdminToken(adminToken);

    const admin = new Admin(adminToken, adminID, adminName, adminEmail);
    console.log(admin);
    this.storingData(adminToken);

    this.admin.next(admin);
  }


  handlingError(errorRes: HttpErrorResponse) {
    let errorMessage = 'Unknown error happened. Check your network and try again.';
    console.log(errorRes.error);

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

    console.log(loadedAdmin);

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
    return { adminID: 'MiHDVN6uRQVPq88aVotrpidpQyw2', adminName: '', adminEmail: decodedAdminData.email };
  }

  storingAdminData(decodedAdminData: {}) {
    sessionStorage.setItem('decodedAdminData', JSON.stringify(decodedAdminData));
  }

}
