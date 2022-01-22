import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

import { PasswordService } from 'src/app/services/Passwords/password.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})

export class ResetComponent implements OnInit {

  resetForm = this.fb.group({
    token : ['',Validators.required],
    password: ['', [Validators.required]]
  })

  @Output() formReset = new EventEmitter<FormGroup>()

  constructor(private fb:FormBuilder) { }

  sendOutForm(){
    this.formReset.emit(this.resetForm)
  }

  ngOnInit(): void {
  }

}
