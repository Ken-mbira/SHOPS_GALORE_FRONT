import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from '../services/authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HasroleGuard implements CanActivate {
  isAuthenticated:boolean;
  constructor(private router:Router,private authService:AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.authService.checkAuth()
      this.authService.authStatus.subscribe(value => this.isAuthenticated = value)

    if(localStorage.getItem("user_role") && localStorage.getItem("user_role") === "customer"){
      console.log("works")
      return true;
    }else{
      if(this.isAuthenticated){
        this.router.navigate([localStorage.getItem("user_role")])
        return false;
      }
      return true
    }
  }
  
}
