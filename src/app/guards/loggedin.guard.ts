import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/authentication/auth.service';
import { Router ,ActivatedRoute,RoutesRecognized,NavigationEnd} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoggedinGuard implements CanActivate {

  constructor(private authService:AuthService,private router:Router,private activatedRoute:ActivatedRoute){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.checkAuth()){
      return false
    }else{
      return true
    }
  }
  
}
