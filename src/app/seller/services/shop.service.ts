import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { BehaviorSubject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Shop } from 'src/app/interfaces/shop/shop'

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private shops = new BehaviorSubject<Shop[]>([]);
  currentShops = this.shops.asObservable();

  private singleShop = new BehaviorSubject<Shop>(
    {
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
    }
  );
  currentShop = this.singleShop.asObservable();

  constructor(private http:HttpClient,private snackBar:MatSnackBar,private router:Router) { }

  getShopList(){
    this.http.get(`${environment.BASE_URL}shop/`).subscribe((response:any) => {
      let shops:Shop[] = []
      for(let i = 0;i<response.length; i++){
        let shop:Shop = {
          name:response[i]['name'],
          id:response[i]['id'],
          bio:response[i]['bio'],
          created_on:response[i]['created_on'],
          logo:response[i]['logo'],
          email_contact:response[i]['email_contact'],
          phone_contact:response[i]['phone_contact'],
          subscription_end_date:response[i]['subscription_end_date'],
          functional:response[i]['functional'],
          owner:response[i]['owner'],
          products:response[i]['products']
        }
        shops.push(shop)
      }
      this.shops.next(shops)
    },error=>{
      console.log(error)
    })
  }

  getShopDetails(id:number){
    this.http.get(`${environment.BASE_URL}shop/${id}/`).subscribe(response => {
      let shop:Shop = {
        name:response['name'],
        id:response['id'],
        bio:response['bio'],
        created_on:response['created_on'],
        logo:response['logo'],
        email_contact:response['email_contact'],
        phone_contact:response['phone_contact'],
        subscription_end_date:response['subscription_end_date'],
        functional:response['functional'],
        owner:response['owner'],
        products:response['products']
      }
      this.singleShop.next(shop)
    },error=>{
      console.log(error)
    })
  }

  addShop(response):void{
    let currentShops = this.shops.value
    let shop:Shop = {
      name:response['name'],
      id:response['id'],
      bio:response['bio'],
      created_on:response['created_on'],
      logo:response['logo'],
      email_contact:response['email_contact'],
      phone_contact:response['phone_contact'],
      subscription_end_date:response['subscription_end_date'],
      functional:response['functional'],
      owner:response['owner'],
      products:response['products']
    }
    let updatedShops = [...currentShops,shop]
    this.shops.next(updatedShops)
  }

  createShop(data:FormGroup){
    return this.http.post(`${environment.BASE_URL}shop/`,data.value)
  }

  createProductWithVariations(data:FormGroup,shop_id:number){
    this.http.post(`${environment.BASE_URL}shop/new_parent_product/${shop_id}`,data.value).subscribe(response=>{
      this.snackBar.open("Your product was created successfully!","Congratulations",{duration:3000})
      this.router.navigate([`store_owner/shop/${shop_id}/products/${response['id']}`])
    },error => {
      this.snackBar.open("Sorry, there was a problem creating your product!","Sorry",{duration:3000})
      console.log(error)
    })
  }

  createProductWithoutVariations(data:FormGroup,shop_id:number){
    this.http.post(`${environment.BASE_URL}shop/new_single_product/${shop_id}`,data.value).subscribe(response=>{
      this.snackBar.open("Your product was created successfully!","Congratulations",{duration:3000})
      this.router.navigate([`store_owner/shop/${shop_id}/products/${response['id']}`])
    },error => {
      this.snackBar.open("Sorry, there was a problem creating your product!","Sorry",{duration:3000})
      console.log(error)
    })
  }
}
