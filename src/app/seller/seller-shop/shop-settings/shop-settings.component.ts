import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TreeData } from 'mat-tree-select-input';

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


  enterImage():void{
    const dialogRef = this.imageDialog.open(ImageUploaderComponent,{
      width:'250px'
    });
    dialogRef.afterClosed().subscribe((result) => {
      let images = result.target.files;

      const reader = new FileReader();
      reader.readAsDataURL(images[0]);
      reader.onload = (_event) => {
        this.url = reader.result;
      };

    })
  }
  constructor(public imageDialog:MatDialog,private fb:FormBuilder,private locationService:LocationService,private shopService:ShopService) { }

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

  // submitForm(){
  //   // this.profileForm.controls.phone_contact.clearValidators()
  //   // this.profileForm.patchValue({phone_contact:`+254${this.profileForm.value.phone_contact}`})
  //   // this.profileForm.patchValue({pickup_location:this.profileForm.value.pickup_location.value})
  //   // console.log(this.profileForm.value)
  // }
  ngOnInit(): void {
    this.locationService.currentLocations.subscribe(value => this.locations= value);
    this.locationService.getLocations();
    this.shopService.currentShop.subscribe(value => this.shop = value);
    this.shopService.getShopDetails(parseInt(localStorage.getItem("shop_id")))
    console.log(this.shop)
  }

  signal(event){
    console.log(event)
  }

  locations:TreeData[] = [];

}
