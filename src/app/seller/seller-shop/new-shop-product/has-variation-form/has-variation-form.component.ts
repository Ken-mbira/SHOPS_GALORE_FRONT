import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TreeData } from 'mat-tree-select-input';

import { ListService } from 'src/app/services/lists/list.service';
import { Brand } from 'src/app/interfaces/brand/brand';

@Component({
  selector: 'app-has-variation-form',
  templateUrl: './has-variation-form.component.html',
  styleUrls: ['./has-variation-form.component.css']
})
export class HasVariationFormComponent implements OnInit {

  brands:Brand[];
  categories:TreeData[];

  constructor(private fb:FormBuilder,private listService:ListService) { }

  productForm = this.fb.group({
    name:['',Validators.required],
    brand:['',Validators.required],
    category:['',Validators.required],
    type:['',Validators.required],
    description:['',Validators.required]
  })

  ngOnInit(): void {
    this.listService.currentBrands.subscribe(brands => this.brands = brands)
    this.listService.currentCategories.subscribe(categories => this.categories = categories)
    this.listService.getCategories()
    this.listService.getBrands()
  }

}
