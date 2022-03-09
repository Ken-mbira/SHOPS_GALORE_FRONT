import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/authentication/auth.service';
import { Router ,ActivatedRoute,RoutesRecognized,NavigationEnd} from '@angular/router';

import { RoleService } from '../services/roles/role.service';
import { Role } from '../classes/role/role';

@Injectable({
  providedIn: 'root'
})
export class LoggedinGuard implements CanActivate {

  isAuthenticated:boolean;
  currentRoles: Role[] = [];

  constructor(private authService:AuthService,private router:Router,private activatedRoute:ActivatedRoute,private roleService:RoleService){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.authService.authStatus.subscribe(value => this.isAuthenticated = value)
    this.roleService.currentRoles.subscribe(roles => this.currentRoles = roles)
    this.authService.checkAuth()
    if(this.isAuthenticated){
      this.router.navigate([this.currentRoles.find(role => role.name === localStorage.getItem("user_role")).route]);
      return false
    }else{
      return true
    }
  }
  
}
