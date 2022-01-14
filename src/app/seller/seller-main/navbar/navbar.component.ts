import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/authentication/auth.service';
import { User } from 'src/app/classes/user/user'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuthenticated:boolean;
  user:User;

  logout(){
    this.authService.logout()
  }

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.checkAuth()
    this.authService.authStatus.subscribe(value => this.isAuthenticated = value)
    this.authService.userStatus.subscribe(user => this.user = user)
    this.authService.getInstance()
  }

}
