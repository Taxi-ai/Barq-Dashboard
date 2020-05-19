import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

// interface of all logging responses
interface AuthResponseData {
  jwt: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


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
      .pipe(catchError(
        errorRes => {
          let errorMessage = 'Unknown error happened. Check your network and try again.';

          if (!errorRes.error) {
            return throwError(errorMessage);
          }

          switch (errorRes.error) {
            case 'Invalid email or password':
              errorMessage = 'Incorrect email or password. Please double check and try again.';
              break;
            default:
              errorMessage = 'Unknown error happened. Check your network and try again.';
          }
          return throwError(errorMessage);
        }));
  }

  storingData(jwt: string) {
    localStorage.setItem('jwt', jwt);
  }

  gettingData(jwt: string) {
    const jwtToken = localStorage.getItem('jwt');
    return jwtToken;
  }

}
