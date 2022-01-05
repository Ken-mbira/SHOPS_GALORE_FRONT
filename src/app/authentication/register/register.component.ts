import { Component, OnInit } from '@angular/core';

import { BreakpointObserver } from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import { Validators,FormBuilder } from '@angular/forms';

import { MatStepper } from '@angular/material/stepper';


import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  stepperOrientation: Observable<StepperOrientation>;

  constructor(breakpointObserver: BreakpointObserver,private fb:FormBuilder) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 500px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  registrationForm = this.fb.group({
    role:[0,Validators.required],
    email:['', Validators.required,Validators.email],
    password:['', Validators.required],
    first_name:['',Validators.required],
    last_name:['',Validators.required],
  })

  chooseRole(event,stepper:MatStepper){
    this.registrationForm.patchValue({role:event.id})
    stepper.next()
    console.log(this.registrationForm.value)
  }

  ngOnInit(): void {
  }

}
