import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Product } from 'src/app/interfaces/product/product';
import { Category } from 'src/app/interfaces/category/category';
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
          weight:item.weight,
          sku:item.sku,
          brand:this.listService.constructSingleBrandData(item.brand),
          category:this.listService.constructSingleCategoryData(item.category),
          type:this.listService.constructSingleTypeData(item.type),
          owner:this.shopService.constructSingleShopData(item.owner),
          parent:item.parent ? item.parent : null,
          children:item.children.length ? this.constructProductData(item.children) : [],
          product_images:this.listService.constructImageData(item.product_images)
        }
        return o
      }
    )
  }

  constructSingleProductData(item){
    let o = {
      id:item.id,
      name:item.name,
      added_on:item.added_on,
      description:item.description,
      price:item.price,
      discount_price:item.discount_price,
      volume:item.volume,
      weight:item.weight,
      sku:item.sku,
      brand:this.listService.constructSingleBrandData(item.brand),
      category:this.listService.constructSingleCategoryData(item.category),
      type:this.listService.constructSingleTypeData(item.type),
      owner:this.shopService.constructSingleShopData(item.owner),
      parent:item.parent ? item.parent : null,
      children:item.children.length ? this.constructProductData(item.children) : [],
      product_images:this.listService.constructImageData(item.product_images)
    }
    return o
  }

  getProducts(){
    this.http.get(`${environment.BASE_URL}shop/${localStorage.getItem("shop_id")}/product/`).subscribe(response=>{
      this.productList.next(this.constructProductData(response))
    },error=>{
      console.log(error)
    })
  }

  focusProduct(id:number){
    this.http.get(`${environment.BASE_URL}shop/product/${id}`).subscribe(response => {
      this.product.next(this.constructSingleProductData(response))
    },error=>{
      console.log(error)
    })
  }

  private product = new BehaviorSubject<Product>({
    id:0,
    name:"",
    added_on:new Date(),
    description:"",
    price:"",
    discount_price:"",
    volume:"",
    weight:"",
    sku:"",
    brand:{
      id:0,
      name:"",
      logo:""
    },
    category:{
      id:0,
      name:"",
    },
    type:{
      id:0,
      name:"",
      description:"",
    },
    owner:{
      name:"",
      id:0,
      bio:"",
      created_on:new Date(),
      logo:"",
      email_contact:"",
      phone_contact:"",
      subscription_end_date:new Date(),
      functional:false,
      owner:0,
      products:0
    },
    parent:null,
    children:[],
    product_images:[],
  })

  currentProduct = this.product.asObservable();

  constructor(private http:HttpClient,private listService:ListService,private shopService:ShopService) { }
}
