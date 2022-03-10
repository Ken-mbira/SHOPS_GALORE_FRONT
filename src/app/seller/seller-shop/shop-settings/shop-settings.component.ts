import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TreeData } from 'mat-tree-select-input';

import { LocationService } from 'src/app/services/location/location.service';

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

      this.profileForm.patchValue({
        logo : images[0]
      })

    })
  }
  constructor(public imageDialog:MatDialog,private fb:FormBuilder,private locationService:LocationService) { }

  profileForm = this.fb.group({
    name:['',Validators.required],
    bio:['',Validators.required],
    phone_contact:['',[Validators.required,Validators.minLength(9),Validators.maxLength(9),validatePhoneNumber()]],
    email_contact:['',[Validators.required,Validators.email]],
    pickup_location:[""],
    logo:[null]
  })
  submitForm(){
    this.profileForm.controls.phone_contact.clearValidators()
    this.profileForm.patchValue({phone_contact:`+254${this.profileForm.value.phone_contact}`})
    this.profileForm.patchValue({pickup_location:this.profileForm.value.pickup_location.value})
    console.log(this.profileForm.value)
  }
  ngOnInit(): void {
    this.locationService.currentLocations.subscribe(value => this.locations= value)
    this.locationService.getLocations()
  }

  locations:TreeData[] = []

}
