import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-new-shop-product',
  templateUrl: './new-shop-product.component.html',
  styleUrls: ['./new-shop-product.component.css']
})
export class NewShopProductComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  hasVariations:boolean = null;

  stepperOrientation:Observable<StepperOrientation>

  constructor(private _formBuilder: FormBuilder,breakpointbserver:BreakpointObserver) {
    this.stepperOrientation = breakpointbserver
    .observe('(min-width:600px)')
    .pipe(map(({matches}) => (matches ? 'horizontal' :
    'vertical')));
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [Boolean, Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
}
