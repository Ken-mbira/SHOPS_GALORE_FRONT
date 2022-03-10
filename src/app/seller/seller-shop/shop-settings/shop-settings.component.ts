import { Component, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ImageUploaderComponent } from 'src/app/shared_components/image-uploader/image-uploader.component';
import { validatePhoneNumber } from 'src/app/seller/seller-main/new-shop/new-shop.component';

@Component({
  selector: 'app-shop-settings',
  templateUrl: './shop-settings.component.html',
  styleUrls: ['./shop-settings.component.css']
})
export class ShopSettingsComponent implements OnInit {


  enterImage():void{
    const dialogRef = this.imageDialog.open(ImageUploaderComponent,{
      width:'250px'
    });
    dialogRef.afterClosed().subscribe((result) => console.log(result))
  }
  constructor(public imageDialog:MatDialog,private fb:FormBuilder) { }

  profileForm = this.fb.group({
    name:['',Validators.required],
    bio:['',Validators.required],
    phone_contact:['',[Validators.required,Validators.minLength(9),Validators.maxLength(9),validatePhoneNumber()]],
    email_contact:['',[Validators.required,Validators.email]],
    pickup_location:[""]
  })
  ngOnInit(): void {
  }

}
