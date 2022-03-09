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
    this.newRole.emit(this.roles.find(role => role.id === id));
  }

  constructor(private roleService:RoleService) { }

  ngOnInit(): void {
    this.roleService.currentRoles.subscribe(roles => this.roles = roles)
  }

}
