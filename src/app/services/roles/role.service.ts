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
    let myRoles:Role[] = []
    this.http.get(`${environment.BASE_URL}user/roles/`).subscribe(response => {
      let roles:any = response
      for (let index = 0; index < roles.length; index++) {
        let role = new Role(roles[index].id,roles[index].name)
        myRoles.push(role)
      }
    },error=>{
      console.log(error)
    })
    this.rolesList.next(myRoles)
  }

  rolesList = new BehaviorSubject<Role[]>([]);

  currentRoles = this.rolesList.asObservable()
}
