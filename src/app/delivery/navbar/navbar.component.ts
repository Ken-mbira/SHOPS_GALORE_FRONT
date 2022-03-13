import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/authentication/auth.service';
import { ShopService } from 'src/app/seller/services/shop.service';
import { User } from 'src/app/classes/user/user';
import { DeliveryService } from '../services/delivery.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated:boolean;
  user:User;

  constructor(private authService:AuthService,private shopService:ShopService,private deliveryService:DeliveryService) { }

  logoutUser(){
    this.authService.logout();
  }

  ngOnInit(): void {
    this.authService.authStatus.subscribe(user => this.isAuthenticated = user)
    this.authService.userStatus.subscribe(user => this.user = user)
    this.deliveryService.getRiderInstance()
  }

}
