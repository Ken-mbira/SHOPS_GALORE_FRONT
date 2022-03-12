import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-sidenav',
  templateUrl: './shop-sidenav.component.html',
  styleUrls: ['./shop-sidenav.component.css']
})
export class ShopSidenavComponent implements OnInit {

  constructor() { }

  removeShopSpec(){
    localStorage.removeItem("shop_id");
  }

  ngOnInit(): void {
  }

}
