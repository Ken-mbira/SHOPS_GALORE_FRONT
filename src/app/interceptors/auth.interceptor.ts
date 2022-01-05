import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { AuthService } from '../services/authentication/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null)
  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(this.authService.getAccessToken()){
      request = this.addToken(request,this.authService.getAccessToken())
    }
    
    return next.handle(request);
  }

  addToken(request: HttpRequest<any>,token:string){
    return request.clone({
      setHeaders:{
        "Authorization": `Bearer ${token}`
      }
    })
  }
}
