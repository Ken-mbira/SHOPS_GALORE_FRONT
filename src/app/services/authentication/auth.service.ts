import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

import { JwtHelperService } from "@auth0/angular-jwt";

import { environment } from 'src/environments/environment';
import { User } from 'src/app/classes/user/user';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Role } from 'src/app/classes/role/role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private snackBar:MatSnackBar,private route:Router) {}

  public redirectUrl:string;

  private isAuthenticated = new BehaviorSubject<boolean>(false)
  authStatus = this.isAuthenticated.asObservable()

  private userInstance = new BehaviorSubject<User>(new User("",new Role(0,""),"","",new Date(),"","","","","",false))
  userStatus = this.userInstance.asObservable();

  checkTokenExpiration(){
    const helper = new JwtHelperService()
    this.isAuthenticated.next(!helper.isTokenExpired(localStorage.getItem("access_token")))
    return !helper.isTokenExpired(localStorage.getItem("access_token"))
  }

  checkAuth(){
    if(localStorage.getItem("access_token")){
      this.isAuthenticated.next(true)
    }else{
      this.isAuthenticated.next(false)
    }
  }

  getInstance(){

    let headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('access_token')}`
    })

    this.http.get(`${environment.BASE_URL}user/instance/`,{"headers":headers}).subscribe(response => {
      this.setToken(response['role']['name'],'user_role')

      this.userInstance.next(new User(
        response['email'],
        new Role(
          response['role']['id'],
          response['role']['name']
        ),
        response['first_name'],
        response['last_name'],
        response['member_since'],
        response['profile']['phone_number'],
        response['profile']['bio'],
        response['profile']['location'],
        response['profile']['avatar'],
        response['profile']['gender'],
        response['profile']['receive_notifications_via_email']
      ))

      if(this.redirectUrl){
        console.log(this.redirectUrl)
        this.route.navigate([this.redirectUrl])
        this.redirectUrl = null;
      }else{
        this.route.navigate([response['role']['name']])
      }
    })
  }

  login(credentials:any){
    this.http.post(`${environment.BASE_URL}api/token/`,credentials).subscribe(response=>{
      this.setToken(response['access'],'access_token')
      this.setToken(response['refresh'],'refresh_token')
      this.getInstance()
    },error=>{
      this.snackBar.open(error['error']['detail'],"Try Again",{duration:3000})
    })
  }

  setToken(token:string,name:string){
    localStorage.setItem(name,token)
  }

  logout(){
    localStorage.removeItem("user_role")
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")

    this.route.navigate([''])
  }

  getAccessToken(){
    return localStorage.getItem("access_token")
  }

  getRefreshToken(){
    return localStorage.getItem("refresh_token")
  }

  refreshToken() {
    return this.http.post<any>(`${environment.BASE_URL}api/token/refresh/`, {
      'refresh': this.getRefreshToken()
    })
  }

}
