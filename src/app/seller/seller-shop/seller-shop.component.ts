import { Component, OnInit,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { Shop } from 'src/app/interfaces/shop/shop';
import { ShopService } from './../services/shop.service';

@Component({
  selector: 'app-seller-shop',
  templateUrl: './seller-shop.component.html',
  styleUrls: ['./seller-shop.component.css']
})
export class SellerShopComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;

  private routeSub:Subscription;
  shop:Shop;

  constructor(private observer:BreakpointObserver,private route:ActivatedRoute,private shopService:ShopService) { }

  ngAfterViewInit(){
    this.observer.observe(['(max-width:900px)']).subscribe((res) => {
      if (res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close()
      }else{
        this.sidenav.mode = 'side'
        this.sidenav.open();
      }
    });
  }
  ngOnInit(): void {
    this.shopService.currentShop.subscribe(shop => this.shop = shop)
    this.routeSub = this.route.params.subscribe(params => {
      this.shopService.getShopDetails(params['id'])
    })
  }

  ngOnDestroy(){
    this.routeSub.unsubscribe();
  }

}
