import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Role } from 'src/app/classes/role/role';
import { RoleService } from 'src/app/services/roles/role.service';

@Component({
  selector: 'app-role-choice',
  templateUrl: './role-choice.component.html',
  styleUrls: ['./role-choice.component.css']
})
export class RoleChoiceComponent implements OnInit {

  roles:Role[] = []

  @Output() newRole = new EventEmitter<Role>();

  chooseRole(id:number){
    let role:Role;
    for(let i = 0; i < this.roles.length; i++){
      if(this.roles[i].id === id){
        role = this.roles[i]
      }
    }
    this.newRole.emit(role);
  }

  constructor(private roleService:RoleService) { }

  ngOnInit(): void {
    this.roleService.getRoles()
    this.roleService.currentRoles.subscribe(roles => this.roles = roles)
  }

}
