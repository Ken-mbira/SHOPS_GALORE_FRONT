import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/authentication/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {

  isAuthenticated:boolean;

  constructor(private authService:AuthService,private route:Router){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.authService.checkAuth()
      this.authService.authStatus.subscribe(value => this.isAuthenticated = value)
      if(!this.isAuthenticated){
       this.route.navigate(['auth/login']) 
       this.authService.redirectUrl = state.url
       return false
      }else{
        return true
      }
  }
  
}
