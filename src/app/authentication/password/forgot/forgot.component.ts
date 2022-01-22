import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { PasswordService } from 'src/app/services/Passwords/password.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  passwordForm = this.fb.group({
    email: ['',[Validators.required,Validators.email]]
  })

  @Output() nextSlide = new EventEmitter<boolean>();

  constructor(private fb:FormBuilder,private passwordService:PasswordService,private matSnackBar:MatSnackBar) { }

  sendEmail(){
    this.passwordService.sendEmail(this.passwordForm).subscribe(response =>{
      this.matSnackBar.open("Check your email for the One Time Password","Okay",{duration:3000});
      this.nextSlide.emit(true);
    },error=>{
      error['error']['email'][0] ? this.matSnackBar.open(`${error['error']['email'][0]}`,"Sorry",{duration:3000}): this.matSnackBar.open("There was a problem processing your request!","Sorry",{duration:3000});
    })
  }

  ngOnInit(): void {
  }

}
