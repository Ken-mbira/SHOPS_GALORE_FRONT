import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

import { JwtHelperService } from "@auth0/angular-jwt";

import { environment } from 'src/environments/environment';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private snackBar:MatSnackBar,private route:Router) {}

  public redirectUrl:string;

  private isAuthenticated = new BehaviorSubject<Boolean>(false)

  authStatus = this.isAuthenticated.asObservable()

  checkAuth(){
    const helper = new JwtHelperService()
    if(localStorage.getItem("access_token")){
      this.isAuthenticated.next(!helper.isTokenExpired(localStorage.getItem("access_token")))
      return !helper.isTokenExpired(localStorage.getItem("access_token"))
    }else{
      this.isAuthenticated.next(false)
      return false
    }
  }

  login(credentials:any){
    this.http.post(`${environment.BASE_URL}api/token/`,credentials).subscribe(response=>{
      localStorage.setItem("access_token",response['access'])
      localStorage.setItem("refresh_token",response['refresh'])
      this.route.navigate([this.redirectUrl])
      this.redirectUrl = null;
    },error=>{
      console.log(error)
      this.snackBar.open(error['error']['detail'],"Try Again",{duration:3000})
    })
  }

}
