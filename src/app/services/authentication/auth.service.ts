import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private snackBar:MatSnackBar) { }

  login(credentials:any){
    this.http.post(`${environment.BASE_URL}api/token/`,credentials).subscribe(response=>{
      localStorage.setItem("access_token",response['access'])
      localStorage.setItem("refresh_token",response['refresh'])
    },error=>{
      console.log(error)
      this.snackBar.open(error['error']['detail'],"Try Again",{duration:3000})
    })
  }

}
