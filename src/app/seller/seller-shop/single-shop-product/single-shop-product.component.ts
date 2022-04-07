import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/interfaces/product/product';
import { Image } from 'src/app/interfaces/image/image';

@Component({
  selector: 'app-single-shop-product',
  templateUrl: './single-shop-product.component.html',
  styleUrls: ['./single-shop-product.component.css']
})
export class SingleShopProductComponent implements OnInit {

  private routeSub:Subscription;

  product:Product;

  constructor(private route:ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.currentProduct.subscribe(product => this.product = product)
    this.routeSub = this.route.params.subscribe(params => {
      this.productService.focusProduct(params['id'])
    })
  }

  ngOnDestroy(){
    this.routeSub.unsubscribe();
  }

}
