import { Component, OnInit } from '@angular/core';

import { ShopService } from '../../services/shop.service'
import { AuthService } from 'src/app/services/authentication/auth.service';
import { User } from 'src/app/classes/user/user';
import { Shop } from 'src/app/interfaces/shop/shop';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:User;

  shops:Shop[] = [
    {id:0,name:"Orient Suppliers",bio:"Were here for you",created_on:new Date(),active:true,owner:1},
    {id:0,name:"Orient Suppliers",bio:"Were here for you",created_on:new Date(),active:true,owner:1},
    {id:0,name:"Orient Suppliers",bio:"Were here for you",created_on:new Date(),active:true,owner:1},
    {id:0,name:"Orient Suppliers",bio:"Were here for you",created_on:new Date(),active:true,owner:1}
  ]

  now:Date = new Date()
  greeting:string;
  constructor(private shopService:ShopService,private authService:AuthService) {
    setInterval(() =>{
      this.now = new Date();
    },1)

    setInterval(() => {
      this.getGreeting()
    },10000)

  }

  getGreeting(){
    let currentTime = new Date()
    if(currentTime.getHours() < 12){
      this.greeting = "Morning"
    }else if(currentTime.getHours() > 11 && currentTime.getHours() < 18){
      this.greeting = "Afternoon"
    }else{
      this.greeting = "Evening"
    }
  }

  ngOnInit(): void {
    this.authService.userStatus.subscribe(user => this.user = user)
    this.shopService.getOwnerInstance()
    this.getGreeting()
  }

}
