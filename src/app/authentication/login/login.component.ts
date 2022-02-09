import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private authService:AuthService, private socialAuthService: SocialAuthService,private snackBar:MatSnackBar) { }

  loginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required]
  })

  login(){
    this.authService.login(this.loginForm.value)
  }

  googleSignIn(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(result => {
      let form = new FormData()
      form.append("auth_token",result['idToken'])
      this.authService.googleLogin(form).subscribe(response =>{
        this.authService.socialAuthLogin(response)
      },error=>{
        this.snackBar.open(`${error['error'][0]}`,"Sorry",{duration: 3000})
      })
    });
  }

  facebookSignIn(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(result => {
      let form = new FormData()
      form.append("auth_token",result['authToken'])
      this.authService.facebookLogin(form).subscribe(response =>{
        this.authService.socialAuthLogin(response)
      },error=>{
        this.snackBar.open(`${error['error'][0]}`,"Sorry",{duration: 3000})
      })
    });
  }

  hide:boolean = true;

  ngOnInit(): void {
  }

}
