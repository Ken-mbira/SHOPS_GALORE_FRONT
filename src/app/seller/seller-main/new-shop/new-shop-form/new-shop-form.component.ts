import { Component, OnInit } from '@angular/core';

import { FormGroup, FormGroupDirective } from '@angular/forms'

@Component({
  selector: 'app-new-shop-form',
  templateUrl: './new-shop-form.component.html',
  styleUrls: ['./new-shop-form.component.css']
})
export class NewShopFormComponent implements OnInit {

  newShopForm:FormGroup;

  constructor(private rootFormGroup:FormGroupDirective) { }

  ngOnInit(): void {
    this.newShopForm = this.rootFormGroup.control
  }

}
