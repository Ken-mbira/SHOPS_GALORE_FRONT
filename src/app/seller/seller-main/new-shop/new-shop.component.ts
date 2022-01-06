import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';

import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation, MatStepper } from '@angular/material/stepper';
import { Validators,FormBuilder,FormGroup, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

import { ShopService } from '../../services/shop.service';

export function validatePhoneNumber():ValidatorFn{
  return (control:AbstractControl) : ValidationErrors | null => {
    const value = control.value;

    const isAllNumbers = /^\d+$/.test(value);

    return ! isAllNumbers ? {allNumbers:true} : null;
  }
}

@Component({
  selector: 'app-new-shop',
  templateUrl: './new-shop.component.html',
  styleUrls: ['./new-shop.component.css']
})
export class NewShopComponent implements OnInit {

  stepperOrientation: Observable<StepperOrientation>;

  newShopForm = this.fb.group({
    name:['',Validators.required],
    bio:['',Validators.required],
    phone_contact:['',[Validators.required,Validators.minLength(9),Validators.maxLength(9),validatePhoneNumber()]],
    email_contact:['',[Validators.required,Validators.email]],
    pickup_location:[""]
  })

  moveStepper(event:FormGroup,stepper:MatStepper){
    stepper.next()
  }

  submitForm(event:FormGroup){
    this.shopService.createShop(event).subscribe(response=>{
      this.snackBar.open("Your shop was created successfully!","Congratulations",{duration:3000})
      console.log(response)
    },error => {
      this.snackBar.open("There was a problem creating your shop","Sorry",{duration:3000})
      console.log(error)
    })
    this.router.navigate(['store_owner/shops/'])
  }

  constructor(breakpointObserver: BreakpointObserver,private fb:FormBuilder,private snackBar:MatSnackBar,private shopService:ShopService,private router:Router) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 500px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
  }

}
