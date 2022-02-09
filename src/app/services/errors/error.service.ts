import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse} from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  // errorHandler(error:HttpErrorResponse){
  //   for(let i=0; i < error['error'])
  // }

  constructor(private snackBar:MatSnackBar) { }
}
