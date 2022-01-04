import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/authentication/auth.service';
import { User } from '../classes/user/user';
import { Role } from '../classes/role/role';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  user = new User("",new Role(0,""),"","",new Date(),"","","","","",false)
  constructor(private authService:AuthService,private router:Router,private snackBar:MatSnackBar){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let role = localStorage.getItem("user_role");
    if(role !== route.data['role']){
      this.router.navigate([role])
      this.snackBar.open("You are not authorised to visit this page!","Sorry",{duration:3000})
      return false;
    }else{
    return true;
    }
  }
  
}
