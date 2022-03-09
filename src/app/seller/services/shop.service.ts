import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { BehaviorSubject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Shop } from 'src/app/interfaces/shop/shop';
import { Role } from 'src/app/classes/role/role';
import { RoleService } from 'src/app/services/roles/role.service';
import { User } from 'src/app/classes/user/user';
import { AuthService } from 'src/app/services/authentication/auth.service';

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

  constructor(private roleService:RoleService,private authService:AuthService,private http:HttpClient,private snackBar:MatSnackBar,private router:Router) { }

  getOwnerInstance(){
    let myRoles : Role[] = [];
    this.roleService.currentRoles.subscribe(roles => myRoles = roles)

    let headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('access_token')}`
    })

    this.http.get(`${environment.BASE_URL}account/instance/`,{"headers":headers}).subscribe(response => {

      this.authService.updateUserInstance(new User(
        response['email'],
        myRoles.find(value => value.name === response['role']),
        response['first_name'],
        response['last_name'],
        response['member_since'],
        response['profile']['phone_number'],
        response['profile']['bio'],
        response['profile']['location'],
        response['profile']['avatar'],
        response['profile']['gender'],
        response['profile']['receive_notifications_via_email']
      ))
    })
  }
    
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

  constructSingleShopData(response){
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
    return shop
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
      localStorage.setItem("shop_id",shop.id.toString())
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
    return this.http.post(`${environment.BASE_URL}store/shop/`,data.value)
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
