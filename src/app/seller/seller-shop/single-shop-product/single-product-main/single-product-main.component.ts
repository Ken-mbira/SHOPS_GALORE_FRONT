import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms'

import { Product } from 'src/app/interfaces/product/product';
import { Brand } from 'src/app/interfaces/brand/brand';
import { Category } from 'src/app/interfaces/category/category'; 
import { ListService } from 'src/app/services/lists/list.service';
import { Type } from 'src/app/interfaces/type/type';
import { ProductService } from 'src/app/services/product/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-single-product-main',
  templateUrl: './single-product-main.component.html',
  styleUrls: ['./single-product-main.component.css']
})
export class SingleProductMainComponent implements OnInit {
  brands:Brand[];
  categories:Category[];
  types:Type[];

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
    attribute_value:[[]],
    discount_price:['',Validators.required],
    active:['',Validators.required]
  })

  @Input() product:Product;

  constructor(private listService:ListService,private fb:FormBuilder,private productService:ProductService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.listService.currentBrands.subscribe(brands => this.brands = brands)
    this.listService.currentSimpleCategories.subscribe(categories => this.categories = categories)
    this.listService.currentTypes.subscribe(types => this.types = types)
    this.listService.getTypes()
    this.listService.getCategories()
    this.listService.getBrands()
    this.listService.getSimpleCategories()
  }

  editProduct(){
    this.productForm.patchValue({
      "name": this.product.name,
      "sku":this.product.sku,
      "description":this.product.description,
      "category":this.product.category.id,
      "type":this.product.type.id,
      "brand":this.product.brand.id,
      "owner":this.product.owner,
      "volume":this.product.volume,
      "weight":this.product.weight,
      "active":this.product.active,
      "price":this.product.price,
      "discount_price":this.product.discount_price
    })

    this.productService.updateProduct(this.productForm,this.product.sku).subscribe(response => {
      this.snackBar.open("Product updated successfully","Congrats",{duration: 3000})
    },error => console.log(error))

  }

}
