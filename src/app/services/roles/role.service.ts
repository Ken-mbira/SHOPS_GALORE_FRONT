import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Role } from 'src/app/classes/role/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) { }


  getRoles(){
    let myRoles:Role[] = [
      {id:1,name:"STAFF"},
      {id:2,name:"DELIVERY"},
      {id:3,name:"CUSTOMER"},
      {id:4,name:"STORE_OWNER"}
    ]
    this.rolesList.next(myRoles)
  }

  rolesList = new BehaviorSubject<Role[]>([]);

  currentRoles = this.rolesList.asObservable()
}
