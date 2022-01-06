import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router,private snackBar:MatSnackBar){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(route.data['role'] !== localStorage.getItem("user_role")){
        this.router.navigate([localStorage.getItem("user_role")])
        return false
      }else{
        return true
      }
  }
  
}
