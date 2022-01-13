import { Component, OnInit, Input } from '@angular/core';

import { Product } from 'src/app/interfaces/product/product';

@Component({
  selector: 'app-single-product-details',
  templateUrl: './single-product-details.component.html',
  styleUrls: ['./single-product-details.component.css']
})
export class SingleProductDetailsComponent implements OnInit {

  @Input() product:Product;

  constructor() { }

  default:any;

  findDefault(){
    for(let i=0;i<this.images.length;i++){
      if(this.images[i].isDefault){
        this.default = this.images[i]
      }
    }
  }

  setDefault(i:any){
    this.product.product_images[i].isDefault = true;
    this.default =  this.product.product_images[i]
  }

  images:any = [
  ]

  deleteImage(i:any){
    if(this.default == this.product.product_images[i]){
      this.default=null;
    }
    this.images.splice(i,1);
  }

  fileBrowseHandler(event){
    console.log(event)
  }

  ngOnInit(): void {
    this.findDefault()
  }

}
