import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { BehaviorSubject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Shop } from 'src/app/interfaces/shop/shop'
import { subscribeOn } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private shops = new BehaviorSubject<Shop[]>([]);
  currentShops = this.shops.asObservable();

  private singleShop = new BehaviorSubject<Shop>(null);
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

  createShop(data:FormGroup){
    return this.http.post(`${environment.BASE_URL}shop/`,data.value)
  }
}
