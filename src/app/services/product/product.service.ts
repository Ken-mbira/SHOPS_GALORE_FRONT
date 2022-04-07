import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient,HttpParams } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

import { Product } from 'src/app/interfaces/product/product';
import { Category } from 'src/app/interfaces/category/category';
import { environment } from 'src/environments/environment';
import { ListService } from '../lists/list.service';
import { ShopService } from 'src/app/seller/services/shop.service';
import { Image } from 'src/app/interfaces/image/image';
import { SearchParams } from 'src/app/interfaces/searchParams/search-params';


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
          product_images:this.listService.constructImageData(item.product_images),
          featured_image:item.featured_image ? this.listService.constructSingleImageData(item.featured_image): null,
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
      product_images:this.listService.constructImageData(item.product_images),
      featured_image:item.featured_image ? this.listService.constructSingleImageData(item.featured_image): null,
    }
    return o
  }

  getShopProducts(parameters?:SearchParams[]){
    let params = new HttpParams().set("owner__id",localStorage.getItem("shop_id"));
    if(parameters && parameters.length > 0){
      parameters.forEach((param) => {
        params = params.set(param.key,param.value)
      })
    }
    this.http.get(`${environment.BASE_URL}store/product/`,{params}).subscribe((response:Product[])=>{
      this.productList.next(response)
    },error=>{
      console.log(error)
    })
  }

  focusProduct(sku:string){
    this.http.get(`${environment.BASE_URL}store/product/${sku}`).subscribe((response:Product) => {
      this.product.next(response)
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
    hasVariations:false,
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
      active:false,
      owner:0,
      product_count:0
    },
    parent:null,
    children:[],
    product_images:[],
    featured_image:null,
  })

  currentProduct = this.product.asObservable();

  createImage(product_id:number,image:FormData){
    return this.http.post(`${environment.BASE_URL}shop/product/${product_id}`,image)
  }

  changeDefaultImage(product_id:number,image:FormGroup){
    return this.http.post(`${environment.BASE_URL}shop/product/image/${product_id}/`,image.value)
  }

  deleteImage(image_id){
    return this.http.delete(`${environment.BASE_URL}shop/product/image/delete/${image_id}`)
  }

  constructor(private http:HttpClient,private listService:ListService,private shopService:ShopService) { }
}
