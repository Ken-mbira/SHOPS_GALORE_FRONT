import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms'; import { TreeData } from 'mat-tree-select-input';

import { ListService } from 'src/app/services/lists/list.service';
import { Brand } from 'src/app/interfaces/brand/brand';
import { Type } from 'src/app/interfaces/type/type';

import { debounceTime } from 'rxjs/operators';



@Component({
  selector: 'app-no-variation-form',
  templateUrl: './no-variation-form.component.html',
  styleUrls: ['./no-variation-form.component.css']
})
export class NoVariationFormComponent implements OnInit {

  @Output() productSubmission = new EventEmitter<FormGroup>();

  stageProduct(){
    this.productForm.patchValue({"category":this.productForm.value.category['value']})
    this.productSubmission.emit(this.productForm);
  }

  constructor(private fb:FormBuilder, private listService:ListService) { }

  width:number = 0;
  height:number = 0;
  length:number = 0;

  volume:number = (this.width*this.height*this.length)
  

  productForm = this.fb.group({
    name:['',Validators.required],
    sku:[''],
    brand:['',Validators.required],
    category:['',Validators.required],
    type:['',Validators.required],
    description:['',Validators.required],
    price:['',Validators.required,],
    volume:[0,[Validators.required]],
    weight:['',Validators.required],
    owner:[localStorage.getItem("shop_id")],
    attribute_value:[[]]
  })

  checkVolume(){
    this.productForm.value.volume = (this.width * this.height * this.length).toFixed(2)
  }

  brands:Brand[];
  categories:TreeData[];
  types:Type[];

  ngOnInit(): void {
    this.listService.currentBrands.subscribe(brands => this.brands = brands)
    this.listService.currentCategories.subscribe(categories => this.categories = categories)
    this.listService.currentTypes.subscribe(types => this.types = types)
    this.listService.getTypes()
    this.listService.getCategories()
    this.listService.getBrands()

    this.productForm.valueChanges.pipe(debounceTime(100)).subscribe((changes) => {
      this.checkVolume();
    });
  }

}
