import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { FormGroup } from '@angular/forms';

import { ShopService } from '../../services/shop.service';
import { Shop } from 'src/app/interfaces/shop/shop'

@Component({
  selector: 'app-new-shop-product',
  templateUrl: './new-shop-product.component.html',
  styleUrls: ['./new-shop-product.component.css']
})
export class NewShopProductComponent implements OnInit {

  shop:Shop;

  stagedProduct:FormGroup;

  checkVariation(boolean:boolean){
    this.hasVariations = boolean
  }
  hasVariations = false;

  productSubmission(event){
    this.stagedProduct=event;
  }

  submitProduct(){
    this.shopService.createProduct(this.stagedProduct,this.shop.id)
  }


  isLinear = false;

  stepperOrientation:Observable<StepperOrientation>

  constructor(breakpointbserver:BreakpointObserver,private shopService:ShopService) {
    this.stepperOrientation = breakpointbserver
    .observe('(min-width:600px)')
    .pipe(map(({matches}) => (matches ? 'horizontal' :
    'vertical')));
  }


  ngOnInit() {
    this.shopService.currentShop.subscribe(shop => this.shop = shop)
  }
}
