import { Injectable } from '@angular/core';
import { Role } from 'src/app/classes/role/role';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { RoleService } from 'src/app/services/roles/role.service';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { User } from 'src/app/classes/user/user';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private roleService:RoleService,private http:HttpClient,private authService:AuthService) { }

  getRiderInstance(){
    let myRoles : Role[] = [];
    this.roleService.currentRoles.subscribe(roles => myRoles = roles)

    let headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('access_token')}`
    })

    this.http.get(`${environment.BASE_URL}account/instance/`,{"headers":headers}).subscribe(response => {

      this.authService.updateUserInstance(new User(
        response['email'],
        myRoles.find(value => value.name === response['role']),
        response['first_name'],
        response['last_name'],
        response['member_since'],
        response['profile']['phone_number'],
        response['profile']['bio'],
        response['profile']['location'],
        response['profile']['avatar'],
        response['profile']['gender'],
        response['profile']['receive_notifications_via_email']
      ))
    })
  }

}
