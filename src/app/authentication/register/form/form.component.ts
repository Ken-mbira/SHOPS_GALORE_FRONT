import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormGroup, FormGroupDirective } from '@angular/forms';

import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { RegistrationService } from 'src/app/services/registration/registration.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  registrationForm:FormGroup;

  constructor(private rootFormGroup:FormGroupDirective,private authService: SocialAuthService,private registrationService:RegistrationService) { }

  signInWithGoogle(): void {
      this.googleSignIn.emit()
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((result)=>{
      console.log(result)
    });
  }

  firstPasswordHide:boolean = true;
  secondPasswordHide:boolean = true;

  @Output() formSubmission = new EventEmitter<FormGroup>()

  @Output() googleSignIn = new EventEmitter()

  submitForm(){
    this.formSubmission.emit(this.registrationForm)
  }

  ngOnInit(): void {
    this.registrationForm = this.rootFormGroup.control
  }

}
