import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (req.url === 'https://barq-api.herokuapp.com/api/adminAuth') {
      console.log('admin-auth request');
      return next.handle(req);
    }

    return this.authService.admin.pipe(
      take(1),
      exhaustMap(admin => {
        if (!admin) {
          // TODO check if request for auth deny it
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          headers: new HttpHeaders().append('x-auth-token', admin.jwtToken)
        });
        return next.handle(modifiedReq);
      }));

  }

}
