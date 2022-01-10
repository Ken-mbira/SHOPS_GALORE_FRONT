import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable,BehaviorSubject, throwError,of} from 'rxjs';
import { Router } from '@angular/router';


import { AuthService } from '../services/authentication/auth.service';
import { catchError, finalize,filter,take,switchMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private AUTH_HEADER = "Authorization";
  private token = localStorage.getItem("access_token");
  isRefreshing = false;
  refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null)

  constructor(private authService:AuthService,private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(this.authService.getAccessToken()){
      request = this.addToken(request)
    }

    request = this.addToken(request);

    return next.handle(request).pipe(catchError((error:HttpErrorResponse) => {
      if (error && error.status === 401){
        if (this.isRefreshing) {
          return this.refreshTokenSubject.pipe(
            filter(result => result !== null),
            take(1),
            switchMap(() => next.handle(this.addToken(request)))
          );
        }else{
          this.isRefreshing = true;

          this.refreshTokenSubject.next(null);

          return this.refreshAccessToken().pipe(
            catchError((error:HttpErrorResponse) =>{
              this.authService.logout()
              return throwError(error)
            }),
            switchMap((success:boolean) => {
              this.authService.setToken(success['access'],"access_token")
              this.refreshTokenSubject.next(success);
              return next.handle(this.addToken(request))
            }),

            finalize(() => (this.isRefreshing = false))
          )

        }
      }else if(error && error.status === 403){
        this.authService.logout()
        return throwError(error)
      }else{
        return throwError(error)
      }
      
    })) as Observable<HttpEvent<any>>;
  }

  private refreshAccessToken(): Observable<any> {
    return this.authService.refreshToken()
  }

  private addToken(request: HttpRequest<any>): HttpRequest<any> {
    if (!this.authService.getAccessToken()) {
      return request;
    }

    return request.clone({
      headers: request.headers.set(this.AUTH_HEADER, "Bearer " + this.authService.getAccessToken())
    });
  }
}
