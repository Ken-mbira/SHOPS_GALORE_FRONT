import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormGroup, FormGroupDirective } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  registrationForm:FormGroup;

  constructor(private rootFormGroup:FormGroupDirective) { }

  firstPasswordHide:boolean = true;
  secondPasswordHide:boolean = true;

  @Output() formSubmission = new EventEmitter<FormGroup>()

  submitForm(){
    this.formSubmission.emit(this.registrationForm)
  }

  ngOnInit(): void {
    this.registrationForm = this.rootFormGroup.control
  }

}
