import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/authentication/auth.service';
import { Role } from '../classes/role/role';
import { RoleService } from '../services/roles/role.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  roles:Role[] = []
  constructor(private authService:AuthService,private router:Router,private snackBar:MatSnackBar,private roleService:RoleService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.roleService.currentRoles.subscribe(roles => this.roles = roles)
      let currentRole = this.roles.find(role => role.name === localStorage.getItem("user_role"))
      if(route.data['role'] !== currentRole.route){
        this.router.navigate([currentRole.route])
        return false
      }else{
        return true
      }
  }
  
}
