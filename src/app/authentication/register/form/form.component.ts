import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormGroup, FormGroupDirective } from '@angular/forms';

import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  registrationForm:FormGroup;

  constructor(private rootFormGroup:FormGroupDirective,private authService: SocialAuthService) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(result => {
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((result)=>{
      console.log(result)
    });
  }

  firstPasswordHide:boolean = true;
  secondPasswordHide:boolean = true;

  @Output() formSubmission = new EventEmitter<FormGroup>()

  submitForm(){
    this.formSubmission.emit(this.registrationForm)
  }

  ngOnInit(): void {
    this.registrationForm = this.rootFormGroup.control
  }

}
