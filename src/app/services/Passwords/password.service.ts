import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private http:HttpClient) { }

  sendEmail(form:FormGroup){
    return this.http.post(`${environment.BASE_URL}user/api/password_reset/`,form.value)
  }

  resetPassword(form:FormGroup){
    return this.http.post(`${environment.BASE_URL}user/api/password_reset/confirm/`,form.value)
  }


}
