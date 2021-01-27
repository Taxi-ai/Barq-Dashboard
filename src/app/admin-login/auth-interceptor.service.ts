import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    'https://barq-api.azurewebsites.net/api/adminAuth'
    if (req.url === 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAYfrf1lYsdwVTBdSxWyiWD3jnQCku8k3E') {
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
          headers: new HttpHeaders().append('auth', admin.jwtToken),
        });
        return next.handle(modifiedReq);
      }));

  }

}
