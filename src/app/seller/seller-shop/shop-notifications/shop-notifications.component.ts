import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-notifications',
  templateUrl: './shop-notifications.component.html',
  styleUrls: ['./shop-notifications.component.css']
})
export class ShopNotificationsComponent implements OnInit {

  panelOpenState = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
