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
    active:false
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

  updateProduct(productForm:FormGroup,sku:string){
    return this.http.put(`${environment.BASE_URL}store/product/${sku}`,productForm.value)
  }

  constructor(private http:HttpClient,private listService:ListService,private shopService:ShopService) { }
}
