import { Component, OnInit, Input } from '@angular/core';

import { Product } from 'src/app/interfaces/product/product'

@Component({
  selector: 'app-single-product-variations',
  templateUrl: './single-product-variations.component.html',
  styleUrls: ['./single-product-variations.component.css']
})
export class SingleProductVariationsComponent implements OnInit {

  @Input() product:Product;
  
  constructor() { }

  ngOnInit(): void {
  }

}
