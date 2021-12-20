import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-new-delivery-means',
  templateUrl: './new-delivery-means.component.html',
  styleUrls: ['./new-delivery-means.component.css']
})
export class NewDeliveryMeansComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

}
