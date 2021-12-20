import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  now:Date = new Date()
  greeting:string;
  constructor() {
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
    }else if(currentTime.getHours() > 12 && currentTime.getHours() < 18){
      this.greeting = "afternoon"
    }else{
      this.greeting = "evening"
    }
  }

  ngOnInit(): void {
    this.getGreeting()
  }

}
