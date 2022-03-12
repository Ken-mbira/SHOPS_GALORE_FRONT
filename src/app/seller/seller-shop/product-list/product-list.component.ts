import { Component, OnInit, Input } from '@angular/core';

import { Product } from 'src/app/interfaces/product/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  @Input() products:Product[];

  gridView:boolean = true;

  setView(gridView:boolean){
    localStorage.setItem("shopGridView",JSON.stringify(gridView));
    this.gridView = gridView;
  }

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("shopGridView")){
      this.gridView = Boolean(JSON.parse(localStorage.getItem("shopGridView")));
    }
  }

}
