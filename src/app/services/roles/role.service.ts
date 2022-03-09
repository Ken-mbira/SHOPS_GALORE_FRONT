import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { Role } from 'src/app/classes/role/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) { }

  rolesList = new BehaviorSubject<Role[]>([
    {id:0,name:"STAFF",route:"staff"},
    {id:1,name:"DELIVERY",route:"delivery"},
    {id:2,name:"CUSTOMER",route:"customer"},
    {id:3,name:"STORE_OWNER",route:"store_owner"}
  ]);

  currentRoles = this.rolesList.asObservable()
}
