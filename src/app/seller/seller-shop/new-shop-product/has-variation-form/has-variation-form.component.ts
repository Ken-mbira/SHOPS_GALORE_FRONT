import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TreeData } from 'mat-tree-select-input';

import { ListService } from 'src/app/services/lists/list.service';
import { Brand } from 'src/app/interfaces/brand/brand';
import { Type } from 'src/app/interfaces/type/type';

@Component({
  selector: 'app-has-variation-form',
  templateUrl: './has-variation-form.component.html',
  styleUrls: ['./has-variation-form.component.css']
})
export class HasVariationFormComponent implements OnInit {

  brands:Brand[];
  categories:TreeData[];
  types:Type[];

  @Output() productSubmission = new EventEmitter<FormGroup>();

  submitProduct(){
    this.productForm.patchValue({"category":this.productForm.value.category['value']})
    this.productSubmission.emit(this.productForm);
  }

  constructor(private fb:FormBuilder,private listService:ListService) { }

  productForm = this.fb.group({
    name:['',Validators.required],
    sku:[''],
    brand:['',Validators.required],
    category:['',Validators.required],
    type:['',Validators.required],
    description:['',Validators.required],
    owner:[parseInt(localStorage.getItem("shop_id")),Validators.required],
    hasVariations:[true],
    attribute_value:[[]]
  })

  ngOnInit(): void {
    this.listService.currentBrands.subscribe(brands => this.brands = brands)
    this.listService.currentCategories.subscribe(categories => this.categories = categories)
    this.listService.currentTypes.subscribe(types => this.types = types)
    this.listService.getTypes()
    this.listService.getCategories()
    this.listService.getBrands()
  }

}
