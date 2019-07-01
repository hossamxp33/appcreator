import { catchError } from 'rxjs/operators';
import { AuthenticationService } from './../authentication/authentication.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
// import { AuthService } from './auth/auth.service';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService, private router : Router) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        this.authService.logOut();
        this.router.navigate(['/'])
      }
      const error = err.error.message || err.stateText;
      return throwError(error);

    })

    );

  }
}
