import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (req.url === 'https://barq-api.azurewebsites.net/api/adminAuth') {
      console.log('admin-auth request');
      return next.handle(req);
    }

    return this.authService.admin.pipe(
      take(1),
      exhaustMap(admin => {
        if (!admin) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          headers: new HttpHeaders().append('x-auth-token', admin.jwtToken)
        });
        return next.handle(modifiedReq);
      }));

  }

}


// ----> To solve CORS problem <----\\
// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url = "https://example.com"; // site that doesn’t send Access-Control-*
// fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
// .then(response => response.text())
// .then(contents => console.log(contents))
// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))