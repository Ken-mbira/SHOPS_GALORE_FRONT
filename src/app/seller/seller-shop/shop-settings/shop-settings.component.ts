import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { TreeData } from 'mat-tree-select-input';
import { MatSnackBar } from '@angular/material/snack-bar';

import { LocationService } from 'src/app/services/location/location.service';
import { Shop } from 'src/app/interfaces/shop/shop';
import { ShopService } from '../../services/shop.service';

import { ImageUploaderComponent } from 'src/app/shared_components/image-uploader/image-uploader.component';
import { validatePhoneNumber } from 'src/app/seller/seller-main/new-shop/new-shop.component';

@Component({
  selector: 'app-shop-settings',
  templateUrl: './shop-settings.component.html',
  styleUrls: ['./shop-settings.component.css']
})
export class ShopSettingsComponent implements OnInit {

  url:any =  "../../../../assets/andrew-pons-cLHPacdtpSY-unsplash (1).jpg";

  pickup_location:any;
  onSelectionChanged(){
    this.shop.pickup_location = this.pickup_location.value;
  }


  enterImage():void{
    const dialogRef = this.imageDialog.open(ImageUploaderComponent,{
      width:'250px'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        let images = result.target.files;
        let form = new FormData();
        form.append("logo",images[0],images.name);
        this.shopService.updateShopLogo(form,this.shop.id).subscribe((response:any) => {
          this.shop.logo = response['logo'];
        },error=> {
          console.log(error)
          this.snackBar.open("There was a problem updating the shop logo!","",{duration:3000})
        })
      }

    })
  }
  constructor(public imageDialog:MatDialog,private fb:FormBuilder,private locationService:LocationService,private shopService:ShopService,private snackBar:MatSnackBar) { }

  shop:Shop = {
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
  };

  whenTrue:boolean = true;

  submitForm(){
    let form = new FormData();
    form.append("name",this.shop.name),
    form.append("bio",this.shop.bio),
    form.append("phone_contact",this.shop.phone_contact),
    form.append("email_contact",this.shop.email_contact),
    form.append("active",JSON.stringify(this.shop.active)),
    form.append("pickup_location",JSON.stringify(this.shop.pickup_location))


    this.shopService.updateShop(form,this.shop.id).subscribe((data:Shop) => {
      this.shop = data;
      this.snackBar.open("Updated Successfully","Thank you",{duration:3000})
    },error=>{
      console.log(error);
      this.snackBar.open(`${Object.values(error['error'])}`,"Thank you",{duration:3000})
    })
  }
  ngOnInit(): void {
    this.locationService.currentLocations.subscribe(value => this.locations= value);
    this.locationService.getLocations();
    this.shopService.currentShop.subscribe(value => this.shop = value);
    this.shopService.getShopDetails(parseInt(localStorage.getItem("shop_id")))
  }

  signal(event){
    console.log(event)
  }

  locations:TreeData[] = [];

}
