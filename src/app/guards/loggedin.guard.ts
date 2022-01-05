import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/authentication/auth.service';
import { Router ,ActivatedRoute,RoutesRecognized,NavigationEnd} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoggedinGuard implements CanActivate {

  isAuthenticated:boolean;

  constructor(private authService:AuthService,private router:Router,private activatedRoute:ActivatedRoute){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.authService.authStatus.subscribe(value => this.isAuthenticated = value)
    this.authService.checkAuth()
    if(this.isAuthenticated){
      this.router.navigate([localStorage.getItem("user_role")]);
      return false
    }else{
      return true
    }
  }
  
}
