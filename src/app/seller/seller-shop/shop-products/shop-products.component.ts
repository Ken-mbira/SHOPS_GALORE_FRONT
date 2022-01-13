import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/interfaces/product/product';
import { ProductService } from 'src/app/services/product/product.service';
import { ShopService } from '../../services/shop.service';
import { Shop } from 'src/app/interfaces/shop/shop';

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.css']
})
export class ShopProductsComponent implements OnInit {

  products:Product[];
  shop:Shop;

  constructor(private productService:ProductService,private shopService:ShopService) { }

  ngOnInit(): void {
    this.shopService.currentShop.subscribe(shop => this.shop = shop)
    this.productService.getProducts()
  }

}
