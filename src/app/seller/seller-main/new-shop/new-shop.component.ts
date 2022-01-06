import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation, MatStepper } from '@angular/material/stepper';
import { Validators,FormBuilder,FormGroup, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

export function validatePhoneNumber():ValidatorFn{
  return (control:AbstractControl) : ValidationErrors | null => {
    const value = control.value;

    const isAllNumbers = /^\d+$/.test(value);
    console.log(isAllNumbers)

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
    console.log(this.newShopForm)
  }

  constructor(breakpointObserver: BreakpointObserver,private fb:FormBuilder,private snackBar:MatSnackBar) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 500px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
  }

}
