import { Component, OnInit, Input } from '@angular/core';

import { Product } from 'src/app/interfaces/product/product';

@Component({
  selector: 'app-single-product-main',
  templateUrl: './single-product-main.component.html',
  styleUrls: ['./single-product-main.component.css']
})
export class SingleProductMainComponent implements OnInit {

  @Input() product:Product;

  constructor() { }

  ngOnInit(): void {
  }

}
