import { Component, OnInit } from '@angular/core';

import { ShopService } from '../../services/shop.service'
import { AuthService } from 'src/app/services/authentication/auth.service';
import { User } from 'src/app/classes/user/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:User;

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
      this.greeting = "morning"
    }else if(currentTime.getHours() > 11 && currentTime.getHours() < 18){
      this.greeting = "afternoon"
    }else{
      this.greeting = "evening"
    }
  }

  ngOnInit(): void {
    this.authService.userStatus.subscribe(user => this.user = user)
    this.shopService.getOwnerInstance()
    this.getGreeting()
  }

}
