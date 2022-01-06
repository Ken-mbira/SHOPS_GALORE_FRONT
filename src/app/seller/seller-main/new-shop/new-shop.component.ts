import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import { BreakpointObserver } from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';

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
    phone_contact:['',Validators.required],
    email_contact:['',[Validators.required,Validators.email]],
    pickup_location:[0,Validators.required]
  })

  constructor(breakpointObserver: BreakpointObserver,private fb:FormBuilder,private snackBar:MatSnackBar) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 500px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
  }

}
