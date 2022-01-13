import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-has-variation-form',
  templateUrl: './has-variation-form.component.html',
  styleUrls: ['./has-variation-form.component.css']
})
export class HasVariationFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  productForm = this.fb.group({
    name:['',Validators.required],
    brand:['',Validators.required],
    category:['',Validators.required],
    type:['',Validators.required],
    description:['',Validators.required]
  })

  ngOnInit(): void {
  }

}
