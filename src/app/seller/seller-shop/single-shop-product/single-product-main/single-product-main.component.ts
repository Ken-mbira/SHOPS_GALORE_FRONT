import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms'

import { Product } from 'src/app/interfaces/product/product';
import { Brand } from 'src/app/interfaces/brand/brand';
import { Category } from 'src/app/interfaces/category/category'; 
import { ListService } from 'src/app/services/lists/list.service';
import { Type } from 'src/app/interfaces/type/type';

@Component({
  selector: 'app-single-product-main',
  templateUrl: './single-product-main.component.html',
  styleUrls: ['./single-product-main.component.css']
})
export class SingleProductMainComponent implements OnInit {
  brands:Brand[];
  categories:Category[];
  types:Type[];

  @Input() product:Product;

  constructor(private listService:ListService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.listService.currentBrands.subscribe(brands => this.brands = brands)
    this.listService.currentSimpleCategories.subscribe(categories => this.categories = categories)
    this.listService.currentTypes.subscribe(types => this.types = types)
    this.listService.getTypes()
    this.listService.getCategories()
    this.listService.getBrands()
    this.listService.getSimpleCategories()
  }

}
