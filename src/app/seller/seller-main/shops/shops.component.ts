import { Component, OnInit } from '@angular/core';

import { Shop } from 'src/app/interfaces/shop/shop';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {

  shops:Shop[] = []

  constructor(private shopService:ShopService) { }

  ngOnInit(): void {
    this.shopService.getShopList()
    this.shopService.currentShops.subscribe(value => {
      this.shops = value
    })
    console.log(this.shops)
  }

}
