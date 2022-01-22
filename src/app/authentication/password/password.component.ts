import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { BreakpointObserver } from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import { MatStepper } from '@angular/material/stepper';
import { MatSnackBar } from '@angular/material/snack-bar';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import { PasswordService } from 'src/app/services/Passwords/password.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  stepperOrientation: Observable<StepperOrientation>;

  constructor(breakpointObserver: BreakpointObserver,private fb:FormBuilder,private snackBar:MatSnackBar,private passwordService:PasswordService, private router:Router) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 500px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  resetPassword(event:FormGroup){
    this.passwordService.resetPassword(event).subscribe(response => {
      this.snackBar.open("The password was successfully reset","Log in",{duration:3000})
      this.router.navigate(['auth/login']);
    },error => {
      this.snackBar.open("There was a problem resetting the password, please make sure the password is more than 8 characters and is not purely digits","Sorry",{duration:3000})
    })
  }

  ngOnInit(): void {
  }

}
