import { Component, OnInit } from '@angular/core';

import { BreakpointObserver } from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';

import { MatStepper } from '@angular/material/stepper';
import { MatSnackBar } from '@angular/material/snack-bar';


import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import { Role } from 'src/app/classes/role/role';
import { RegistrationService } from 'src/app/services/registration/registration.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  stepperOrientation: Observable<StepperOrientation>;

  constructor(breakpointObserver: BreakpointObserver,private fb:FormBuilder,private registrationService:RegistrationService,private snackBar:MatSnackBar) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 500px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  registrationForm = this.fb.group({
    role:[0,Validators.required],
    email:['', [Validators.email,Validators.required]],
    password:['', Validators.required],
    first_name:['',Validators.required],
    last_name:['',Validators.required],
  })

  chooseRole(event:Role,stepper:MatStepper){
    this.registrationForm.patchValue({role:event.id})
    stepper.next()
  }

  submitForm(event:FormGroup,stepper:MatStepper){
    this.registrationService.register(event).subscribe(response => {
      console.log(response)
      this.snackBar.open(`${response}`,"Thank you",{duration: 3000})
      stepper.next()
    },error=>{
      this.snackBar.open("There was a problem creating your account","Sorry",{duration: 3000})
    })
  }

  ngOnInit(): void {
  }

}
