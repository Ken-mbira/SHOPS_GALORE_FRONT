import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http:HttpClient,private snackBar:MatSnackBar,private router:Router) { }

  getShopList(){
    return this.http.get(`${environment.BASE_URL}shop/`)
  }

  createShop(data:FormGroup){
    return this.http.post(`${environment.BASE_URL}shop/`,data.value)
  }
}
