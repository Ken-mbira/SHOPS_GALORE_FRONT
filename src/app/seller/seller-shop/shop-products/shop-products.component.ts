import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/interfaces/product/product';
import { ProductService } from 'src/app/services/product/product.service';
import { ShopService } from '../../services/shop.service';
import { Shop } from 'src/app/interfaces/shop/shop';
import { SearchParams } from 'src/app/interfaces/searchParams/search-params';

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.css']
})
export class ShopProductsComponent implements OnInit {

  products:Product[];
  shop:Shop;
  searchParams:SearchParams[] = [];

  filterSearch(event){
    console.log(event.value)
    let param:SearchParams = {
      key:event.value[Object.keys(event.value)[0]],
      value:Object.values(event.value)[0]
    } 
    this.searchParams.push(param);
    console.log(this.searchParams)

    this.productService.getShopProducts(this.searchParams)
  }

  constructor(private productService:ProductService,private shopService:ShopService) { }

  ngOnInit(): void {
    this.shopService.currentShop.subscribe(shop => this.shop = shop)
    this.productService.currentProducts.subscribe(products => this.products = products)
    this.productService.getShopProducts()
  }

}
