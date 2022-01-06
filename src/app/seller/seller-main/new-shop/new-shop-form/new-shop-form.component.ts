import { Component, OnInit,Output, EventEmitter } from '@angular/core';

import { FormGroup, FormGroupDirective } from '@angular/forms'

@Component({
  selector: 'app-new-shop-form',
  templateUrl: './new-shop-form.component.html',
  styleUrls: ['./new-shop-form.component.css']
})
export class NewShopFormComponent implements OnInit {

  newShopForm:FormGroup;

  constructor(private rootFormGroup:FormGroupDirective) { }

  @Output() formSubmission = new EventEmitter<FormGroup>();

  fillForm(){
    this.newShopForm.controls.phone_contact.clearValidators()
    this.newShopForm.patchValue({phone_contact:`+254${this.newShopForm.value.phone_contact}`})
    this.formSubmission.emit(this.newShopForm)
  }

  ngOnInit(): void {
    this.newShopForm = this.rootFormGroup.control
  }

}
