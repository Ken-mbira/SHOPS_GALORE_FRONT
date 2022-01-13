import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Product } from 'src/app/interfaces/product/product';
import { environment } from 'src/environments/environment';
import { ListService } from '../lists/list.service';
import { ShopService } from 'src/app/seller/services/shop.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productList = new BehaviorSubject<Product[]>([]);
  currentProducts = this.productList.asObservable();

  constructProductData(data){
    return data.map(
      (item)=>{
        let o = {
          id:item.id,
          name:item.name,
          added_on:item.added_on,
          description:item.description,
          price:item.price,
          discount_price:item.discount_price,
          volume:item.volume,
          weight:item.volume,
          sku:item.sku,
          brand:this.listService.constructSingleBrandData(item.brand),
          category:item.category,
          type:this.listService.constructSingleTypeData(item.type),
          owner:this.shopService.constructSingleShopData(item.owner),
          parent:item.parent ? item.parent : null,
          children:item.children.length ? this.constructProductData(item.children) : [],
          product_images:item.product_images
        }
        return o
      }
    )
  }

  getProducts(){
    this.http.get(`${environment.BASE_URL}shop/${localStorage.getItem("shop_id")}/product/`).subscribe(response=>{
      this.productList.next(this.constructProductData(response))
    },error=>{
      console.log(error)
    })
  }

  constructor(private http:HttpClient,private listService:ListService,private shopService:ShopService) { }
}
