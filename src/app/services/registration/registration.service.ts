import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient,private snackBar:MatSnackBar) { }

  register(form:FormGroup){
    return this.http.post(`${environment.BASE_URL}account/`,form.value)
  }

  googleRegistration(data:FormData){
    return this.http.post(`${environment.BASE_URL}user/google_signup/`,data)
  }

  facebookRegistration(data:FormData){
    return this.http.post(`${environment.BASE_URL}user/facebook_signup/`,data)
  }
}
